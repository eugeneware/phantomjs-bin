# phantomjs-bin

Static Binaries for phantomjs on Mac, Windows and Linux

[![build status](https://secure.travis-ci.org/eugeneware/phantomjs-bin.png)](http://travis-ci.org/eugeneware/phantomjs-bin)

## Installation

This module is installed via npm:

``` bash
$ npm install phantomjs-bin
```

## Example Usage

Returns the path of a statically linked ffmpeg binary on the local filesystem.

``` js
var phantomjs = require('phantomjs-bin');
console.log(phantomjs.path);
// /Users/eugeneware/Dropbox/work/phantomjs-bin/bin/darwin/phantomjs
```

Currently supports Mac OS X (64-bit), Linux (32 and 64-bit) and Windows
(32 and 64-bit).

Currently version `1.9.8` is installed.

I pulled the versions from the
[the official phantomjs download page](http://phantomjs.org/download.html):

NB: Open to pull requests to update this module with the latest versions.
