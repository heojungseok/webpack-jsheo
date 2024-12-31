// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/app.js', // 빌드를 하는 대상 파일 정의 (자바스크립트 파일 경로), 진입점
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build')
  }, // 웹팩으로 변환을 한 후 나온 결과물의 파일 경로나 정보를 정의, 결과물
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', // 웹팩이 변환 될 때, 자바스크립트 파일이 아닌 파일에 대해서 변환을 도와주는 속성 entry -> module 변환 시 개입 하는 부분
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }]
  }, 
  stats: {
    colors: true
  },
  devtool: 'source-map' // *빌드한 결과물과 빌드 되기 전 결과물을 연결 해주는 역할*
};
