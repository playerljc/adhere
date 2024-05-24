#!/usr/bin/env node

const path = require('path');
const { spawn } = require('child_process');

const args = require('./commandArgs');
const { getEnv, isWin32 } = require('./util');

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
  const defineArgs = args.getArgs();
  let targetDefineArgs = DEFAULT_DEFINE_ARGS;
  if (defineArgs.length) {
    targetDefineArgs = `${targetDefineArgs},${defineArgs.join(',')}`;
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
  env.environment = 'dev';
  env.mode = 'development';

  console.log('env----------------------', env.mobile);

  return env;
}

/**
 * run
 */
function run() {
  const command = isWin32() ? `ctbuild.cmd` : `ctbuild`;
  console.log('command', command);

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
