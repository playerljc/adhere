const map = new Map();

let isInit = false;

/**
 * initCommandArgs
 * @description - 初始化命令行参数，参数是key1=value1 key2=value2 ...形势
 * @return {Map}
 */
function initCommandArgs() {
  const customArgs = process.argv.slice(2);

  for (let i = 0; i < customArgs.length; i++) {
    const entryArr = customArgs[0].split('=');

    map.set(entryArr[0], entryArr[1]);
  }
}

module.exports = {
  /**
   * getArg
   * @description - 根据key获取命令参数值
   * @param key
   * @return {any}
   */
  getArg(key) {
    if (!isInit) {
      initCommandArgs();
      isInit = true;
    }

    return map.get(key);
  },
};
