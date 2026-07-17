/**
 * 对 packages 下除排除项外的包依次执行 buildpackage，
 * 将构建失败（含 TS 错误）的信息汇总写入错误报告文件。
 *
 * 说明：ctbuild buildpackagets 会忽略 tsc 的 exit code，
 * 因此即便 npm 返回 0，只要输出中出现 error TS*，也记为失败。
 *
 * 用法: node scripts/buildpackages-with-errors.js
 */
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const contextPath = path.join(__dirname, '../packages');
const errorReportPath = path.join(__dirname, 'buildpackage-errors.log');

/** 不参与 buildpackage 的包目录名 */
const excludes = ['adhere-website-mobile', 'adhere-website', 'adhere-ui-g6'];

/** 匹配 TypeScript 报错行，例如: path.ts(1,2): error TS2322: ... */
const TS_ERROR_LINE_RE = /^[^\n]*\berror TS\d+:[^\n]*/gm;

let index = 0;
let packagesNames = [];

/** @type {{ packageName: string, code: number, output: string, tsErrors: string[], reason: string }[]} */
const errors = [];

/**
 * isWin32
 * @return {boolean}
 */
function isWin32() {
  return process.platform === 'win32';
}

/**
 * extractTsErrors
 * @param {string} output
 * @return {string[]}
 */
function extractTsErrors(output) {
  const matches = output.match(TS_ERROR_LINE_RE);
  if (!matches) {
    return [];
  }

  // 去重并去掉首尾空白
  return [...new Set(matches.map((line) => line.trim()).filter(Boolean))];
}

/**
 * hasBuildpackageScript
 * @param {string} packageName
 * @return {boolean}
 */
function hasBuildpackageScript(packageName) {
  const packageJsonPath = path.join(contextPath, packageName, 'package.json');

  if (!fs.existsSync(packageJsonPath)) {
    return false;
  }

  try {
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    return !!(pkg.scripts && pkg.scripts.buildpackage);
  } catch (e) {
    return false;
  }
}

/**
 * buildPackage
 * @param {string} packageName
 * @return {Promise<{ packageName: string, code: number, output: string, tsErrors: string[], reason: string }>}
 */
function buildPackage(packageName) {
  return new Promise((resolve) => {
    const command = isWin32() ? 'npm.cmd' : 'npm';
    const chunks = [];

    console.log(
      `\n========== [${index}/${packagesNames.length}] buildpackage: ${packageName} ==========`,
    );

    const npmProcess = spawn(command, ['run', 'buildpackage'], {
      cwd: path.join(contextPath, packageName),
      encoding: 'utf-8',
      shell: isWin32(),
    });

    npmProcess.stdout.on('data', (data) => {
      const text = data.toString();
      chunks.push(text);
      process.stdout.write(text);
    });

    npmProcess.stderr.on('data', (data) => {
      const text = data.toString();
      chunks.push(text);
      process.stderr.write(text);
    });

    npmProcess.on('error', (err) => {
      const output = `${chunks.join('')}\n[spawn error] ${err.message}`;
      console.error(output);
      resolve({
        packageName,
        code: 1,
        output,
        tsErrors: extractTsErrors(output),
        reason: 'spawn-error',
      });
    });

    npmProcess.on('close', (code) => {
      const exitCode = code == null ? 1 : code;
      const output = chunks.join('');
      const tsErrors = extractTsErrors(output);

      let reason = 'ok';
      if (exitCode !== 0 && tsErrors.length > 0) {
        reason = 'exit-code+ts-error';
      } else if (exitCode !== 0) {
        reason = 'exit-code';
      } else if (tsErrors.length > 0) {
        // ctbuild buildpackagets 忽略 tsc exit code 时走这里
        reason = 'ts-error';
      }

      resolve({
        packageName,
        code: exitCode,
        output,
        tsErrors,
        reason,
      });
    });
  });
}

/**
 * loopTask
 * @return {Promise<void>}
 */
function loopTask() {
  return new Promise((resolve, reject) => {
    if (index >= packagesNames.length) {
      resolve();
      return;
    }

    const packageName = packagesNames[index++];
    if (!packageName) {
      reject(new Error('empty package name'));
      return;
    }

    buildPackage(packageName)
      .then((result) => {
        const failed = result.code !== 0 || result.tsErrors.length > 0;

        if (failed) {
          errors.push(result);
          console.error(
            `\n[FAILED] ${packageName} (exitCode: ${result.code}, tsErrors: ${result.tsErrors.length}, reason: ${result.reason})`,
          );
          if (result.tsErrors.length > 0) {
            result.tsErrors.forEach((line) => console.error(`  ${line}`));
          }
        } else {
          console.log(`\n[OK] ${packageName}`);
        }
        return loopTask();
      })
      .then(resolve)
      .catch(reject);
  });
}

/**
 * writeErrorReport
 */
function writeErrorReport() {
  const now = new Date().toISOString();
  const lines = [];
  const tsFailed = errors.filter((item) => item.tsErrors.length > 0);
  const otherFailed = errors.filter((item) => item.tsErrors.length === 0);

  lines.push(`# buildpackage errors report`);
  lines.push(`# generatedAt: ${now}`);
  lines.push(`# total: ${packagesNames.length}`);
  lines.push(`# failed: ${errors.length}`);
  lines.push(`# failedWithTs: ${tsFailed.length}`);
  lines.push(`# failedOther: ${otherFailed.length}`);
  lines.push(`# excludes: ${excludes.join(', ')}`);
  lines.push('');

  if (errors.length === 0) {
    lines.push('All packages buildpackage succeeded (no exit errors / no TS errors).');
  } else {
    // 优先把 TS 错误摘要放在最前面，方便查阅
    if (tsFailed.length > 0) {
      lines.push('## TypeScript errors summary');
      lines.push('');
      tsFailed.forEach((item) => {
        lines.push(`### ${item.packageName} (exitCode: ${item.code}, reason: ${item.reason})`);
        item.tsErrors.forEach((errLine) => {
          lines.push(`- ${errLine}`);
        });
        lines.push('');
      });
    }

    if (otherFailed.length > 0) {
      lines.push('## Other build failures summary');
      lines.push('');
      otherFailed.forEach((item) => {
        lines.push(`- ${item.packageName} (exitCode: ${item.code}, reason: ${item.reason})`);
      });
      lines.push('');
    }

    lines.push('## failed packages detail');
    lines.push('');

    errors.forEach((item, i) => {
      lines.push('='.repeat(80));
      lines.push(`[${i + 1}/${errors.length}] package: ${item.packageName}`);
      lines.push(`exitCode: ${item.code}`);
      lines.push(`reason: ${item.reason}`);
      lines.push(`tsErrorCount: ${item.tsErrors.length}`);
      lines.push('-'.repeat(80));

      if (item.tsErrors.length > 0) {
        lines.push('### extracted TS errors');
        item.tsErrors.forEach((errLine) => {
          lines.push(errLine);
        });
        lines.push('-'.repeat(80));
      }

      lines.push('### full output');
      lines.push(item.output.trimEnd() || '(no output)');
      lines.push('');
    });

    lines.push('='.repeat(80));
    lines.push('## failed packages list');
    errors.forEach((item) => {
      lines.push(
        `- ${item.packageName} (exitCode: ${item.code}, tsErrors: ${item.tsErrors.length}, reason: ${item.reason})`,
      );
    });
  }

  fs.writeFileSync(errorReportPath, `${lines.join('\n')}\n`, 'utf-8');
  console.log(`\nError report written to: ${errorReportPath}`);
}

fs.readdir(contextPath, (err, dirNames) => {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }

  packagesNames = dirNames
    .filter((dirName) => !excludes.includes(dirName))
    .filter((dirName) => hasBuildpackageScript(dirName))
    .sort();

  console.log(`Packages to build: ${packagesNames.length}`);
  console.log(`Excludes: ${excludes.join(', ')}`);

  loopTask()
    .then(() => {
      writeErrorReport();

      if (errors.length > 0) {
        console.error(`\nDone with ${errors.length} failed package(s). See: ${errorReportPath}`);
        process.exit(1);
      } else {
        console.log('\nAll buildpackage tasks succeeded.');
        process.exit(0);
      }
    })
    .catch((error) => {
      console.error(error);
      writeErrorReport();
      process.exit(1);
    });
});
