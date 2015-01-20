var it = require('tape'),
    fs = require('fs'),
    phantomjs = require('..');

it('should find phantomjs', function(t) {
  var stats = fs.statSync(phantomjs.path);
  t.ok(stats.isFile(phantomjs.path));
  t.end();
});
