const path = require('path');
const fs = require('fs');

const contextPath = path.join(__dirname, '../');
const esPath = path.join(contextPath, 'es');
const libPath = path.join(contextPath, 'lib');

const forEachPath = [esPath, libPath];

forEachPath.forEach((_path) => {
  const dirNames = fs.readdirSync(_path);

  dirNames.forEach((_name) => {
    const modulePath = path.join(_path, _name);
    const stat = fs.statSync(modulePath);

    if (stat.isFile()) return;

    // if (!fs.existsSync(path.join(modulePath, 'index.less'))) return;

    const stylePath = path.join(modulePath, 'style');
    const indexPath = path.join(stylePath, 'index.less');

    if (!fs.existsSync(stylePath)) {
      // 不存在
      fs.mkdirSync(stylePath);
    }

    if (fs.existsSync(path.join(modulePath, 'index.less'))) {
      // 写入index.less
      fs.writeFileSync(indexPath, `@import '../index.less';`);
    } else {
      // 写入index.less
      fs.writeFileSync(indexPath, ``);
    }
  });
});
