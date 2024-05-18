import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const { themes } = require('prism-react-renderer');

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
  title: "SVGO",
  favicon: "img/favicon.ico",
  url: "https://svgo.dev",
  baseUrl: "/",
  baseUrlIssueBanner: false,
  organizationName: "svg",
  projectName: "svgo.dev",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  i18n: {
    defaultLocale: "en",
    locales: [
      "en"
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
      "@docusaurus/theme-classic",
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        path: "src/pages",
        routeBasePath: "/"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        path: ".svgo/docs",
        breadcrumbs: true,
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: ({ docPath }) => `https://github.com/svg/svgo/tree/main/docs/${docPath}`,
      }
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        filename: "sitemap.xml",
        ignorePatterns: [
          "/.well-known/**"
        ]
      }
    ],
    "./src/plugins/prefers-color-scheme.js",
    "./src/plugins/configure-svgo.js"
  ],
  themes: [
    '@docusaurus/theme-live-codeblock',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        language: "en",
        hashed: true,
        searchBarPosition: "right"
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
          type: "docSidebar",
          position: "left",
          sidebarId: "docsSidebar",
          label: "Documentation"
        },
        {
          href: "https://jakearchibald.github.io/svgomg/",
          position: "left",
          label: "Playground"
        },
        {
          href: "https://github.com/svg/svgo",
          position: "right",
          html: `<img src="https://img.shields.io/github/stars/svg/svgo?style=social" alt="" height="20" width="88"/>`,
          className: 'github-shield',
          'aria-label': 'GitHub repository'
        }
      ],
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula
    },
    footer: {
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/svgo",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/z8jX8NYxrE",
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/svg/svgo",
            },
            {
              label: "Open Collective",
              href: "https://opencollective.com/svgo"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/svg/svgo/graphs/contributors">SVGO and Contributors</a><br>Source Code under MIT · Content and Assets under CC-BY-4.0`
    },
  },
};

export default config;
