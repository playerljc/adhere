#!/usr/bin/env node

/**
 * 参数有define 和ctbuild一致
 * a=1,b=2
 *
 * 是否使用媒体
 * media=ture|false
 */

const path = require('path');
const { spawn } = require('child_process');

const args = require('./commandArgs');
const { getEnv, isWin32 } = require('./util');

const commandArgs = args.toCommandArgs(args.getArgs().join(' '));
// 运行脚本的路径
const runtimePath = process.cwd();
// 脚本的路径
const commandPath = path.join(__dirname, '../', 'node_modules', '.bin', path.sep);
// 配置文件路径
const configFilePath = path.join(__dirname, '../', 'ctbuild.e2e.config.js');

/**
 * getDefine
 * @return {string[]}
 */
function getDefine() {
  // define
  const DEFAULT_DEFINE_ARGS = 'alias=@,evnVars=true';
  const defineArgs = commandArgs.get('define');
  let targetDefineArgs = DEFAULT_DEFINE_ARGS;
  if (defineArgs) {
    targetDefineArgs = `${targetDefineArgs},${defineArgs.replace(/:/gim, '=')}`;
  }

  return targetDefineArgs;
}

/**
 * getTargetEnv
 * @return {NodeJS.ProcessEnv & *}
 */
function getTargetEnv() {
  // env
  let env = getEnv(commandPath);
  // 加入是否使用媒体的env
  const mediaArg = commandArgs.get('media');
  // 默认开启media模式
  env.media = mediaArg ? mediaArg : 'true';
  env.environment = 'dev';
  env.mode = 'development';

  return env;
}

/**
 * run
 */
function run() {
  const command = isWin32() ? `ctbuild.cmd` : `ctbuild`;

  const cpProcess = spawn(command, ['startapp', '-c', configFilePath, '--define', getDefine()], {
    cwd: runtimePath,
    encoding: 'utf-8',
    env: getTargetEnv(),
  });

  cpProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  cpProcess.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  cpProcess.on('close', (code) => {
    console.log(`close：${code}`);

    process.exit();
  });
}

run();
