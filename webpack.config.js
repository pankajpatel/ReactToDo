/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
//var lib  = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');

// console.log()
module.exports = {

  // devtool: 'inline-source-map',

  // entry: fs.readdirSync(__dirname).reduce(function (entries, dir) {
  //   if (fs.statSync(path.join(__dirname, dir)).isDirectory())
  //     entries[dir] = path.join(__dirname, dir, 'index.js')

  //   return entries
  // }, {}),
  entry: __dirname+'/src/app.jsx',

  output: {
    path: __dirname + '/js',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader' }
      // { test: /\.css$/, loader: 'style!css' }
    ]
  },

  // resolve: {
  //   alias: {
  //     'react-router': path.join(__dirname, '..', 'modules')
  //   }
  // },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

}