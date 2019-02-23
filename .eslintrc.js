module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
    'import/core-modules': ['react', 'prop-types', 'react-router', 'typography', 'prismjs'],
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'emotion', 'jest', 'flowtype', 'flowtype-errors', 'prettier'],
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:flowtype/recommended'],
  rules: {
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 0,
    'react/sort-comp': [
      2,
      {
        order: ['type-annotations', 'static-methods', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'flowtype-errors/show-errors': 2,
    'react/jsx-filename-extension': 0,
    'arrow-parens': [2, 'as-needed'],
    'function-paren-newline': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 2,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'all',
      },
    ],
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
  },
};
