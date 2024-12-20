/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@boo-design/eslint-config/base.js', 'plugin:storybook/recommended'],
  globals: { React: true, JSX: true },
  env: { browser: true },
  ignorePatterns: ['dist/'],
  settings: {
    react: { version: 'detect' },
  },
};
