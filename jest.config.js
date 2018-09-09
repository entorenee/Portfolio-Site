module.exports = {
  verbose: true,
  transform: { '^.+\\.js$': '<rootDir>/jestPreprocess.js' },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  setupTestFrameworkScriptFile: '<rootDir>/testUtils/setupTests.js',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/testUtils/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/testUtils/assetsTransformer.js',
  },
  collectCoverageFrom: ['src/components/**/*.js'],
  snapshotSerializers: ['jest-emotion/serializer'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost:3000',
};
