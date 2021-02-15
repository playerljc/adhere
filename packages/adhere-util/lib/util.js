const __importDefault =
  (this && this.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const adhere_util_preferences_1 = __importDefault(require('@baifendian/adhere-util-preferences'));

exports.default = {
  isEmpty(t) {
    return t === null || t === '' || void 0 === t;
  },
  isArray(t) {
    return Array.isArray(t);
  },
  isNumber(t) {
    return !this.isObject(t) && !this.isArray(t) && !this.isFunction(t) && typeof t === 'number';
  },
  isBoolean(t) {
    return (typeof t).toLowerCase() === 'boolean';
  },
  isString(t) {
    return (typeof t).toLowerCase() === 'string';
  },
  isFunction(t) {
    return t instanceof Function;
  },
  isObject(t) {
    return t instanceof Object && !Array.isArray(t) && !(t instanceof Function);
  },
  isTextNode(t) {
    return t.nodeType === Node.TEXT_NODE;
  },
  isCommentNode(t) {
    return t.nodeType === Node.COMMENT_NODE;
  },
  isElementNode(t) {
    return t.nodeType === Node.ELEMENT_NODE;
  },
  createElement(t) {
    const e = document.createElement('div');
    return (e.innerHTML = t), e.firstElementChild;
  },
  chainCallAssignment(t) {
    const e = t.obj;
    const n = t.chainStr;
    const r = t.value;
    if (!this.isObject(e) || !this.isString(n) || this.isEmpty(n) || this.isEmpty(e)) return !1;
    for (let i = n.split('.'), o = e, a = 0; a < i.length; a++) {
      const s = i[a];
      a < i.length - 1 ? (o = o[s]) : (o[s] = r);
    }
  },
  getObjectByChainStr(t) {
    const e = t.obj;
    var t = t.chainStr;
    if (!this.isObject(e) || !this.isString(t) || this.isEmpty(t) || this.isEmpty(e)) return e;
    for (var n = t.split('.'), r = e, i = 0; i < n.length; i++) r = r[n[i]];
    return r;
  },
  toCamelCase(t, e) {
    void 0 === e && (e = !1);
    t = t
      .split('-')
      .map(function (t) {
        return t.charAt(0).toUpperCase() + t.substring(1);
      })
      .join('');
    return e ? t : `${t.charAt(0).toLowerCase()}${t.substring(1)}`;
  },
  isKebabCase(t) {
    return /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/.test(t);
  },
  isPascalCase(t) {
    return /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(t);
  },
  pascalCaseToKebabCase(t) {
    t = t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2');
    return (t.startsWith('-') ? t.substring(1) : t).toLowerCase();
  },
  execExpression(context, expressionStr, data) {
    const argv = [data];
    const parameters = ['context'];
    let p;
    for (p in context) argv.push(context[p]), parameters.push(p);
    return eval(
      `\n    const fun = new Function(\n      \`${parameters.join(
        ',',
      )}\`,\n      \`return eval("with(context){${expressionStr}}")\`,\n    );\n  \n    fun.apply(window, argv);\n  `,
    );
  },
  noop() {
    return function () {};
  },
  getCookie(t) {
    void 0 === t && (t = 'lang');
    for (var e = document.cookie.split(';'), n = '', r = 0; r < e.length; r++) {
      const i = e[r].split('=');
      if (i[0].trim() === t) {
        n = i[1];
        break;
      }
    }
    return n;
  },
  getLang() {
    let t =
      this.getCookie('lang') || adhere_util_preferences_1.default.getStringByLocal('language');
    return (
      t || (adhere_util_preferences_1.default.putStringByLocal('language', 'zh_CN'), (t = 'zh_CN')),
      t
    );
  },
  setLang(t) {
    void 0 === t && (t = 'zh_CN'),
      adhere_util_preferences_1.default.putStringByLocal('language', t);
  },
  getDatePickerFormat() {
    return this.getLang() === 'zh_CN' ? 'YYYY-MM-DD' : 'DD-MM-YYYY';
  },
  casUrl(t) {
    const e = t.baseUrl;
    const n = t.enterUrl;
    var t = this.getLang();
    return `${e}/gotoLogin?backUrl=${n}${t ? `&locale=${t}` : ''}`;
  },
  casLogoutUrl(t) {
    const e = t.baseUrl;
    const n = t.enterUrl;
    var t = t.params;
    return `${e}/logout?service=${n}${void 0 === t ? '' : t}`;
  },
  isIframeEmbed() {
    return window.top && window.top !== window;
  },
  toPoint(t) {
    return t.replace('%', '') / 100;
  },
  toPercent(t) {
    t = Number(100 * t).toFixed(1);
    return (t += '%');
  },
};
// # sourceMappingURL=util.js.map
