var os = require('os');
var path = require('path');

var platform = os.platform()
if (platform !== 'darwin' && platform !== 'linux') {
  console.error('Unsupported platform.');
  process.exit(1);
}

var arch = os.arch()
if (arch !== 'x64') {
  console.error('Unsupported architecture.');
  process.exit(1);
}

var phantomjsPath = path.join( __dirname, 'bin', platform, arch, 'phantomjs'); 

exports.path = phantomjsPath;
