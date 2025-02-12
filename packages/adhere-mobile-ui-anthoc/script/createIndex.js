const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../src');

/**
 * toCamelCase - 用连接符链接的字符串转换成驼峰写法
 * 例：abc-def AbcDef
 * @param str - string 用连接符节点的字符串
 * @param toUpperCase - boolean 是否转换成大写
 * @return {String}
 */
function toCamelCase(str, toUpperCase = false) {
  const result = str
    .split('-')
    .map((item) => item.charAt(0).toUpperCase() + item.substring(1))
    .join('');
  return !toUpperCase ? `${result.charAt(0).toLowerCase()}${result.substring(1)}` : result;
}

(function () {
  let importContent = '';
  let exportContent = 'export {';

  const excludes = ['index.ts', 'util.tsx'];
  const names = fs.readdirSync(srcPath);

  names
    .filter((name) => !excludes.includes(name))
    .forEach((name) => {
      const camelCase = toCamelCase(name, true);

      importContent += `import ${camelCase} from './${name}';`;
      exportContent += `${camelCase},`;
    });

  exportContent += '}';

  fs.writeFileSync(
    path.join(__dirname, '../src/index.ts'),
    `${importContent}${exportContent}`,
    'utf-8',
  );
})();
