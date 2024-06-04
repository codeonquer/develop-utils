const config = require('./packages/eslint-config/config');

module.exports = [
  ...config,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname
      }
    }
  }
];
