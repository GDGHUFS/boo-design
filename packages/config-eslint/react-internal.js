/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    '@boo-design/eslint-config/base.js',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['jsx-a11y', 'react-hooks'],
  globals: { React: true, JSX: true },
  env: { browser: true },
  rules: {
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  ignorePatterns: ['dist/'],
  settings: {
    react: { version: 'detect' },
  },
};
