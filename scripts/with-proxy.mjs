import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

/**
 * 从当前工作目录的 package.json 中读取代理配置。
 * @returns {string} 代理地址字符串。
 * @throws {Error} 如果 package.json 中缺少有效的 config.proxy 配置。
 */
function readProxyFromPackageJson() {
  const pkgPath = path.resolve(process.cwd(), 'package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  const proxy = pkg?.config?.proxy;
  if (!proxy || typeof proxy !== 'string') {
    throw new Error(
      'Missing proxy config. Please set package.json config.proxy, e.g. "config": { "proxy": "http://127.0.0.1:7890" }',
    );
  }
  return proxy;
}

/**
 * 将参数数组中的 '__PROXY__' 占位符替换为实际的代理地址。
 * @param {string[]} argv - 原始参数数组。
 * @param {string} proxy - 代理地址。
 * @returns {string[]} 替换后的参数数组。
 */
function replaceProxyPlaceholders(argv, proxy) {
  return argv.map((a) => (a === '__PROXY__' ? proxy : a));
}

/**
 * 创建包含代理设置的环境变量对象。
 * @param {NodeJS.ProcessEnv} env - 原始环境变量对象。
 * @param {string} proxy - 代理地址。
 * @returns {NodeJS.ProcessEnv} 包含代理设置的新环境变量对象。
 */
function withProxyEnv(env, proxy) {
  return {
    ...env,
    HTTP_PROXY: proxy,
    HTTPS_PROXY: proxy,
    ALL_PROXY: proxy,
    http_proxy: proxy,
    https_proxy: proxy,
    all_proxy: proxy,
  };
}

/**
 * 根据命令类型构建最终的命令行参数。
 * 对于 git 命令，会添加特定的代理配置参数。
 * @param {string} cmd - 要执行的命令名称。
 * @param {string[]} args - 原始参数数组。
 * @param {string} proxy - 代理地址。
 * @returns {string[]} 最终用于执行的参数数组。
 */
function buildCommandArgs(cmd, args, proxy) {
  if (cmd === 'git') {
    return ['-c', `http.proxy=${proxy}`, '-c', `https.proxy=${proxy}`, ...args];
  }
  return args;
}

const proxy = readProxyFromPackageJson();
const rawArgs = process.argv.slice(2);
if (rawArgs.length === 0) {
  console.error('Usage: node scripts/with-proxy.mjs <command> [...args]');
  process.exit(1);
}

const cmd = rawArgs[0];
const args = replaceProxyPlaceholders(rawArgs.slice(1), proxy);
const finalArgs = buildCommandArgs(cmd, args, proxy);

const child = spawn(cmd, finalArgs, {
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: withProxyEnv(process.env, proxy),
});

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
