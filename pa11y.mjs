import { styleText } from 'node:util';
import pa11y from 'pa11y';
import puppeteer from 'puppeteer';
import docusaurusConfig from './docusaurus.config.mjs';

/**
 * @typedef {'light'|'dark'} ColorScheme
 * @typedef {object} TestCase
 * @property {string} name
 * @property {ColorScheme} colorScheme
 */

const TEST_HOST = 'http://localhost:3000';
const SITEMAP_URL = new URL('sitemap.xml', `${TEST_HOST}${docusaurusConfig.baseUrl}`).href;
const PAGE_PATTERN = new RegExp(`(?<=>${RegExp.escape(docusaurusConfig.url)}).+?(?=<)`, 'g');

const IGNORED_SELECTORS = [
  // Prism code blocks.
  'pre span.token',
  'div[class*=theme-code-block]',
  // Doesn't expose custom CSS property to override.
  'div[class*=playgroundHeader]',
  // Caused by an underlying bug in the Docusaurus theme… I think!
  'div[class^=errorBoundaryFallback]',
  // False positive.
  'p[class^=copy]',
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
 * @param {string} sitemapUrl
 * @param {string} host
 * @returns {Promise<string[]>}
 */
async function getUrls(sitemapUrl, host) {
  const resp = await fetch(sitemapUrl);

  if (!resp.ok) {
    throw Error(`Bad response when fetching sitemap <${sitemapUrl}>.`);
  }

  const contentType = resp.headers.get('content-type');

  if (!contentType?.includes('application/xml')) {
    throw Error(`Sitemap <${sitemapUrl}> has wrong Content-Type, expected application/xml, received ${contentType}.`);
  }

  const sitemap = await resp.text();
  const urls = sitemap.matchAll(PAGE_PATTERN).map((p) => `${host}${p}`).toArray();

  if (!urls.length) {
    throw Error(`No URLs found in sitemap <${sitemapUrl}>.`);
  }

  return urls;
}

/**
 * @param {import('puppeteer').Browser} browser
 * @param {TestCase} testCase
 * @param {string[]} urls
 */
async function pa11yRunner(browser, testCase, urls) {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([
    { name: 'prefers-color-scheme', value: testCase.colorScheme }
  ]);

  const results = [];

  for (const url of urls) {
    const result = await pa11y(url, {
      standard: 'WCAG2AAA',
      // @ts-expect-error Puppeteer types are mismatched.
      browser,
      // @ts-expect-error Puppeteer types are mismatched.
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

const urls = await getUrls(SITEMAP_URL, TEST_HOST);
const browser = await puppeteer.launch({ protocolTimeout: 2000 });
const results = await Promise.all(TEST_CASES.map(async (testCase) => ({
  name: testCase.name,
  result: await pa11yRunner(browser, testCase, urls),
})));

await browser.close();

/**
 * We encode all reported issues into keys and store them as they're processed.
 * If the key matches, we assume it's the same issue and skip it in the report.
 */
const processedKeys = new Set();
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
    const key = `${issue.code}:${issue.message}:${issue.context}:${issue.selector}`;

    if (processedKeys.has(key)) {
      continue;
    }

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

    processedKeys.add(key);
  }
}

if (failed) {
  process.exitCode = 1;
}
