import teapartyConfig from '@sethfalco/eslint-config';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...teapartyConfig,
  {
    // Override Teaparty
    rules: {
      'import/extensions': ['off'],
    }
  },
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
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-props-per-line': ['error', { maximum: { 'single': 9, 'multi': 1 } }],
      'react/prop-types': 'off',
      // eslint-plugin-import
      'import/order': ['error', {
        alphabetize: {
          order: 'asc',
        },
        pathGroups: [
          { group: 'builtin', pattern: 'preact/**', position: 'before' },
        ],
        pathGroupsExcludedImportTypes: [
          'preact/**'
        ]
      }],
    }
  }
];
