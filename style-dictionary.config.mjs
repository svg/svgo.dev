/**
 * @fileoverview
 *   Configuration for style-dictionary, to read, transform, and generate CSS
 *   from our design tokens.
 */

import StyleDictionary from 'style-dictionary';

/**
 * Prefix to add to every design token to avoid conflicts with other design
 * systems or component libraries that are present.
 */
const PREFIX = 'svgo';

/**
 * All supported color schemes. Many design tokens are prefixed with one of
 * these if they belong to a certain color scheme.
 */
const COLOR_SCHEMES = {
  Light: 'Light',
  Dark: 'Dark',
}

StyleDictionary.registerPreprocessor({
  name: 'prefix',
  preprocessor: (dict) => {
    /** @type {Record<string, import('style-dictionary').PreprocessedTokens>} */
    const result = {};

    for (const key in dict) {
      result[`${PREFIX}.${key}`] = dict[key];
    }

    return result;
  },
});

StyleDictionary.registerFormat({
  name: 'css/variables-with-prefers-color-scheme',
  format: (dictionary) => {
    const { allTokens } = dictionary.dictionary;
    const [ defaultThemeTokens, darkThemeTokens ] = allTokens.reduce((acc, val) => {
      const theme = val.path[1];
      const arr = theme === COLOR_SCHEMES.Dark ? acc[1] : acc[0];

      if (Object.values(COLOR_SCHEMES).includes(theme)) {
        val.name = val.name.replace(`${theme.toLowerCase()}-`, '');
      }

      arr.push(val);
      return acc;
    }, /** @type {[import('style-dictionary').TransformedToken[], import('style-dictionary').TransformedToken[]]} */ ([[], []]));

    return `/*
 * This file was auto-generated with style-dictionary using design tokens.
 *
 * ⚠️ Changes will not be persisted!
 *
 * See:
 * - ~/tokens/tokens.json
 * - ~/style-dictionary.config.mjs
 *
 * Learn more:
 * - https://www.w3.org/community/design-tokens/
 * - https://penpot.app/collaboration/design-tokens
 * - https://styledictionary.com
 */

:root {
  ${defaultThemeTokens.map(prop => `--${prop.name}: ${prop.$value};`).join('\n  ')}
}

@media (prefers-color-scheme: dark) {
  :root {
    ${darkThemeTokens.map(prop => `--${prop.name}: ${prop.$value};`).join('\n    ')}
  }
}`;
  }
});

export default {
  source: [
    'tokens/*.json',
  ],
  preprocessors: [
    'prefix',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables-with-prefers-color-scheme',
        },
      ],
    },
  },
}
