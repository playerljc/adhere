const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const { spawn } = require('child_process');

const contextPath = path.join(__dirname, '../packages');

const excludes = ['adhere-ui-css', 'adhere-website'];

let index = 0;

let packagesNames = [];

/**
 * isWin32
 * @return {boolean}
 */
function isWin32() {
  return process.platform === 'win32';
}

/**
 * buildUmd
 * @param packageName
 * @return {Promise<unknown>}
 */
function buildUmd(packageName) {
  return new Promise((resolve) => {
    const command = isWin32() ? `npm.cmd` : `npm`;

    const npmProcess = spawn(command, ['run', 'buildumd'], {
      cwd: path.join(contextPath, packageName),
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

/**
 * task
 * @param packageName
 * @return {Promise<unknown>}
 */
function task(packageName) {
  return new Promise((resolve) => {
    // 将模板html拷贝到目录中
    // if(包含index.less) {
    //   备份src/index.ts为index_back.ts
    //   index.ts里加入import './index.less';
    // }
    // 运行npm run buildumd
    // 完成之后将index_back.ts的内容拷贝到index.ts中且删除index_back.ts
    // 删除index.html模板文件

    const packagePath = path.join(contextPath, packageName);

    // 将模板html拷贝到目录中
    fs.writeFileSync(
      path.join(packagePath, 'index.html'),
      fs.readFileSync(path.join(__dirname, '../index.html')),
    );

    // 包含index.less
    if (fs.existsSync(path.join(packagePath, 'src', 'index.less'))) {
      // 备份src/index.ts为index_back.ts
      fs.writeFileSync(
        path.join(packagePath, 'src', 'index_back.ts'),
        fs.readFileSync(path.join(packagePath, 'src', 'index.ts')),
      );

      // index.ts里加入import './index.less';
      const content = fs.readFileSync(path.join(packagePath, 'src', 'index.ts'));
      fs.writeFileSync(
        path.join(packagePath, 'src', 'index.ts'),
        `import './index.less;' ${content}`,
      );
    }

    // 运行npm run buildumd
    buildUmd(packageName).then(() => {
      if (fs.existsSync(path.join(packagePath, 'src', 'index_back.ts'))) {
        // 完成之后将index_back.ts的内容拷贝到index.ts中且删除index_back.ts
        fs.writeFileSync(
          path.join(packagePath, 'src', 'index.ts'),
          fs.readFileSync(path.join(packagePath, 'src', 'index_back.ts')),
        );

        // 删除index_back.ts
        rimraf.sync(path.join(packagePath, 'src', 'index_back.ts'));
      }

      // 删除index.html模板文件
      rimraf.sync(path.join(packagePath, 'index.html'));

      resolve();
    });
  });
}

/**
 * loopTask
 * @return {Promise}
 */
function loopTask() {
  return new Promise((resolve, reject) => {
    if (index >= packagesNames.length) {
      resolve();
    } else {
      const packageName = packagesNames[index++];
      if (packageName) {
        task(packageName)
          .then(() => {
            loopTask().then(() => {
              resolve();
            });
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject();
      }
    }
  });
}

/**
 * readdir
 */
fs.readdir(contextPath, function (err, dirNames) {
  packagesNames = dirNames.filter((dirName) => !excludes.includes(dirName));

  loopTask()
    .then(() => {
      console.log('finish');
      process.exit();
    })
    .catch((error) => {
      console.log(error);
    });
});
