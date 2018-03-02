const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  plugins: [
    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },{
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      },{
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: './src/tsconfig.json' }
          }, 'angular2-template-loader'
        ]
      }
    ]
  }
};