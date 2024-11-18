/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    '@boo-design/eslint-config/base.js',
    'plugin:jsx-a11y/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  env: { node: true, browser: true },
  plugins: ['jsx-a11y'],
  settings: {
    react: { version: 'detect' },
    next: { rootDir: 'apps/*/' },
  },
  rules: {
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  ignorePatterns: ['.next/*', '**/.storybook/*'],
};
