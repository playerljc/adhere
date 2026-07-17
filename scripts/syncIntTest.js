/**
 * 将 IntTest/@baifendian 高效镜像同步到本地项目。
 *
 * robocopy 退出码 0-7 均表示同步成功，8 及以上表示失败。
 */
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const scopeName = '@baifendian';
const source = path.resolve(__dirname, '../IntTest', scopeName);
const targetRoots = [
  'D:\\self\\work\\bfd\\project\\overseas\\k6\\prestaodecontas-web\\packages\\Common\\src\\lib\\adhere',
  'D:\\GitHub\\adhere-reactpro-react19\\react-pro-monorepo\\packages\\Common\\src\\lib\\adhere',
  'D:\\self\\work\\bfd\\project\\overseas\\k2\\social-security-web\\packages\\Common\\src\\lib\\adhere',
];

function sync(targetRoot) {
  const target = path.join(targetRoot, scopeName);

  fs.mkdirSync(target, { recursive: true });

  return new Promise((resolve, reject) => {
    const child = spawn(
      'robocopy',
      [source, target, '/MIR', '/MT:16', '/R:1', '/W:1', '/NFL', '/NDL', '/NP'],
      {
        shell: false,
        stdio: 'inherit',
        windowsHide: true,
      },
    );

    child.on('error', reject);
    child.on('close', (code) => {
      if (code < 8) {
        console.log(`[sync-inttest] success: ${target}`);
        resolve();
        return;
      }

      reject(new Error(`robocopy failed (exit code ${code}): ${target}`));
    });
  });
}

async function main() {
  if (process.platform !== 'win32') {
    throw new Error('sync-inttest requires Windows robocopy');
  }

  if (!fs.existsSync(source)) {
    throw new Error(`source directory does not exist: ${source}`);
  }

  const startTime = Date.now();

  await Promise.all(targetRoots.map(sync));

  console.log(`[sync-inttest] all targets completed in ${((Date.now() - startTime) / 1000).toFixed(1)}s`);
}

main().catch((error) => {
  console.error(`[sync-inttest] ${error.message}`);
  process.exitCode = 1;
});
