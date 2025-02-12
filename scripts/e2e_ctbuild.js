const fs = require('fs');
const path = require('path');

const context = path.join(__dirname, '../', 'packages');

const names = fs
  .readdirSync(context)
  .filter((name) => !['adhere', 'adhere-ui-g6', 'adhere-website'].includes(name));

names.forEach((name) => {
  const packagePath = path.join(context, name);

  if (fs.existsSync(path.join(packagePath, 'e2e'))) {
    fs.copyFileSync(
      path.join(__dirname, 'ctbuild.config.js'),
      path.join(packagePath, 'e2e', 'ctbuild.config.js'),
    );
  }
});
