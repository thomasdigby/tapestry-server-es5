'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hapi = require('hapi');

var _h2o = require('h2o2');

var _h2o2 = _interopRequireDefault(_h2o);

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TapestryServer = function () {
  function TapestryServer(_ref) {
    var config = _ref.config,
        cwd = _ref.cwd;

    _classCallCheck(this, TapestryServer);

    console.log(config, cwd);
    // allow access from class
    this.config = config.default;
    this.context = cwd;
    // run server
    this.bootServer();
    this.startServer();
    // set routes
    this.routeStatic();
    this.routeDynamic();
  }

  _createClass(TapestryServer, [{
    key: 'bootServer',
    value: function bootServer() {
      // create new Hapi server and register required plugins
      this.server = new _hapi.Server();
      this.server.register([_h2o2.default, _inert2.default]);
      this.server.connection({
        host: '0.0.0.0',
        port: 3030
      });
    }
  }, {
    key: 'startServer',
    value: function startServer() {
      var _this = this;

      // run server
      this.server.start(function (err) {
        if (err) console.log(err);
        console.log('\uD83C\uDF0E  Server running at: ' + _this.server.info.uri + ' \uD83D\uDC4D');
      });
    }
  }, {
    key: 'routeStatic',
    value: function routeStatic() {
      this.server.route({
        method: 'GET',
        path: '/public/{param*}',
        handler: {
          directory: {
            path: 'public'
          }
        }
      });
    }
  }, {
    key: 'routeDynamic',
    value: function routeDynamic() {
      this.server.route({
        method: 'GET',
        path: '/{path*}',
        handler: function handler(request, reply) {
          reply('<p>test</p><div id="root"></div><script src="public/bundle.js"></script>');
        }
      });
    }
  }]);

  return TapestryServer;
}();

exports.default = TapestryServer;


console.log('./src/server.js');