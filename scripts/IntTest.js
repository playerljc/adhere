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

(function rewriteInternalDepsToFile() {
  /**
   * 将 @baifendian/* 依赖改写为 file: 本地相对路径
   */
  function rewriteOnePackage(packageName) {
    const targetPkgDir = path.join(IntTestPath, rootName, packageName);
    const pkgJsonPath = path.join(targetPkgDir, 'package.json');

    if (!fs.existsSync(pkgJsonPath)) return;

    const json = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));

    const fields = [
      'dependencies',
      'devDependencies',
      'peerDependencies',
      'optionalDependencies',
    ];

    let changed = false;

    fields.forEach((field) => {
      const deps = json[field];
      if (!deps) return;
      Object.keys(deps).forEach((depName) => {
        if (typeof depName === 'string' && depName.startsWith(`${rootName}/`)) {
          const depPackageName = depName.split('/')[1];
          const depDir = path.join(IntTestPath, rootName, depPackageName);
          const rel = path
            .relative(targetPkgDir, depDir)
            .split(path.sep)
            .join('/');
          deps[depName] = `file:${rel}`;
          changed = true;
        }
      });
    });

    if (changed) {
      fs.writeFileSync(pkgJsonPath, JSON.stringify(json, null, 2));
      console.log(`rewrite deps to file: in ${pkgJsonPath}`);
    }
  }

  function rewriteAll() {
    targetPackageNames.forEach((name) => rewriteOnePackage(name));
  }

  module.exports = {
    rewriteInternalDepsToFile: rewriteAll,
  };
})();

(function () {
  clear();

  gen();

  // 复制完成后，重写内部依赖为 file: 本地路径
  if (module.exports && module.exports.rewriteInternalDepsToFile) {
    module.exports.rewriteInternalDepsToFile();
  }
})();
