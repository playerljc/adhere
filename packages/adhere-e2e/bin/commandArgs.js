module.exports = {
  /**
   * 初始化命令行参数
   * --type 构建类型
   * --config 另外的配置文件
   * @return {Map}
   */
  initCommandArgs() {
    const map = new Map();

    const customArgs = process.argv.slice(2);

    let preArg;

    for (let i = 0; i < customArgs.length; i++) {
      const arg = customArgs[i];

      if (arg.startsWith('--')) {
        map.set(arg, []);

        preArg = arg;
      } else {
        const value = map.get(preArg);

        if (value) {
          value.push(arg);
        }
      }
    }
    return map;
  },
  getArgs() {
    return process.argv.slice(2);
  },
  /**
   * toCommandArgs
   * @return {Map<String,String>}
   * @param command
   */
  toCommandArgs(command = '') {
    const commandArr = command.split(' ');

    const map = new Map();

    commandArr.forEach((t) => {
      const itemArr = t.split('=');

      map.set(itemArr[0], itemArr[1]);
    });
    return map;
  },
};
