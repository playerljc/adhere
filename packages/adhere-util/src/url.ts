export default {
  /**
   * parse
   * @description - 参数转换成Obj
   * @param path
   * @return object
   */
  parse(path?: string): object {
    let href = window.location.search;
    if (path) href = path;

    const index = href.indexOf('?');
    if (index === -1) return {};

    const obj = {};

    href = href.substring(index + 1);

    const strs = href.split('&');

    for (let i = 0, len = strs.length; i < len; i++) {
      const t = strs[i].split('=');
      obj[window.decodeURIComponent(t[0]).trim()] = window.decodeURIComponent(t[1]).trim();
    }

    return obj;
  },
  /**
   * stringify
   * @description - 对象转换成get参数
   * @return {String}
   * @param record
   */
  stringify(record: object): string {
    const keys = Object.keys(record || {});

    const getStr = [];

    keys.forEach((key) => {
      const value = record[key];

      if (value) {
        getStr.push(
          // @ts-ignore
          `${key.trim()}=${window.encodeURIComponent(value.trim ? value.trim() : value)}`,
        );
      }
    });

    return `?${getStr.join('&')}`;
  },
};
