'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _kss = require('kss');

var _kss2 = _interopRequireDefault(_kss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KSSCompiler = function () {
  function KSSCompiler(config) {
    (0, _classCallCheck3.default)(this, KSSCompiler);

    this.config = config && config.plugins && config.plugins.kss;
    this._running = [];
  }

  (0, _createClass3.default)(KSSCompiler, [{
    key: 'compile',
    value: function compile(file) {
      var _this = this;

      var dir = _path2.default.resolve(_path2.default.dirname(file.path));
      if (this._is_running(dir)) {
        return _promise2.default.resolve();
      }
      this._running.push(dir);
      var options = (0, _assign2.default)({
        source: dir
      }, this.config);
      return (0, _kss2.default)(options).then(function () {
        _this._running = _this._running.filter(function (entry) {
          return entry != dir;
        });
        return _promise2.default.resolve();
      });
    }
  }, {
    key: '_is_running',
    value: function _is_running(dir) {
      var exists = false;
      this._running.forEach(function (entry) {
        if (dir.indexOf(dir) === 0) {
          exists = true;
          return false;
        }
      });
      return exists;
    }
  }]);
  return KSSCompiler;
}();

KSSCompiler.prototype.brunchPlugin = true;
KSSCompiler.prototype.type = 'stylesheet';
KSSCompiler.prototype.pattern = /\.(css|scss|sass|less)$/;

module.exports = KSSCompiler;
