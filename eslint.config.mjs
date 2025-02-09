import globals from 'globals';
import pluginJs from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'indent': ['error', 2],
      'space-before-blocks': ['error', 'always'],
      'eol-last': ['error', 'always'],
      'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': true }],
      'no-trailing-spaces': 'error',
      'template-curly-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
    },
  },

];
