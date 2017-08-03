const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: ['./app.ts'],
  output: {
    path: __dirname,
    filename: './build/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, 'app'),
        query: {
          presets: ['es2016']
        },
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.webpack.js', '.web.js', '.ts', '.js', '.json']
  }
};
