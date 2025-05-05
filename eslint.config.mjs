import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '.docusaurus/',
      '.svgo/',
      '.yarn/',
      'build/',
      'node_modules/',
      'yarn.lock'
    ]
  },
  {
    settings: {
      react: {
        version: 'detect'
      }
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}']
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single'],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-props-per-line': ['error', { maximum: { 'single': 9, 'multi': 1 } }],
      'react/prop-types': 'off',
    }
  }
];
