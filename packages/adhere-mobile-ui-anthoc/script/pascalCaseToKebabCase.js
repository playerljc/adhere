const path = require('path');
const fs = require('fs');

const srcPath = path.join(__dirname, '../', 'src');

/**
 * pascalCaseToKebabCase
 * @param name
 * @return {string}
 */
function pascalCaseToKebabCase(name) {
  const result = name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2');
  return (result.startsWith('-') ? result.substring(1) : result).toLowerCase();
}

(function () {
  const names = fs.readdirSync(srcPath).filter((name) => !['index.ts', 'util.tsx'].includes(name));

  names.forEach((name) => {
    fs.renameSync(path.join(srcPath, name), path.join(srcPath, pascalCaseToKebabCase(name)));
  });
})();
