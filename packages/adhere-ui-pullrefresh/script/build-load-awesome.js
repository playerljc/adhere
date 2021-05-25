const path = require('path');
const fs = require('fs');

// 读取并拼接
const contextPath = path.join(__dirname, '../', 'node_modules', 'load-awesome', 'css');

const result = fs.readdirSync(contextPath);

const lessContent = [];

result.forEach((fileName) => {
  const stat = fs.statSync(path.join(contextPath, fileName));

  if (stat.isFile() && fileName.endsWith('.min.css')) {
    const content = fs.readFileSync(path.join(contextPath, fileName));
    lessContent.push(content);
  }
});

const lessPath = path.join(__dirname, '../', 'src', 'load-awesome.less');
fs.writeFileSync(path.join(lessPath), lessContent.join(''));
