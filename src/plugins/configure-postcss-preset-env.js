/**
 * Configures postcss-preset-env.
 *
 * @returns {any}
 */
function configurePostcssPresetEnv() {
  return {
    name: 'configure-postcss-preset-env',
    configurePostCss(postCssOptions) {
      postCssOptions.plugins[0][1] = {
        features: {
          'custom-properties': false,
        }
      };

      return postCssOptions;
    },
  };
}

module.exports = configurePostcssPresetEnv;
