const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '../examples');
// 第二层
function loop(fiels, contextPath) {
  let res = '';

  fiels.forEach((file, _index) => {
    const extName = path.extname(file);
    if (extName === '.less' || extName === '.css') return;

    const fileName = path.basename(file).substring(0, file.lastIndexOf('.'));

    const state = `${fileName}CodeText`;

    res += `
      const [${state}, set${state}] = useState('');
    `;
  });

  return res;
}

// 第一层
fs.readdirSync(rootPath).forEach((file) => {
  console.log(`
      ${loop(fs.readdirSync(path.join(rootPath, file)), path.join(rootPath, file))}
  `);
});
