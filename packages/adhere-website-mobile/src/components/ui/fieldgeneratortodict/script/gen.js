const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '../examples');
const comRootPath = '@/components/ui/fieldgeneratortodict/examples';

let res = '';

function loop(files, contextPath) {
  files.forEach((file) => {
    const fileName = path.basename(file).substring(0, file.lastIndexOf('.'));
    const filePath = path.join(contextPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      // 懒加载
      // res += `
      // export const FGTD${fileName} = lazy(() =>
      //   import(/* webpackChunkName: "fgtd" */ '${path.join(
      //     comRootPath,
      //     filePath.substring(rootPath.length + 1),
      //   )}'),
      // );
      // `;
      // ----------------------
      // 路由定义
      // let _subpath = filePath.substring(rootPath.length + 1);
      // _subpath = _subpath.substring(0, _subpath.lastIndexOf('.')).toLowerCase();
      // res += `
      //     {
      //       path: '/adhere/component/ui/fieldgeneratortodict/${_subpath}',
      //       component: FGTD${fileName},
      //     },
      //   `;
      // ---------------------
      // 变量引入
      res += `
          FGTD${fileName},
        `;
    } else if (stat.isDirectory()) {
      loop(fs.readdirSync(filePath), filePath);
    }
  });
}

loop(fs.readdirSync(rootPath), rootPath);

fs.writeFileSync(path.join(__dirname, 'gen.txt'), res.replace(/\\+/gim, '/'));
