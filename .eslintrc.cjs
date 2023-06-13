/**
 * @eslint文档 https://zh-hans.eslint.org/docs/latest/use/configure/configuration-files
 */

const path = require('path');

/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json')
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
};

module.exports = config;
