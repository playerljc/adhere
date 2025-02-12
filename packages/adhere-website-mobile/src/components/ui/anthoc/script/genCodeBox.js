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
    const filePath = path.join(contextPath, file);

    let _subpath = filePath.substring(rootPath.length + 1);
    _subpath = _subpath.substring(0, _subpath.lastIndexOf('.')).toLowerCase().replace('\\', '/');

    res += `
      {
        id: \`p${_index + 1}\`,
        name: \`${fileName}\`,
        cardProps: {
          description: {
            title: '${fileName}',
            info: '${fileName}',
          },
        },
        displayBodyStyle: {
          width: 450,
        },
        theme: 'eclipse',
        codeText: ${fileName}CodeText,
        type: 'PlayGroundMobile',
        url: \`\${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/anthoc/${_subpath}\`,
      },
    `;
  });

  return res;
}

// 第一层
fs.readdirSync(rootPath).forEach((file) => {
  console.log(`
      function ${file}CodeBoxPanelConfig() {
        return [
          ${loop(fs.readdirSync(path.join(rootPath, file)), path.join(rootPath, file))}
        ];
      }
  `);
});
