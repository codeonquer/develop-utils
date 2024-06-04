/**
 * https://eslint.style/guide/why
 * https://eslint.style/packages/default
 */

const stylistic = require('@stylistic/eslint-plugin');

const config = [
  stylistic.configs.customize({
    jsx: true,
    indent: 2,
    semi: true,
    quotes: 'single',
    quoteProps: 'as-needed',
    blockSpacing: true,
    braceStyle: '1tbs',
    arrowParens: true,
    commaDangle: 'never'
  })
];

module.exports = config;
