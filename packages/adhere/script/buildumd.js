const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const { spawn } = require('child_process');

/**
 * isWin32
 * @return {boolean}
 */
function isWin32() {
  return process.platform === 'win32';
}

/**
 * buildUmd
 * @return {Promise<unknown>}
 */
function buildUmd() {
  return new Promise((resolve) => {
    // 在执行buildumd:core之前需要把index.ts引入
    const command = isWin32() ? `npm.cmd` : `npm`;

    const npmProcess = spawn(command, ['run', 'buildumd:core'], {
      cwd: path.join(__dirname, '../'),
      encoding: 'utf-8',
    });

    npmProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    npmProcess.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    npmProcess.on('close', (code) => {
      console.log(`npmProcess：${code}`);
      resolve();
    });
  });
}

// 备份ctbuild.config.js为ctbuild.config.back.js
fs.writeFileSync(
  path.join(__dirname, '../', 'ctbuild.config.back.js'),
  fs.readFileSync(path.join(__dirname, '../', 'ctbuild.config.js')),
);

// ctbuild.config.umd.js写入ctbuild.config.js
const content = fs.readFileSync(path.join(__dirname, '../', 'ctbuild.config.umd.js'));
fs.writeFileSync(path.join(__dirname, '../', 'ctbuild.config.js'), content);

buildUmd().then(() => {
  fs.writeFileSync(
    path.join(__dirname, '../', 'ctbuild.config.js'),
    fs.readFileSync(path.join(__dirname, '../', 'ctbuild.config.back.js')),
  );

  rimraf.sync(path.join(__dirname, '../', 'ctbuild.config.back.js'));
});
