const fs = require('fs');
const path = require('path');

const context = path.join(__dirname, '../', 'packages');

console.log(context);

const names = fs
  .readdirSync(context)
  .filter((name) => !['adhere', 'adhere-ui-g6', 'adhere-website'].includes(name));

names.forEach((name) => {
  const packagePath = path.join(context, name);

  if (fs.existsSync(path.join(packagePath, 'tsconfig.module.json'))) {
    fs.renameSync(
      path.join(packagePath, 'tsconfig.module.json'),
      path.join(packagePath, 'tsconfig.esm.json'),
    );
  }

  if (fs.existsSync(path.join(packagePath, 'tsconfig.json'))) {
    fs.renameSync(
      path.join(packagePath, 'tsconfig.json'),
      path.join(packagePath, 'tsconfig.cjs.json'),
    );
  }

  if (!fs.existsSync(path.join(packagePath, 'tsconfig.json'))) {
    fs.copyFileSync(path.join(__dirname, 'tsconfig.json'), path.join(packagePath, 'tsconfig.json'));
  }
});
