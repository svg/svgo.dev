const postcss = require('postcss');

/**
 * Docusaurus theming depends on JavaScript by default. This drops that in
 * favor of `prefers-color-scheme`.
 *
 * Doesn't work for components styled with Prism like code blocks.
 *
 * @param {Object} context
 * @returns {Object}
 */
function prefersColorScheme(context) {
  const themeConfig = context.siteConfig.themeConfig;
  const { colorMode } = themeConfig;

  return {
    name: 'prefers-color-scheme',
    configurePostCss(postCssOptions) {
      if (colorMode.disableSwitch && colorMode.respectPrefersColorScheme) {
        /** @type {postcss.Plugin} */
        const plugin = {
          postcssPlugin: 'PrefersColorSchemePlugin',
          Rule(rule) {
            if (!rule.parent) {
              return;
            }

            const pattern = /\[data-theme=(["']|)([^"']+)\1\]/;
            const newSelectors = [];

            for (const selector of rule.selectors) {
              const match = pattern.exec(selector);

              if (!match) {
                newSelectors.push(selector);
                continue;
              }

              const [fullMatch, , theme] = match;

              // Replace attribute selector ([data-theme]) with an always
              // matching selector of equal specificity (0, 1, 0)
              const trimmed = selector.replace(fullMatch, '');
              const newSelector =
                trimmed.length > 0 ? `${trimmed}:not(._)` : ':root';

              const newRule = rule.clone();
              newRule.selector = newSelector;
              newRule.selectors = [newSelector];

              const media = new postcss.AtRule({
                name: 'media',
                params: `(prefers-color-scheme: ${theme})`,
                nodes: [newRule],
              });

              rule.parent.insertBefore(rule, media);
            }

            if (newSelectors.length === 0) {
              rule.remove();
              return;
            }

            rule.selector = newSelectors.join(',');
            rule.selectors = newSelectors;
          },
        };

        postCssOptions.plugins.push(plugin);
      }

      return postCssOptions;
    },
  };
}

module.exports = prefersColorScheme;
