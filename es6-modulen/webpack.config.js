// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/app.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map' // 빌드한 결과물과 빌드 되기 전 결과물을 연결 해주는 역할
};
