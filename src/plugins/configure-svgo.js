import path from 'path';

/**
 * Docusaurus uses SVGR internally, which in turn uses SVGO. We need to
 * configure SVGO to avoid issues with inlining multiple SVG documents into a
 * single page.
 *
 * @returns {Object}
 *
 * @see https://github.com/facebook/docusaurus/issues/8297
 */
function configureSvgo() {
  return {
    name: 'configure-svgo',
    configureWebpack(config) {
      /** @type {object[]} */
      const rules = config.module.rules;

      const rule = rules.find((rule) => {
        /** @type {string|undefined} */
        const loader = rule.oneOf?.[0]?.use?.[0]?.loader;
        return loader && loader.includes('/@svgr/');
      });

      const svgoConfig = rule.oneOf[0].use[0].options.svgoConfig;
      svgoConfig.plugins = [
        {
          ...svgoConfig.plugins[0],
          params: {
            overrides: {
              ...svgoConfig.plugins[0].params.overrides,
              mergePaths: {
                noSpaceAfterFlags: true
              }
            }
          }
        },
        {
          name: 'prefixIds',
          params: {
            delim: '',
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
      ];

      return {
        mergeStrategy: {
          'module.rules': 'replace'
        },
        module: { rules }
      };
    }
  };
}

module.exports = configureSvgo;
