import fs from 'node:fs/promises';
import path from 'node:path';
import * as espree from 'espree';
import { builtinPlugins } from 'svgo';

const PRESET_DEFAULT = 'preset-default';
const DOCUSAURUS_DOCS_PLUGIN = '@docusaurus/plugin-content-docs';

/**
 * @typedef {object} SvgoPlugin
 * @property {boolean} isDefault
 * @property {string?} since
 *   First stable release of SVGO the plugin was released on.
 * @typedef {object} SvgoPluginData
 * @property {Record<string, SvgoPlugin>} plugins
 *   Extra data about plugins excluding presets.
 */

/** @type {import('espree').Options} */
export const ESPREE_ESM = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  comment: true,
};

/**
 * Use the SVGO JS API and Espree to rip information out of SVGO and embed it
 * into the documentation. For example, plugin presets and JSDoc tags.
 *
 * @param {import('@docusaurus/types').LoadContext} context
 * @returns {import('@docusaurus/types').Plugin}
 */
export default function svgo(context) {
  return {
    name: 'svgo',
    async contentLoaded({ actions }) {
      const { setGlobalData } = actions;

      const docsPlugin = /** @type {[string, import('@docusaurus/types').PluginOptions]=} */ (
        context.siteConfig.plugins.find((p) => {
          return Array.isArray(p) && p[0] === DOCUSAURUS_DOCS_PLUGIN;
        })
      );

      if (!docsPlugin) {
        throw Error(`Docusaurus plugin ${DOCUSAURUS_DOCS_PLUGIN} is not registered.`);
      }

      const docsOptions = /** @type {import('@docusaurus/plugin-content-docs').Options} */ (docsPlugin[1]);
      const docsPath = /** @type {string} */ (docsOptions.path);

      const presetDefault = builtinPlugins.find(p => p.name === PRESET_DEFAULT);
      if (!presetDefault?.isPreset) {
        throw new Error(`SVGO preset ${PRESET_DEFAULT} does not exist.`);
      }

      const defaultPlugins = presetDefault.plugins.map(p => p.name);
      const allPlugins = builtinPlugins.filter(p => !p.isPreset);
      /** @type {SvgoPluginData['plugins']} */
      const plugins = {};

      for (const plugin of allPlugins) {
        const pluginSrc = path.join(
          context.siteDir,
          path.dirname(docsPath),
          'plugins',
          `${plugin.name}.js`
        );

        plugins[plugin.name] = {
          isDefault: defaultPlugins.includes(plugin.name),
          since: await getSinceAttribute(pluginSrc),
        };
      }

      setGlobalData(/** @type {SvgoPluginData} */ ({
        plugins,
      }));
    },
  };
}

/**
 * @param {string} src
 * @returns {Promise<string?>}
 */
async function getSinceAttribute(src) {
  const content = await fs.readFile(src, 'utf-8');
  const tokens = espree.tokenize(content, ESPREE_ESM);
  const comment = tokens.comments?.find(c => {
    const value = c.value;
    return /@type.+Plugin/.test(value) && value.includes('@since');
  })?.value;

  if (!comment) {
    return null;
  }

  const match = comment.match(/(?<=@since\s)([\d.]+)(?=\b\s*$)/m);
  return match ? match[0] : match;
}
