'use strict';

import path from 'path';
import kss from 'kss';

class KSSCompiler {
  constructor(config) {
    this.config = config && config.plugins && config.plugins.kss;
    this._running = [];
  }

  compile(file) {
    const dir = path.resolve(path.dirname(file.path))
    if (this._is_running(dir)) {
      return Promise.resolve()
    }
    this._running.push(dir);
    const options = Object.assign({
      source: dir
    }, this.config);
    return kss(options).then(() => {
      this._running = this._running.filter((entry) => {
        return entry != dir
      });
      return Promise.resolve()
    });
  }
  _is_running(dir) {
    let exists = false;
    this._running.forEach((entry) => {
      if (dir.indexOf(dir) === 0) {
        exists = true;
        return false;
      }
    });
    return exists;
  }
}

KSSCompiler.prototype.brunchPlugin = true;
KSSCompiler.prototype.type = 'stylesheet';
KSSCompiler.prototype.pattern = /\.(css|scss|sass|less)$/;

module.exports = KSSCompiler;
