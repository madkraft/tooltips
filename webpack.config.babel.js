var path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'js'),
  entry: './main',
  output: {
    filename: 'bundle.js'
  },
  node: {
    fs: "empty"
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/}
    ]
  }
}