const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');
const cheerio = require('cheerio');
const lerna = require('../../../lerna.json');

const excludePackageNames = ['adhere', 'adhere-website'];

// packages目录路径
const packagesDirPath = path.join(__dirname, '../../');

// 从lerna.json中获取最新的版本号
const { version } = lerna;

/**
 * isWin32
 * @return {boolean}
 */
function isWin32() {
  return process.platform === 'win32';
}

// 获取所有包的名字
const packageNames = fs
  .readdirSync(packagesDirPath)
  .filter((name) => !excludePackageNames.includes(name));

const curData = new Date();
// 迭代所有包中的changelog/changelog.html中指定版本的信息，合并成一个html字符串
let changelogHtmlStr = `
 <h1>1.0.6</h1>
 <hr />
 <div>${curData.getFullYear()}-${curData.getMonth() + 1}-${curData.getDate()}</div>
 <ul>
`;

packageNames.forEach((packageName) => {
  const changelogHtmlPath = path.join(packagesDirPath, packageName, 'changelog', 'CHANGELOG.html');
  const content = fs.readFileSync(changelogHtmlPath, { encoding: 'utf-8' });
  const $ = cheerio.load(content);

  const result = $('h1')
    .filter((i, el) => {
      return $(el).text() === version;
    })
    .next()
    .next()
    .next();

  const html = $(result).html();
  if (html) {
    changelogHtmlStr += `
      <li>
        <h3>${packageName}</h3>
        <ul>${html}</ul>
      </li>
    `;
  }
});

changelogHtmlStr += '</ul>';

// 接下来把changelogHtmlStr 插入入到adhere/changelog/CHANGELOG.html的body顶部中
const adhereChangelogPath = path.join(__dirname, '../changelog/CHANGELOG.html');

const adhereChangelogHtml = fs.readFileSync(adhereChangelogPath, {
  encoding: 'utf-8',
});

const $ = cheerio.load(adhereChangelogHtml);
$('body').prepend(changelogHtmlStr);

fs.writeFileSync(adhereChangelogPath, $.html('html'), { encoding: 'utf-8' });

// 运行bd进程
const command = isWin32() ? `bd.cmd` : `bd`;
const bdProcess = spawn(command, ['CHANGELOG.html'], {
  cwd: path.join(__dirname, '../changelog'),
  encoding: 'utf-8',
});

bdProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

bdProcess.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

bdProcess.on('close', (code) => {
  console.log(`bdProcess：${code}`);
});
