module.exports = {
  plugins: ['@emotion'],
  extends: ['dslemay', 'dslemay/jest', 'dslemay/react', 'dslemay/jsx-a11y'],
  parser: '@babel/eslint-parser',
  rules: {
    '@emotion/no-vanilla': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
  },
}
