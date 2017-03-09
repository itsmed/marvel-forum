const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  context: path.resolve(__dirname),
  devtool: "cheap-source-map",
  module: {
    rules: [
      {
        test: /.html$/,
        exclude: /node_modules/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          'babel-loader'
        ],
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  },
  stats: {
    colors: true,
    errors: true,
    errorDetails: true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    compress: true,
    port: 8080,
    hot: true,
    watchContentBase: true,
    stats: {
      colors: true,
      errors: true,
      errorDetails: true,
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};
