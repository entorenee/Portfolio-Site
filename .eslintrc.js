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
  plugins: ['react', 'jest', 'flowtype', 'flowtype-errors', 'prettier'],
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:flowtype/recommended'],
  rules: {
    'flowtype-errors/show-errors': 2,
    'react/jsx-filename-extension': 0,
    'arrow-parens': [2, 'as-needed'],
    'function-paren-newline': 0,
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
  },
};
