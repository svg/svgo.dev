/**
 * Configures postcss-preset-env.
 *
 * Enables nesting-rules to flatten CSS nesting as clean-css (part of the
 * bundling pipeline) doesn't support it. Nested CSS breaks the build. :c
 *
 * @see https://github.com/clean-css/clean-css/issues/1254
 * @returns {any}
 */
export default function configurePostcssPresetEnv() {
  return {
    name: 'configure-postcss-preset-env',
    configurePostCss(postCssOptions) {
      postCssOptions.plugins[0][1] = {
        features: {
          'custom-properties': false,
          'nesting-rules': true,
        }
      };

      return postCssOptions;
    },
  };
}
