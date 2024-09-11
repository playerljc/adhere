// 特殊符号
const SPECIAL_SYMBOL = '__';

// 记录对象路径的变量
const PATH_SYMBOLS = [
  `${SPECIAL_SYMBOL}parentName${SPECIAL_SYMBOL}`,
  `${SPECIAL_SYMBOL}parent${SPECIAL_SYMBOL}`,
];

export default {
  /**----------------------------基本---------------------------**/
  /**
   * isEmpty - 对象是否为空
   * @param value
   */
  isEmpty(value) {
    return value === null || value === '' || value === undefined;
  },
  /**
   * isNumber - 判断是否是number
   * @param val
   * @return {boolean}
   */
  isNumber(val) {
    return (
      !this.isObject(val) && !this.isArray(val) && !this.isFunction(val) && typeof val === 'number'
    );
  },
  /**
   * isBoolean - 判断是否是boolean
   * @param val
   * @return {boolean}
   */
  isBoolean(val) {
    return (typeof val).toLowerCase() === 'boolean';
  },
  /**
   * isString - 判断是否是string
   * @param val
   * @return {boolean}
   */
  isString(val) {
    return (typeof val).toLowerCase() === 'string';
  },
  /**
   * isSymbol - 是否是符号类型
   * @param val
   * @return boolean
   */
  isSymbol(val) {
    return (typeof val).toLowerCase() === 'symbol';
  },
  /**
   * isPrimitive - 是否是基本类型
   * @param val
   */
  isPrimitive(val) {
    return this.isBoolean(val) || this.isNumber(val) || this.isString(val) || this.isSymbol(val);
  },
  /**
   * isArray - 判断数组
   * @param obj
   * @return {boolean}
   */
  isArray(obj) {
    return Array.isArray(obj);
  },
  /**
   * isFunction - 判断函数
   * @param obj
   * @return {boolean}
   */
  isFunction(obj) {
    return obj instanceof Function;
  },
  /**
   * isObject - 是否是对象
   * @param obj
   * @return {boolean}
   */
  isObject(obj) {
    return obj instanceof Object && !Array.isArray(obj) && !(obj instanceof Function);
  },
  /**
   * isRef - 是否是引用类型
   * @param obj
   * @return {boolean}
   */
  isRef(obj) {
    return this.isArray(obj) || this.isObject(obj);
  },
  /**
   * isPromise - 是否是Promise
   * @param obj
   * @return {boolean}
   */
  isPromise(obj) {
    return obj && typeof obj.then === 'function';
  },
  /**
   * chainCallAssignment - 对象的链式赋值
   * obj.a.b.c.d.x.x.x = value
   * @param obj Object - 赋值的对象
   * @param chainStr string - 属性链式表达式 a.b.c
   * @param value any - 要复值的值
   */
  chainCallAssignment({ obj, chainStr, value }) {
    if (
      !this.isObject(obj) ||
      !this.isString(chainStr) ||
      this.isEmpty(chainStr) ||
      this.isEmpty(obj)
    )
      return false;

    const chain = chainStr.split('.');

    // const obj = {};
    // a.b.c
    // const item = obj['a']
    let target = obj;

    for (let i = 0; i < chain.length; i++) {
      const property = chain[i];

      if (i < chain.length - 1) {
        target = target[property];
      } else {
        target[property] = value;
      }
    }
  },
  /**
   * getObjectByChainStr - 通过chainStr获取对象
   * obj.a.b.c.d.x.x.x = value
   * @param obj Object - 赋值的对象
   * @param chainStr string - 属性链式表达式 a.b.c
   * @return Object
   */
  getObjectByChainStr({ obj, chainStr }) {
    if (
      !this.isObject(obj) ||
      !this.isString(chainStr) ||
      this.isEmpty(chainStr) ||
      this.isEmpty(obj)
    )
      return obj;

    const chain = chainStr.split('.');

    // const obj = {};
    // a.b.c
    // const item = obj['a']
    let target = obj;

    for (let i = 0; i < chain.length; i++) {
      target = target[chain[i]];
    }

    return target;
  },
  /**
   * toCamelCase - 用连接符链接的字符串转换成驼峰写法
   * 例：abc-def AbcDef
   * @param str - string 用连接符节点的字符串
   * @param split - string 分割的字符
   * @param toUpperCase - boolean 是否转换成大写
   * @return {String}
   */
  toCamelCase(str, split = '_', toUpperCase = false) {
    const result = str
      .split(split)
      .map((item) => item.charAt(0).toUpperCase() + item.substring(1))
      .join('');
    return !toUpperCase ? `${result.charAt(0).toLowerCase()}${result.substring(1)}` : result;
  },
  /**
   * isKebabCase - 是否是烤肉串形式的名字
   * @param name - string 名称
   * @return boolean
   */
  isKebabCase(name) {
    return /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/.test(name);
  },
  /**
   * isPascalCase - 是否是驼峰形式的名字
   * @param name - string 名称
   * @return boolean
   */
  isPascalCase(name) {
    return /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(name);
  },
  /**
   * pascalCaseToKebabCase 驼峰转xxx-xxx-xxx
   * @param _str - string pascalCase的字符串
   * @param symbol 分隔符
   * @return {string}
   */
  pascalCaseToKebabCase(_str, symbol = '-') {
    // const result = name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2');
    // return (result.startsWith('-') ? result.substring(1) : result).toLowerCase();
    const cells = _str.match(/([A-Z]+(?=[A-Z]|$))|([A-Z]?[^A-Z]+)/g) || [];
    return cells.map((c) => c.toLowerCase()).join(symbol);
  },
  /**
   * pascalCaseToKebabCase 驼峰转xxx-xxx-xxx
   * @param name
   * @param symbol 分隔符
   * @return {string}
   */
  pascalCaseToKebabCase2(name, symbol = '-') {
    const result = name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2');
    return (result.startsWith(symbol) ? result.substring(1) : result).toLowerCase();
  },
  /**
   * execExpression - 执行表达式
   * @param context - {Object} 执行的上下文
   * @param expressionStr - {String} 表达式
   * @param data
   * @return {any}
   */
  execExpression(context, expressionStr, data) {
    // 实参列表，调用函数传递的参数
    const argv = [data];

    // 形参列表，函数声明的参数列表
    const parameters = ['context'];

    // 迭代context
    for (const p in context) {
      // 拼凑其他实参
      argv.push(context[p]);
      // 拼凑其他形参
      parameters.push(p);
    }

    // 创建函数并调用
    return eval(
      `
    const fun = new Function(
      \`${parameters.join(',')}\`,
      \`return eval("with(context){${expressionStr}}")\`,
    );

    fun.apply(window, argv);
  `,
    );
  },
  /**
   * getCookie
   * @return {string}
   * @param name
   */
  getCookie(name: string = 'lang'): string {
    const strCookie = typeof document !== 'undefined' ? document.cookie : ''; // 获取cookie字符串

    const arrCookie = strCookie.split(';'); // 分割

    // 遍历匹配
    let value = '';

    for (let i = 0; i < arrCookie.length; i++) {
      const arr = arrCookie[i].split('=');

      if (arr[0].trim() === name) {
        value = arr[1];

        break;
      }
    }

    return value;
  },
  /**
   * noop - 返回一个空实现的函数
   * @return Function
   */
  noop(): Function {
    return () => {};
  },
  /**
   * generatorRandom - 生成随机数
   * @param lowerValue - 最小值
   * @param upperValue - 最大值
   */
  generatorRandom(lowerValue, upperValue) {
    const choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
  },
  /**
   * uuid - 获取uuid
   * @return string
   */
  uuid() {
    const s: (string | number)[] = [];

    const hexDigits = '0123456789abcdef';

    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }

    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010

    s[19] = hexDigits.substr(((s[19] as number) & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01

    s[8] = s[13] = s[18] = s[23] = '-';

    return s.join('');
  },
  /**
   * getPropertyVisitPathStr - 获取属性访问的完整字符串路径 a.b.c.d.e.f
   * @param target Proxy中set的target参数
   * @param key Proxy中set的key参数
   * @return {string}
   */
  getPropertyVisitPathStr(target, key) {
    // 最终的访问路径 - 先将最后一个key放入
    const visitPath = this.isArray(target) /* && key !== 'length' */ ? [] : [key];

    if (target[PATH_SYMBOLS[0]]) {
      visitPath.push(target[PATH_SYMBOLS[0]]);
    }

    let parent = target[PATH_SYMBOLS[1]];
    while (parent) {
      if (parent[PATH_SYMBOLS[0]]) {
        visitPath.push(parent[PATH_SYMBOLS[0]]);
      }
      parent = parent[PATH_SYMBOLS[1]];
    }

    // [0] c b a
    // a b c [0]
    // a [0]

    visitPath.reverse();

    const result: string[] = [];

    for (let i = 0; i < visitPath.length; i++) {
      const item = visitPath[i];
      if (item.startsWith('[') && item.endsWith(']')) {
        result[result.length - 1] = `${result[result.length - 1]}${item}`;
      } else {
        result.push(item);
      }
    }

    return result.join('.');
  },
  /**
   * convertBase64UrlToBlob - 转换base64位blob对象
   * @return Blob
   * @param data
   */
  convertBase64UrlToBlob(data: string): Blob | null {
    if (typeof window === 'undefined') return null;

    const bytes = window.atob(data.split(',')[1]); // 去掉url的头，并转换为byte

    // 处理异常,将ascii码小于0的转换为大于0
    const ab = new ArrayBuffer(bytes.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }

    return new Blob([ab], { type: 'image/png' });
  },
  /**
   * omitObject
   * @description - 对象排除空值
   * @param obj
   * @return object
   */
  omitObject(obj: object): object {
    // eslint-disable-next-line no-param-reassign
    obj = obj ?? {};

    const res = {};

    const keys = Object.keys(obj);

    keys.forEach((key) => {
      let value = obj[key];
      if (![null, undefined, '', 'undefined'].includes(value)) {
        if (typeof value === 'string') {
          value = value.trim();
        }

        res[key] = value;
      }
    });

    return res;
  },
  /**
   * capitalized
   * @description 首字母大写
   * @param str
   */
  capitalized(str: string) {
    return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
  },
  /**
   * lowercaseInitial
   * @description 首字母小写
   * @param str
   */
  lowercaseInitial(str: string) {
    return `${str.charAt(0).toLowerCase()}${str.substring(1)}`;
  },
  /**----------------------------基本end---------------------------**/
};
