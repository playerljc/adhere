import Preferences from '@baifendian/adhere-util-preferences';

export default {
  /**
   * isEmpty - 对象是否为空
   * @param value
   */
  isEmpty(value) {
    if (value === null || value === '' || value === undefined) return true;

    return false;
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
   * isTextNode - 是否是文本节点
   * @param el - Node
   * @return {boolean}
   */
  isTextNode(el) {
    return el.nodeType === Node.TEXT_NODE;
  },

  /**
   * isCommentNode - 是否是注释节点
   * @param el
   * @return {boolean}
   */
  isCommentNode(el) {
    return el.nodeType === Node.COMMENT_NODE;
  },

  /**
   * isElementNode - 是否是元素节点
   * @param el - Element
   * @return {boolean}
   */
  isElementNode(el) {
    return el.nodeType === Node.ELEMENT_NODE;
  },

  /**
   * createElement - 根据html字符串创建dom
   * @param htmlStr - string
   * @return {Element}
   */
  createElement(htmlStr) {
    const el = document.createElement('div');
    el.innerHTML = htmlStr;
    return el.firstElementChild;
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
   * @param toUpperCase - boolean 是否转换成大写
   * @return {String}
   */
  toCamelCase(str, toUpperCase = false) {
    const result = str
      .split('-')
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
   * @param name - string pascalCase的字符串
   * @return {string}
   */
  pascalCaseToKebabCase(name) {
    const result = name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2');
    return (result.startsWith('-') ? result.substring(1) : result).toLowerCase();
  },

  /**
   * execExpression - 执行表达式
   * @param context - {Object} 执行的上下文
   * @param expressionStr - {String} 表达式
   * @return {any}
   */
  execExpression(context, expressionStr) {
    // 实参列表，调用函数传递的参数
    const argv = [this.$dataProxy];

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
   * noop - 返回一个空实现的函数
   * @return Function
   */
  noop(): Function {
    return () => {};
  },

  /**
   * 函数节流
   */

  /**
   * getCookie
   * @param {String} - name
   * @return {string}
   */
  getCookie(name: string = 'lang'): string {
    const strCookie = document.cookie; // 获取cookie字符串

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
   * getLang
   * @return {String}
   */
  getLang(): string {
    let language = this.getCookie('lang') || Preferences.getStringByLocal('language');

    if (!language) {
      Preferences.putStringByLocal('language', 'pt_PT');

      language = 'pt_PT';
    }

    return language;
  },

  /**
   * setLang
   * @param {String} - lang
   */
  setLang(lang: string = 'pt_PT') {
    Preferences.putStringByLocal('language', lang);
  },

  /**
   * getDatePickerFormat
   * @return {string}
   */
  getDatePickerFormat(): string {
    const lang = this.getLang();

    if (lang === 'zh_CN') {
      return 'YYYY-MM-DD';
    } else {
      return 'DD-MM-YYYY';
    }
  },

  /**
   * getUserInfo
   * @return {Object}
   */
  getUserInfo(): Object {
    return Preferences.getObjectBySession('system-userInfo') || {};
  },

  /**
   * userInfo
   * @param {Object} - userInfo
   */
  setUserInfo(userInfo: Object) {
    return Preferences.putObjectBySession('system-userInfo', userInfo);
  },

  /**
   * getUserAllUserPermission
   * @return {Array<String>}
   */
  getUserAllUserPermission(): Array<string> {
    return Preferences.getObjectBySession('system-userPermissio');
  },

  /**
   * 401 casUrl
   * @param baseUrl
   * @param enterUrl
   * @return {string}
   */
  casUrl({ baseUrl, enterUrl }): string {
    const language = this.getLang();

    const languageParam = language ? `&locale=${language}` : '';

    return `${baseUrl}/gotoLogin?backUrl=${enterUrl}${languageParam}`;
  },

  /**
   * casLogoutUrl
   * @param {String} - baseUrl
   * @param {String} - enterUrl
   * @param {String} - params
   * @return {string}
   */
  casLogoutUrl({ baseUrl, enterUrl, params = '' }): string {
    return `${baseUrl}/logout?service=${enterUrl}${params}`;
  },
};
