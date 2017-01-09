'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _build = require('./build');

var _build2 = _interopRequireDefault(_build);

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// resolve the parent config object
var configPath = _path2.default.resolve(process.cwd(), 'dev/tapestry/dist/tree.js');

// throw an error if no config exists
if (!_fs2.default.existsSync(configPath)) throw Error('tapestry.js not found');

// define parent config and current working directory
var config = require(configPath);
var cwd = process.cwd();

// create client bundle and start node server
new _build2.default(cwd);
new _server2.default({ config: config, cwd: cwd });