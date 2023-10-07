const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { rimrafSync } = require('rimraf');
const srcPath = path.join(__dirname, '../src');

const template = `
  import { <%= Module %> } from 'antd-mobile';

  import { createFactory } from '../util';

  export default createFactory(<%= Module %>, {});
`;

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
  const excludes = ['index.ts', 'util.tsx'];
  const names = fs.readdirSync(srcPath);

  names
    .filter((_name) => !excludes.includes(_name))
    .forEach((_name) => {
      const _names = fs.readdirSync(path.join(__dirname, `../src/${_name}`));
      _names.forEach((_delName) => {
        rimrafSync(path.join(__dirname, `../src/${_name}/${_delName}`));
      });

      const camelCase = toCamelCase(_name, true);

      const content = ejs.render(template, {
        Module: camelCase,
      });

      fs.writeFileSync(path.join(__dirname, `../src/${_name}/index.ts`), content, 'utf-8');
    });
})();
