const config = {
  plugins: ['eslint-plugin-import'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  rules: {
    'import/no-cycle': 'error'
  }
}

module.exports = config;
