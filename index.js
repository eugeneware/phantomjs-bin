var os = require('os');
var path = require('path');

var platform = os.platform()
if (platform !== 'linux' && platform !== 'darwin' && platform !== 'win32') {
  console.error('Unsupported platform.');
  process.exit(1);
}

var arch = os.arch()
if (platform === 'darwin' && arch !== 'x64') {
  console.error('Unsupported architecture.');
  process.exit(1);
}

var phantomjsPath = path.join(
  __dirname,
  'bin',
  platform);

if (platform === 'linux') {
  phantomjsPath = path.join(phantomjsPath, arch);
}

phantomjsPath = path.join(
  phantomjsPath,
  platform === 'win32' ? 'phantomjs.exe' : 'phantomjs'
);

exports.path = phantomjsPath;
