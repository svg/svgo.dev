/**
 * The default theme for Docusaurus includes a lot of same-selector overrides.
 * This cleans that up, since it's not being optimized otherwises.
 *
 * We only preserve the last one with `!important`, or the last one in general
 * if none of the values are `!important`.
 *
 * @example
 * .button {
 *   background-color: inherit;
 *   background-color: var(--ifm-button-background-color);
 * }
 * →
 * .button {
 *   background-color: var(--ifm-button-background-color);
 * }
 *
 * @returns {any}
 */
function prefersColorScheme() {
  return {
    name: 'delete-redundant-declarations',
    configurePostCss(postCssOptions) {
      /** @type {import('postcss').Plugin} */
      const plugin = {
        postcssPlugin: 'DeleteRedundantDeclarations',
        Rule(rule) {
          /** @type {Map<string, import('postcss').Declaration>} */
          const declsToRemove = new Map();

          rule.walkDecls(decl => {
            const propertyName = decl.prop;
            const prevDecl = declsToRemove.get(propertyName);

            if (!prevDecl) {
              declsToRemove.set(propertyName, decl);
              return;
            }

            if (decl.important || !prevDecl.important) {
              prevDecl.remove();
              declsToRemove.set(propertyName, decl);
            }
          });
        },
      };

      postCssOptions.plugins.push(plugin);
      return postCssOptions;
    },
  };
}

module.exports = prefersColorScheme;
