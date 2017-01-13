'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-node-express-ts:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates package.json', function () {
    assert.file([
      'package.json', 'gulpfile.js', 'routes/index.ts'
    ]);
  });

  it('have proper routes', function () {
    assert.fileContent('routes/index.ts', /express\.Request/);
  });

  it('has gulpfile', function () {
    assert.fileContent('gulpfile.js', /nodemon/);
  });
});
