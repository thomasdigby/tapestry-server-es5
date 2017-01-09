'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = require('./webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Build = function Build(context) {
  _classCallCheck(this, Build);

  this.compiler = new _webpack2.default((0, _webpack4.default)(context));

  this.compiler.watch({
    aggregateTimeout: 300
  }, function (err, stats) {
    var jsonStats = stats.toJson();
    if (err) console.error(err);
    if (jsonStats.errors.length > 0) console.error('Errors: ', jsonStats.errors);
    if (jsonStats.warnings.length > 0) console.warn('Warnings: ', jsonStats.warnings);
  });
};

exports.default = Build;