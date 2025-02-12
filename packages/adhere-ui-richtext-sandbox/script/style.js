const path = require('path');
const fs = require('fs');

const contextPath = path.join(__dirname, '../');
const esPath = path.join(contextPath, 'es');
const libPath = path.join(contextPath, 'lib');

const forEachPath = [esPath, libPath];

forEachPath.forEach((_path) => {
  const stylePath = path.join(_path, 'style');
  const indexPath = path.join(stylePath, 'index.less');

  if (!fs.existsSync(stylePath)) {
    // 不存在
    fs.mkdirSync(stylePath);
  }

  // 写入index.less
  fs.writeFileSync(indexPath, `@import '../index.less';`);
});
