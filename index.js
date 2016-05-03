'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _kss = require('kss');

var _kss2 = _interopRequireDefault(_kss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KSSCompiler = function () {
  function KSSCompiler(config) {
    _classCallCheck(this, KSSCompiler);

    this.config = config && config.plugins && config.plugins.kss;
  }

  _createClass(KSSCompiler, [{
    key: 'compile',
    value: function compile(file) {
      var options = Object.assign(this.config, {
        source: _path2.default.dirname(file.path)
      });
      return (0, _kss2.default)(options);
    }
  }]);

  return KSSCompiler;
}();

KSSCompiler.prototype.brunchPlugin = true;
KSSCompiler.prototype.type = 'stylesheet';
KSSCompiler.prototype.pattern = /\.(css|scss|sass|less)$/;

module.exports = KSSCompiler;
