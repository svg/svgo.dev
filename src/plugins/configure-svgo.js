let prefixCounter = 0;

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
        return loader && loader.includes("/@svgr/");
      });

      const svgoConfig = rule.oneOf[0].use[0].options.svgoConfig;
      svgoConfig.plugins.push({
        name: "prefixIds",
        params: {
          delim: "",
          prefix: () => `a${prefixCounter++}`
        }
      });

      return {
        mergeStrategy: {
          "module.rules": "replace"
        },
        module: { rules }
      };
    }
  };
}

module.exports = configureSvgo;
