const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '../examples');
const comRootPath = '@/components/ui/anthonc/examples';

function loop(files, contextPath) {
  files.forEach((file) => {
    const fileName = path.basename(file).substring(0, file.lastIndexOf('.'));
    const filePath = path.join(contextPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      // console.log(
      //   `
      // export const AntHOC${fileName} = lazy(() =>
      //   import(/* webpackChunkName: "anthoc" */ '${path.join(
      //     comRootPath,
      //     filePath.substring(rootPath.length + 1),
      //   )}'),
      // );
      // `,
      // );

      let _subpath = filePath.substring(rootPath.length + 1);
      _subpath = _subpath.substring(0, _subpath.lastIndexOf('.')).toLowerCase().replace('\\', '/');
      console.log(
        `
          {
            path: '/adhere/component/ui/anthoc/${_subpath}',
            component: AntHOC${fileName},
          },
        `,
      );
    } else if (stat.isDirectory()) {
      loop(fs.readdirSync(filePath), filePath);
    }
  });
}

loop(fs.readdirSync(rootPath), rootPath);
