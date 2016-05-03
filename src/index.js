'use strict';

import path from 'path';
import kss from 'kss';

class KSSCompiler {
  constructor(config) {
    this.config = config && config.plugins && config.plugins.kss;
  }

  compile(file) {
    const options = Object.assign(this.config, {
      source: path.dirname(file.path)
    });
    return kss(options);
  }
}

KSSCompiler.prototype.brunchPlugin = true;
KSSCompiler.prototype.type = 'stylesheet';
KSSCompiler.prototype.pattern = /\.(css|scss|sass|less)$/;

module.exports = KSSCompiler;
