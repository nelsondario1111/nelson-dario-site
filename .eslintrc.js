/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: [
      'next',
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended' // Optional if you use Prettier
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
    rules: {
      // ✅ Allow apostrophes in JSX
      'react/no-unescaped-entities': 'off',
  
      // Optional tweaks
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/react-in-jsx-scope': 'off', // React 17+ not needed
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };
  