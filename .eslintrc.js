module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  settings: {
    ecmascript: 6,
    jsx: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'jest'],
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'comma-dangle': 0
  }
};
