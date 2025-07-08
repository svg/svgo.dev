/**
 * @returns {any}
 * @see https://preactjs.com/guide/v10/getting-started#aliasing-in-webpack
 */
function preact() {
  return {
    name: 'preact',
    configureWebpack(config) {
      const alias = config?.resolve?.alias ?? {};
      alias['react'] = 'preact/compat';
      alias['react-dom/test-utils'] = 'preact/test-utils';
      alias['react-dom'] = 'preact/compat';
      alias['react/jsx-runtime'] = 'preact/jsx-runtime';

      return {
        mergeStrategy: {
          'resolve.alias': 'replace'
        },
        resolve: { alias }
      };
    }
  };
}

module.exports = preact;
