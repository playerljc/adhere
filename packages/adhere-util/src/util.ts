import Preferences from '@baifendian/adhere-util-preferences';

const eventListenerHandlers = new Map();

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
   * toPoint - 百分数转化为小数
   * @param percent
   */
  toPoint(percent: string) {
    let str = percent.replace('%', '');

    // @ts-ignore
    return str / 100;
  },
  /**
   * point - 小数转化为百分数
   * @param point
   */
  toPercent(point) {
    let str = Number(point * 100).toFixed(1);

    str += '%';

    return str;
  },
  /**
   * getCookie
   * @return {string}
   * @param name
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
   * noop - 返回一个空实现的函数
   * @return Function
   */
  noop(): Function {
    return () => {};
  },
  /**
   * rgb - rgb颜色随机
   */
  rgb() {
    // rgb颜色随机
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `(${r},${g},${b})`;
  },
  /**
   * color16 - 十六进制颜色随机
   */
  color16() {
    // 十六进制颜色随机
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  },

  /**--------------------------dom-start-------------------------**/
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
   * getTopDom
   * @param {HtmlElement} target
   * @param {string} selector
   * @return {HtmlElement}
   */
  getTopDom(target, selector) {
    if (!target || !selector) return null;

    if (target.className.indexOf(selector) !== -1) {
      return target;
    }

    let parentDom = target;
    while ((parentDom = parentDom.parentNode)) {
      if (parentDom.className.indexOf(selector) !== -1) {
        break;
      } else if (parentDom === document.body) break;
    }

    if (parentDom) {
      if (parentDom === document.body) {
        return null;
      } else {
        return parentDom;
      }
    } else {
      return null;
    }
  },
  /**
   * off
   * @param el
   * @param tag
   * @param type
   * @param handler
   */
  off(el, tag, type, handler) {
    if (tag && type && handler) {
      const value = eventListenerHandlers.get(el);
      if (value && value[tag] && value[tag][type]) {
        const index = value[tag][type].indexOf(handler);
        if (index !== -1) {
          value[tag][type].splice(index, 1);
        }
        el.removeEventListener(type, handler);
      }
    } else if (tag && type && !handler) {
      const value = eventListenerHandlers.get(el);
      if (value && value[tag] && value[tag][type]) {
        value[tag][type].forEach((h) => {
          el.removeEventListener(type, h);
        });
        value[tag][type] = [];
      }
    } else if (tag && !type && !handler) {
      const value = eventListenerHandlers.get(el);
      if (value && value[tag]) {
        for (const t in value[tag]) {
          const h = value[tag][t];
          h.forEach((ih) => {
            el.removeEventListener(t, ih);
          });
          value[tag][t] = [];
        }
      }
    }
  },
  /**
   * on
   * @param el
   * @param tag
   * @param type
   * @param handler
   * @param capture
   */
  on(el, tag, type, handler, capture = false) {
    let value = eventListenerHandlers.get(el);
    if (!value) {
      value = {
        [tag]: {
          [type]: [],
        },
      };
      eventListenerHandlers.set(el, value);
    }

    let evtObj = value[tag];
    if (!evtObj) {
      evtObj = {
        [type]: [],
      };
      value[tag] = evtObj;
    }

    let handlers = evtObj[type];
    if (!handlers) {
      handlers = [];
      evtObj[type] = handlers;
    }

    handlers.push(handler);
    el.addEventListener(type, handler, capture);
  },
  /**
   * addClass
   * @param {HTMLElement} el
   * @param {String} classes
   */
  addClass(el, classes = '') {
    const classNames = classes.split(' ');
    for (let i = 0; i < classNames.length; i++) {
      el.classList.add(classNames[i]);
    }
  },
  /**
   * removeClass
   * @param {HTMLElement} el
   * @param {String} classes
   */
  removeClass(el, classes = '') {
    const classNames = classes.split(' ');
    for (let i = 0; i < classNames.length; i++) {
      el.classList.remove(classNames[i]);
    }
  },
  /**
   * hasClass
   * @param {HTMLElement} el
   * @param {String} className
   * @return {Boolean}
   */
  hasClass(el, className) {
    return el.classList.contains(className);
  },
  /**
   * DOM没有提供insertAfter()方法
   * @param {HtmlElement} newElement
   * @param {HtmlElement} targetElement
   */
  insertAfter(newElement, targetElement) {
    const parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
      // 如果最后的节点是目标元素，则直接添加。因为默认是最后
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling);
      // 如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
    }
  },
  /**
   * prepend
   * @param {HTMLElement} - el
   * @param {HTMLElement | String} - children
   */
  prepend(el, children) {
    let childrenEl;
    if (children instanceof String) {
      childrenEl = this.createElement(children);
    } else {
      childrenEl = children;
    }

    const firstEl = el.firstChild;
    el.insertBefore(childrenEl, firstEl);
  },
  /**
   * remove
   * @param {HTMLElement} - el
   */
  remove(el) {
    el.parentNode.removeChild(el);
  },
  /**
   * prevSibling
   * @param {HtmlElement} dom
   * @return {HtmlElement}
   */
  /**
   * getParentElementByTag
   * @param {HtmlElement} el
   * @param {string} tag
   * @return {HtmlElement}
   */
  getParentElementByTag(el, tag) {
    if (!tag) return null;
    let element;
    let parent = el;
    const popup = () => {
      parent = parent.parentElement;
      if (!parent) return null;
      const tagParent = parent.tagName.toLocaleLowerCase();
      if (tagParent === tag) {
        element = parent;
      } else if (tagParent === 'body') {
        element = null;
      } else {
        popup();
      }
    };

    popup();
    return element;
  },
  /**
   * children
   * @param {HTMLElement} el
   * @param {string} selector
   */
  children(el, selector) {
    const elements = Array.prototype.filter.call(el.children, (t) => {
      return t.nodeType === 1;
    });

    return elements.filter((t) => {
      return t.classList.contains(selector);
    });
  },
  /**
   * isTouch
   * @return {boolean}
   */
  isTouch() {
    return 'ontouchend' in document;
  },
  /**
   * objToDataset
   * @param {Object} - obj
   * @param {HTMLElement} - dom
   */
  objectToDataSet(obj, dom) {
    for (const p in obj) {
      dom.dataset[p] = obj[p];
    }
  },
  /**
   * dataSetToObj
   * @param {HTMLElement} - dom
   * @returns {Object}
   */
  dataSetToObject(dom) {
    const obj = {};
    for (const p in dom.dataset) {
      obj[p] = dom.dataset[p];
    }
    return obj;
  },
  /**
   * getPageLeft
   * @param {HTMLElement} - el
   * @return {SelectOptions}
   */
  getPageLeft(el) {
    let left = el.offsetLeft;
    let offsetParent = el.offsetParent;

    do {
      // @ts-ignore
      left += offsetParent.offsetLeft;
    } while ((offsetParent = offsetParent.offsetParent));

    return left;
  },
  /**
   * getPageTop
   * @param {HTMLElement} - el
   * @return {SelectOptions}
   */
  getPageTop(el) {
    let top = el.offsetTop;
    let offsetParent = el.offsetParent;

    do {
      // @ts-ignore
      top += offsetParent.offsetTop;
    } while ((offsetParent = offsetParent.offsetParent));

    return top;
  },
  /**
   * getPageRect
   * @param {HTMLElement} - el
   * @return {{top: number, left: number}}
   */
  getPageRect(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;

    let offsetParent = el.offsetParent;

    do {
      // @ts-ignore
      top += offsetParent.offsetTop;
      // @ts-ignore
      left += offsetParent.offsetLeft;
    } while ((offsetParent = offsetParent.offsetParent));

    return {
      top,
      bottom: top + el.offsetHeight,
      left,
      right: left + el.offsetWidth,
    };
  },
  /**
   * isIframeEmbed - 是否是iframe嵌入
   * @return {boolean}
   */
  isIframeEmbed() {
    return window.top && window.top !== window;
  },
  /**--------------------------dom-end-------------------------**/

  /**
   * 函数节流
   */

  /**
   * getLang
   * @return {String}
   */
  getLang(): string {
    let language = this.getCookie('lang') || Preferences.getStringByLocal('language');

    if (!language) {
      Preferences.putStringByLocal('language', 'zh_CN');

      language = 'zh_CN';
    }

    return language;
  },
  /**
   * setLang
   * @param lang
   */
  setLang(lang: string = 'zh_CN') {
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
