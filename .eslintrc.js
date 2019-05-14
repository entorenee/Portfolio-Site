module.exports = {
  plugins: ['emotion', 'flowtype'],
  extends: [
    'dslemay',
    'dslemay/jest',
    'dslemay/react',
    'dslemay/jsx-a11y',
    'plugin:flowtype/recommended',
  ],
  rules: {
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
  },
}
