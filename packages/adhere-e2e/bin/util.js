const fs = require('fs');
const path = require('path');

function getEvnSplit() {
  return Util.isWin32() ? ';' : ':';
}

/**
 * sortPathByDesc
 * @description - 对path进行降序排序
 * @param path
 * @return {string}
 */
function sortPathByDesc(path) {
  let regExp = '';

  if (Util.isWin32()) {
    regExp = /;{1,}/;
  } else {
    regExp = /:{1,}/;
  }

  const pathArr = path.split(regExp);

  pathArr.sort((p1, p2) => {
    if (p1.length > p2.length) return -1;
    else if (p1.length < p2.length) return 1;
    else return 0;
  });

  return pathArr.join(getEvnSplit());
}

const Util = {
  /**
   * 获取env
   * @param commandPath
   */
  getEnv(commandPath) {
    const obj = {};

    if (process.env && process.env.Path && process.env.Path.indexOf(commandPath) === -1) {
      obj.Path = process.env.Path + getEvnSplit() + commandPath;
      obj.Path = sortPathByDesc(obj.Path);
    }

    if (process.env && process.env.PATH && process.env.PATH.indexOf(commandPath) === -1) {
      obj.PATH = process.env.PATH + getEvnSplit() + commandPath;
      obj.PATH = sortPathByDesc(obj.PATH);
    }

    return Object.assign(process.env, obj);
  },
  isWin32() {
    return process.platform === 'win32';
  },
};

module.exports = Util;
