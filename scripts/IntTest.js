/**
 * 生成内部测试的最终package
 */
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const rootName = '@baifendian';

const contextPath = path.join(__dirname, '../', 'packages');

const IntTestPath = path.join(__dirname, '../', 'IntTest');

const packageNames = fs.readdirSync(contextPath);

const excludePackageNames = packageNames.filter((_name) => {
  const packagePath = path.join(contextPath, _name, 'package.json');

  if (!fs.existsSync(packagePath)) {
    return false;
  }

  const json = require(packagePath);

  return json.private;
});

const targetPackageNames = packageNames.filter((_name) => !excludePackageNames.includes(_name));

/**
 * getCopyPathsByFileName
 * @param {string} packageName 包的名称
 * @param {string} fileName 复制的文件名
 * @return {{source: string, target: string}}
 */
function getCopyPathsByFileName(packageName, fileName) {
  const source = path.join(contextPath, packageName, fileName);
  const target = path.join(IntTestPath, rootName, packageName, fileName);

  return {
    source,
    target,
  };
}

/**
 * clear
 * @description 清除InTest目录
 */
function clear() {
  rimraf.sync(path.join(IntTestPath, rootName), {
    filter: (_path) => {
      console.log('_path', _path);
      return _path !== path.join(IntTestPath, 'README.md');
    },
  });
}

/**
 * gen
 * @description 生成测试的包
 */
function gen() {
  targetPackageNames.forEach((_name) => {
    const fileNames = ['es', 'lib', 'umd', 'package.json', 'README.md'];

    fileNames.forEach((_fileName) => {
      const { source, target } = getCopyPathsByFileName(_name, _fileName);
      if (fs.existsSync(source)) {
        fs.cpSync(source, target, { force: true, recursive: true });
        console.log(`copy ${source} to ${target} success`);
      }
    });
  });
}

(function () {
  clear();

  gen();
})();
