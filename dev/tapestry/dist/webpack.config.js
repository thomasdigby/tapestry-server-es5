'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import webpackCleanPlugin from 'clean-webpack-plugin'

exports.default = function (context) {
  return {
    resolve: {
      modules: ['node_modules', context]
    },
    entry: 'dev/tapestry/dist/client.js',
    output: {
      path: _path2.default.resolve(context, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }]
    }
  };
};