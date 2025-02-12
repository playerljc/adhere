const fs = require('fs');
const path = require('path');
const React = require('react');

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
        active: 'index.jsx',
        config: [
          {
            key: 'index.jsx',
            title: 'index.jsx',
            style: { height: 500 },
            theme: 'eclipse',
             codeText: ${fileName}CodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: \`\${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/fieldgeneratortodict/${_subpath}\`,
      },
    `;
  });

  return res;
}

let res = '';

// 第一层
fs.readdirSync(rootPath).forEach((file) => {
  res += `
      const ${file}CodeBoxPanelConfig = [
          ${loop(fs.readdirSync(path.join(rootPath, file)), path.join(rootPath, file))}
      ];
  `;
});
// -----------------
// fs.readdirSync(rootPath).forEach((file) => {
//   res += `
//       const ${file} = () => (
//         <CodeBoxSection title="${file}" columnCount={1} config={${file}CodeBoxPanelConfig} />
//       );
//   `;
// });
// -----------------
// fs.readdirSync(rootPath).forEach((file) => {
//   res += `
//       ${file},
//   `;
// });

fs.writeFileSync(path.join(__dirname, 'genCodeBox.txt'), res);
