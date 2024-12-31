var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: { // <= loader 파일 해석 관여
    rules: [
      {
        test: /\.css$/,
        use: [
            { loader: MiniCssExtractPlugin.loader },
            "css-loader"
          ]// 오른쪽에서 왼쪽 순으로 적용 됨. (순서가 중요함)
      }
    ]
  },
  plugins: [// 기본적인 동작에 추가적인 기능 제공, 결과물의 형태 변형 또는 부가적 속성 적용
    new MiniCssExtractPlugin()
  ],
}