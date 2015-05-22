# phantomjs-bin

Static Binaries for PhantomJS 2.0 on Mac, Ubuntu 14.04 (Heroku).

## Example Usage

Returns the path of a statically linked ffmpeg binary on the local filesystem.

``` js
var phantomjs = require('phantomjs-bin');
console.log(phantomjs.path);
// /Users/eugeneware/Dropbox/work/phantomjs-bin/bin/darwin/x64/phantomjs
```

Currently supports Mac OS X (64-bit) and Linux Ubuntu 14.04 (64-bit).

Currently version `2.0.0` is installed.
