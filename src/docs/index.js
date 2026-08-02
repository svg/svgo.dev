/**
 * @typedef {object} SvgoFrontMatterParameter
 * @property {string} [description]
 * @property {string} [type]
 * @property {unknown} [default]
 */

/**
 * @typedef {object} SvgoFrontMatter
 * @property {string} pluginId
 * @property {boolean} [defaultPlugin]
 * @property {Record<string, SvgoFrontMatterParameter>} [parameters]
 */

/**
 * @typedef {import('@docusaurus/plugin-content-docs').DocFrontMatter & {
 *   svgo?: SvgoFrontMatter
 * }} SvgoDocFrontMatter
 */

export {};
