import { styleText } from 'node:util';
import pa11y from 'pa11y';
import puppeteer from 'puppeteer';

/**
 * @typedef {'light'|'dark'} ColorScheme
 * @typedef {object} TestCase
 * @property {string} name
 * @property {ColorScheme} colorScheme
 */

const SITEMAP_URL = 'http://localhost:3000/sitemap.xml';
const PAGE_PATTERN = /(?<=https:\/\/svgo.dev).*?(?=<)/g;

const IGNORED_SELECTORS = [
  // Prism code blocks.
  'pre span.token',
  'div[class*=theme-code-block]',
  // Doesn't expose custom CSS property to override.
  'div[class*=playgroundHeader]',
  // Caused by an underlying bug in the Docusaurus theme… I think!
  'div[class^=errorBoundaryFallback]',
];

const IGNORED_MESSAGES = [
  // Pa11y doesn't handle opacity/alpha well.
  /contrast ratio of NaN:1/,
];

/** @type {TestCase[]} */
const TEST_CASES = [
  {
    name: 'Light Mode (default)',
    colorScheme: 'light'
  },
  {
    name: 'Dark Mode',
    colorScheme: 'dark'
  },
];

/**
 * @param {import('puppeteer').Browser} browser
 * @param {TestCase} testCase
 * @param {string[]} urls
 */
const pa11yRunner = async (browser, testCase, urls) => {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([
    { name: 'prefers-color-scheme', value: testCase.colorScheme }
  ]);

  const results = [];

  for (const url of urls) {
    const result = await pa11y(url, {
      standard: 'WCAG2AAA',
      browser,
      page,
      hideElements: IGNORED_SELECTORS.join(', '),
    });

    result.issues = result.issues.filter(i => {
      return !IGNORED_MESSAGES.some(re => re.test(i.message));
    });

    results.push(result);
  }

  await page.close();
  return results;
};

const sitemap = (await (await fetch(SITEMAP_URL)).text());
const urls = sitemap.matchAll(PAGE_PATTERN).map((p) => `http://localhost:3000${p}`).toArray();

const browser = await puppeteer.launch();
const results = await Promise.all(TEST_CASES.map(async (testCase) => ({
  name: testCase.name,
  result: await pa11yRunner(browser, testCase, urls),
})));

await browser.close();

let failed = false;

for (const { name, result } of results) {
  const issues = result.flatMap(result => result.issues.map(i => ({
    ...i,
    pageUrl: result.pageUrl
  })));

  if (issues.length === 0) {
    continue;
  }

  failed = true;

  for (const issue of issues) {
    console.error(
      '%s > %s\n%s %s\n%s %s\n%s %s\n%s %s\n',
      styleText(['blue', 'bold'], name),
      styleText(['red', 'bold'], issue.code),
      styleText('yellow', 'Page URL:'),
      styleText(['blue', 'italic'], issue.pageUrl),
      styleText('yellow', 'Message:'),
      issue.message,
      styleText('yellow', 'Context:'),
      styleText(['gray', 'italic'], issue.context),
      styleText('yellow', 'Selector:'),
      styleText('gray', issue.selector),
    );
  }
}

if (failed) {
  process.exitCode = 1;
}
