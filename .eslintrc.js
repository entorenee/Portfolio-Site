module.exports = {
  plugins: ['@emotion'],
  extends: [
    'dslemay',
    'dslemay/typescript',
    'dslemay/jest',
    'dslemay/react',
    'dslemay/jsx-a11y',
  ],
  rules: {
    '@emotion/no-vanilla': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
  },
}
