import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { themes } from 'prism-react-renderer';
import path from 'path';

const VUKORY_SVG = '<svg height="1em" viewBox="0 0 378.627 333.846"><path fill="currentcolor" d="M86.059 0 67.28 69.362l27.025 28.86-70.296 40.574 20.506 7.41L0 175.596h70.96l-2.327 13.242 67.302.058-12.653 46.196 18.083-3.42 27.746 96.978 20.202 5.196 20.203-5.196 27.745-96.977 18.083 3.419-12.653-46.196 67.302-.058-2.326-13.241h70.96l-44.515-29.391 20.505-7.41-70.296-40.573 27.026-28.861L292.567 0l-56.345 57.422-46.909 21.009-46.909-21.01Z"/></svg>';

/**
 * Remove unwanted styles from a Prism themes. This is easier than configuring
 * a theme from scratch, and more efficient than encumbering our CSS with
 * style overrides.
 *
 * @param {import('prism-react-renderer').PrismTheme} theme
 * @returns {import('prism-react-renderer').PrismTheme}
 *   Reference to the same theme that was passed as a parameter.
 */
function amendTheme(theme) {
  theme.styles = theme.styles.filter((style) => {
    return !(style.types[0] === 'deleted' || style.types[0] === 'inserted' && style.style.textDecorationLine);
  });

  return theme;
}

/** @type {import('@docusaurus/theme-classic').Options} */
const themeClassicOptions = {
  customCss: require.resolve('./src/css/custom.css'),
};

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const pluginContentDocsOptions = {
  path: '.svgo/docs',
  breadcrumbs: true,
  sidebarPath: require.resolve('./sidebars.js'),
  editUrl: ({ docPath }) => `https://github.com/svg/svgo/tree/main/docs/${docPath}`,
};

/** @type {import('@docusaurus/plugin-content-pages').Options} */
const pluginContentPagesOptions = {
  path: 'src/pages',
  routeBasePath: '/',
};

/** @type {import('@docusaurus/plugin-client-redirects').Options} */
const pluginClientRedirectsOptions = {
  redirects: [
    {
      to: '/docs/plugins/removeScripts/',
      from: '/docs/plugins/removeScriptElement/',
    },
  ],
};

/** @type {import('@docusaurus/plugin-sitemap').Options} */
const pluginSitemapOptions = {
  filename: 'sitemap.xml',
  ignorePatterns: [
    '/.well-known/**'
  ],
  createSitemapItems: async (params) => {
    const { defaultCreateSitemapItems, ...rest } = params;

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
};

/** @type {import('@docusaurus/plugin-svgr').Options} */
const pluginSvgrOptions = {
  svgrConfig: {
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeTitle: false,
              removeViewBox: false,
              mergePaths: {
                noSpaceAfterFlags: true
              }
            },
          },
        },
        {
          name: 'prefixIds',
          params: {
            delim: '',
            /**
             * @param {import('svgo').XastElement} _
             * @param {import('svgo').PluginInfo & { path: string }} info
             * @returns {string}
             */
            prefix: (_, info) => path.parse(info.path).name
          }
        },
        {
          name: 'removeXlink',
          params: {
            includeLegacy: true
          }
        },
        'removeXMLNS'
      ]
    }
  }
};


/**
 * Config for Docusaurus.
 *
 * $.tagline is undefined, as our copy is specified in the code instead.
 * $.themeConfig.navbar.logo is undefined as this is configured with a custom component.
 * $.themeConfig.footer.style is ignored as this is overridden with custom CSS.
 *
 * @type {import('@docusaurus/types').Config}
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
      /** @type {any} */
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
    ['@docusaurus/plugin-client-redirects', pluginClientRedirectsOptions],
    ['@docusaurus/theme-classic', themeClassicOptions],
    ['@docusaurus/plugin-content-pages', pluginContentPagesOptions],
    ['@docusaurus/plugin-content-docs', pluginContentDocsOptions],
    ['@docusaurus/plugin-sitemap', pluginSitemapOptions],
    ['@docusaurus/plugin-svgr', pluginSvgrOptions],
    './src/plugins/prefers-color-scheme.js',
    './src/plugins/delete-redundant-declarations.js',
    './src/plugins/preact.js',
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
      darkTheme: amendTheme(themes.oneDark),
      additionalLanguages: ['diff'],
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
