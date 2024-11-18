/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@boo-design/eslint-config/base.js'],
  env: { node: true },
  ignorePatterns: ['dist/'],
};
