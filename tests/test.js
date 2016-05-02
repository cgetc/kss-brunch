'use strict';

import { expect } from 'chai';
import Plugin from '../';
import fs from 'fs';
import config from './config';

const outDir = config.plugins.kss.destination;

describe('Plugin', function() {
  this.timeout(0);
  let plugin;

  beforeEach((done) => {
    plugin = new Plugin(config);
    fs.rmdir(outDir, () => {
      done();
    });
  });

  it('should be an object', () => {
    expect(plugin).to.be.ok;
  });

  it('shoud be compile styleguide', (done) => {

    fs.realpath(config.plugins.kss.css, (err, path) => {
      if (err) return done(err);

      plugin.compile({
        'path': path
      }).then(() => {
        fs.exists(outDir, (exists) => {
          expect(exists).to.be.ok;
          done();
        });
      });
    });
  });
});
