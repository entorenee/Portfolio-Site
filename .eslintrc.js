module.exports = {
  plugins: ['emotion', 'flowtype', 'flowtype-errors', 'prettier'],
  extends: [
    'dslemay',
    'dslemay/jest',
    'dslemay/react',
    'dslemay/jsx-a11y',
    'plugin:flowtype/recommended',
  ],
  rules: {
    'flowtype-errors/show-errors': 'error',
    'prettier/prettier': 'error',
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
  },
};
