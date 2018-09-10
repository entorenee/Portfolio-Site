const babelOptions = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/flow'],
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
