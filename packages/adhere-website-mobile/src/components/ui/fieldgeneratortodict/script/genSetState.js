const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '../examples');
// 第二层
function loop(fiels, contextPath) {
  let res = '';

  fiels.forEach((file, _index) => {
    const extName = path.extname(file);
    if (extName === '.less' || extName === '.css') return;

    const filePath = path.join(contextPath, file);
    const fileName = path.basename(file).substring(0, file.lastIndexOf('.'));

    const state = `${fileName}CodeText`;

    res += `
      Util.getMobileCodeText('fieldgeneratortodict/examples/${filePath.substring(
        rootPath.length + 1,
      )}').then(set${state});
    `.replace('\\', '/');
  });

  return res;
}

let res = '';
// 第一层
fs.readdirSync(rootPath).forEach((file) => {
  res += loop(fs.readdirSync(path.join(rootPath, file)), path.join(rootPath, file));
});

fs.writeFileSync(path.join(__dirname, 'genSetState.txt'), res);
