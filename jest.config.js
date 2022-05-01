module.exports = {
  verbose: true,
  transform: { '^.+\\.js$': 'babel-jest' },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  setupFilesAfterEnv: ['<rootDir>/testUtils/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/testUtils/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/testUtils/assetsTransformer.js',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/.cache/'],
  collectCoverageFrom: ['src/components/**/*.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testEnvironmentOptions: {
    url: 'http://localhost:3000',
  },
}
