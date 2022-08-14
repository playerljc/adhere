const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '../', 'src', 'iconfont', 'iconfont.woff2');

fs.copyFileSync(source, path.join(__dirname, '../', 'lib', 'iconfont'));
fs.copyFileSync(source, path.join(__dirname, '../', 'es', 'iconfont'));
