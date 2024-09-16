const pluginImport = require('eslint-plugin-import');

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  { files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}'] },
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/no-cycle': 'error'
    },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2020
    }
  }
];

module.exports = config;
