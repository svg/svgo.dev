import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const { themes } = require('prism-react-renderer');

const VUKORY_SVG = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 378.627 333.846"><path fill="currentcolor" d="M86.059 0 67.28 69.362l27.025 28.86-70.296 40.574 20.506 7.41L0 175.596h70.96l-2.327 13.242 67.302.058-12.653 46.196 18.083-3.42 27.746 96.978 20.202 5.196 20.203-5.196 27.745-96.977 18.083 3.419-12.653-46.196 67.302-.058-2.326-13.241h70.96l-44.515-29.391 20.505-7.41-70.296-40.573 27.026-28.861L292.567 0l-56.345 57.422-46.909 21.009-46.909-21.01Z"/></svg>';

/**
 * @typedef {import("@docusaurus/types").Config} Config
 */

/**
 * Config for Docusaurus.
 *
 * $.tagline is undefined, as our copy is specified in the code instead.
 * $.themeConfig.navbar.logo is undefined as this is configured with a custom component.
 * $.themeConfig.footer.style is ignored as this is overridden with custom CSS.
 *
 * @type {Config}
 */
const config = {
  title: 'SVGO',
  favicon: 'img/favicon.ico',
  url: 'https://svgo.dev',
  baseUrl: '/',
  baseUrlIssueBanner: false,
  organizationName: 'svg',
  projectName: 'svgo.dev',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en'
    ],
  },
  markdown: {
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);

      if (!result.frontMatter.svgo?.parameters) {
        return result;
      }

      for (const key in result.frontMatter.svgo.parameters) {
        const param = result.frontMatter.svgo.parameters[key];

        if (!param || !param.description) {
          continue;
        }

        let processed = await unified()
          .use(remarkParse, { allowDangerousHtml: true })
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypeStringify, {
            allowDangerousCharacters: true,
            allowDangerousHtml: true,
          })
          .process(param.description);

        param.description = processed.value;
      }

      return result;
    },
    mdx1Compat: {
      admonitions: false,
      comments: false,
      headingIds: false
    }
  },
  plugins: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css'),
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
        routeBasePath: '/'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: '.svgo/docs',
        breadcrumbs: true,
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: ({ docPath }) => `https://github.com/svg/svgo/tree/main/docs/${docPath}`,
      }
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        filename: 'sitemap.xml',
        ignorePatterns: [
          '/.well-known/**'
        ],
        createSitemapItems: async (params) => {
          const { defaultCreateSitemapItems, ...rest } = params;

          /** @type {object[]} */
          let items = await defaultCreateSitemapItems(rest);
          items = items.map((item) => {
            const pathname = new URL(item.url).pathname;

            if (pathname === '/') {
              item.priority = 1;
            } else if (pathname === '/search/') {
              item.priority = 0.1;
              item.changefreq = 'monthly';
            }

            return item;
          });

          return items;
        },
      }
    ],
    './src/plugins/prefers-color-scheme.js',
    './src/plugins/configure-svgo.js'
  ],
  themes: [
    '@docusaurus/theme-live-codeblock',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        language: 'en',
        hashed: true,
        searchBarPosition: 'right'
      }
    ]
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'docsSidebar',
          label: 'Documentation'
        },
        {
          href: 'https://jakearchibald.github.io/svgomg/',
          position: 'left',
          label: 'Playground'
        },
        {
          href: 'https://github.com/svg/svgo',
          position: 'right',
          html: '<img src="https://img.shields.io/github/stars/svg/svgo?style=social" alt="" height="20" width="88"/>',
          className: 'github-shield',
          'aria-label': 'GitHub repository'
        }
      ],
    },
    prism: {
      theme: themes.vsLight,
      darkTheme: themes.oneDark
    },
    footer: {
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/svgo',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/z8jX8NYxrE',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/svg/svgo',
            },
            {
              label: 'Open Collective',
              href: 'https://opencollective.com/svgo'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/svg/svgo/graphs/contributors">SVGO and Contributors</a><br>Source Code under MIT · Content and Assets under CC-BY-4.0<br>Designed and Illustrated by <a class="designer-attribution" href="https://www.artstation.com/vukory" target="_blank">Vukory ${VUKORY_SVG}</a>`
    },
  },
};

export default config;
