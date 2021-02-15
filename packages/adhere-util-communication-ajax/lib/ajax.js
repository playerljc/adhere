var __assign =
  (this && this.__assign) ||
  function () {
    return (__assign =
      Object.assign ||
      function (e) {
        for (var t, n = 1, a = arguments.length; n < a; n++)
          for (const r in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
      }).apply(this, arguments);
  };
const __rest =
  (this && this.__rest) ||
  function (e, t) {
    const n = {};
    for (r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
        t.indexOf(r[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
          (n[r[a]] = e[r[a]]);
    return n;
  };
const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const antd_1 = require('antd');
const adhere_util_1 = __importDefault(require('@baifendian/adhere-util'));
const adhere_util_intl_1 = __importDefault(require('@baifendian/adhere-util-intl'));
const adhere_ui_globalindicator_1 = __importDefault(
  require('@baifendian/adhere-ui-globalindicator'),
);

let trigger402 = !1;

function errorInfo(e, t) {
  antd_1.notification.error({ message: e, description: t });
}
function warnInfo(e, t) {
  antd_1.notification.warn({ message: e, description: t });
}
function createXHR() {
  return new XMLHttpRequest();
}
function getDefaultConfig() {
  const t = this;
  return {
    timeout: Ajax.TIMEOUT,
    withCredentials: !0,
    onLoad() {},
    onLoadsStart() {},
    onLoadend() {},
    onProgress() {},
    onTimeout() {
      warnInfo(adhere_util_intl_1.default.v('提示'), adhere_util_intl_1.default.v('请求超时'));
    },
    onAbort() {
      warnInfo(adhere_util_intl_1.default.v('提示'), adhere_util_intl_1.default.v('请求终止'));
    },
    onError() {
      errorInfo(adhere_util_intl_1.default.v('提示'), adhere_util_intl_1.default.v('请求发生错误'));
    },
    interceptor(e) {
      switch (e.status) {
        case 401:
          deal401.call(t);
          break;
        case 402:
          deal402.call(t);
      }
    },
  };
}
function initXhrEvents(e, t) {
  const n = t.onTimeout;
  const a = t.onLoadsStart;
  const r = t.onProgress;
  const o = t.onAbort;
  const i = t.onError;
  const s = t.onLoad;
  var t = t.onLoadend;
  n && e.addEventListener('timeout', n),
    a && e.addEventListener('loadstart', a),
    r && e.addEventListener('progress', r),
    o && e.addEventListener('abort', o),
    i && e.addEventListener('error', i),
    s && e.addEventListener('load', s),
    t && e.addEventListener('loadend', t);
}
function resolveData(e) {
  const t = e.show;
  const n = e.data;
  const a = e.indicator;
  return t
    ? {
        data: n,
        hideIndicator() {
          adhere_ui_globalindicator_1.default.hide(a);
        },
      }
    : n;
}
function onreadystatechange(e) {
  const t = e.xhr;
  const n = e.interceptor;
  var a = e.loading;
  const r = a.show;
  const o = a.indicator;
  var i = e.business;
  const s = i.messageKey;
  const d = i.codeKey;
  const _ = i.codeSuccess;
  const u = i.showWarn;
  const l = e.resolve;
  const c = e.reject;
  const f = t.status;
  let p = t.readyState;
  const T = t.statusText;
  var a = t.response;
  var i = t.responseText;
  p === Ajax.READY_STATE_DONE &&
    ((f >= 200 && f < 300) || f === 304
      ? (e = t.getResponseHeader('Content-type')).indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON) !== -1
        ? ((p = JSON.parse(t.responseText)),
          u && p[d] !== _ && warnInfo(adhere_util_intl_1.default.v('提示'), p[s]),
          l(resolveData({ show: r, data: p, indicator: o })))
        : [Ajax.CONTENT_TYPE_TEXT_XML, Ajax.CONTENT_TYPE_TEXT_XML].includes(e)
        ? l(resolveData({ show: r, data: t.responseXML, indicator: o }))
        : l(resolveData({ show: r, data: t.response, indicator: o }))
      : (errorInfo(
          adhere_util_intl_1.default.v('提示'),
          adhere_util_intl_1.default.v('已提出请求，但未收到任何回复'),
        ),
        n({ status: f, statusText: T, response: a, responseText: i }),
        f && c({ status: f, statusText: T, response: a, responseText: i }),
        r && o && adhere_ui_globalindicator_1.default.hide(o)));
}
function sendPrepare(e, t) {
  let n;
  const a = t.resolve;
  const r = t.reject;
  const o = e.method;
  const i = e.path;
  const s = e.headers;
  var d = e.mock;
  var _ = e.loading;
  var u = (e.onBeforeResponse, e.dataKey);
  const l = void 0 === u ? 'data' : u;
  var c = e.messageKey;
  const f = void 0 === c ? 'message' : c;
  var p = e.codeKey;
  const T = void 0 === p ? 'code' : p;
  var t = e.codeSuccess;
  var u = void 0 === t ? 200 : t;
  var c = e.showWarn;
  var p = void 0 === c || c;
  var t = __rest(e, [
    'method',
    'path',
    'headers',
    'mock',
    'loading',
    'onBeforeResponse',
    'dataKey',
    'messageKey',
    'codeKey',
    'codeSuccess',
    'showWarn',
  ]);
  var c = `${adhere_util_intl_1.default.v('加载中')}...`;
  var e = _.show;
  const h = void 0 !== e && e;
  var e = _.text;
  var e = void 0 === e ? c : e;
  var _ = _.el;
  var _ = void 0 === _ ? document.body : _;
  if ((h && (n = adhere_ui_globalindicator_1.default.show(_ || document.body, e || c)), d))
    return (
      setTimeout(function () {
        a(
          h
            ? {
                data: i,
                hideIndicator() {
                  adhere_ui_globalindicator_1.default.hide(n);
                },
              }
            : i,
        );
      }, 200),
      null
    );
  var _ = this.baseURL;
  var e = this.config;
  var c = Object.assign(getDefaultConfig.call(this), e, t);
  var d = c.timeout;
  var e = c.withCredentials;
  var t = c.interceptor;
  var c = __rest(c, ['timeout', 'withCredentials', 'interceptor']);
  const E = createXHR();
  if (
    (E.open(o, `${_}/${i}`, !0),
    (E.timeout = d),
    (E.withCredentials = e),
    !adhere_util_1.default.isEmpty(s) && adhere_util_1.default.isObject(s))
  )
    for (const O in ('Content-type' in s ||
      (s['Content-Type'] = `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`),
    s))
      E.setRequestHeader(O, s[O]);
  else E.setRequestHeader('Content-Type', `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`);
  return (
    initXhrEvents(E, c),
    (E.onreadystatechange = onreadystatechange.bind(this, {
      xhr: E,
      interceptor: t,
      loading: { show: h, indicator: n },
      business: { dataKey: l, messageKey: f, codeKey: T, codeSuccess: u, showWarn: p },
      resolve: a,
      reject: r,
    })),
    E
  );
}
function getSendParams(e) {
  const t = e.data;
  var e = e.contentType;
  if (
    (e = e || '').indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON) === 0 &&
    adhere_util_1.default.isObject(t)
  )
    return JSON.stringify(t);
  if (
    e.indexOf(Ajax.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED) === 0 &&
    adhere_util_1.default.isObject(t)
  )
    return Array.from(Object.keys(t))
      .map(function (e) {
        return encodeURIComponent(`${e}=${t[e]}`);
      })
      .join('&');
  if (e.indexOf(Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA) === 0 && adhere_util_1.default.isObject(t)) {
    const n = new FormData(t.form);
    return (
      Array.from(Object.keys(t)).forEach(function (e) {
        n.set(e, t[e]);
      }),
      n
    );
  }
}
function complexRequest(n, e) {
  const a = this;
  const r = e.data;
  const o = __rest(e, ['data']);
  return new Promise(function (e, t) {
    t = sendPrepare.call(a, { method: n, ...o }, { resolve: e, reject: t });
    t && t.send(getSendParams.call(a, { data: r, contentType: o.headers['Content-type'] }));
  });
}
function deal401() {
  if (
    (window.top && window.top !== window && window.top.postMessage('http_status_401', '*'),
    trigger402)
  )
    return !1;
  window.location.href = adhere_util_1.default.casUrl({
    baseUrl: this.systemManagerBaseUrl,
    enterUrl: window.location.href,
  });
}
function deal402() {
  if (((trigger402 = !0), window.parent && window.parent !== window))
    return window.parent.postMessage('http_status_402', '*'), !1;
  window.location.href = adhere_util_1.default.casLogoutUrl({
    baseUrl: this.systemManagerBaseUrl,
    enterUrl: window.location.href,
    params: '&code=402',
  });
}
var Ajax = (function () {
  function e(e, t, n) {
    (this.baseURL = e), (this.systemManagerBaseURL = t), (this.config = n);
  }
  return (
    (e.prototype.get = function (e) {
      const n = this;
      const a = (e.data, __rest(e, ['data']));
      return new Promise(function (e, t) {
        t = sendPrepare.call(n, { method: 'get', ...a }, { resolve: e, reject: t });
        t && t.send(null);
      });
    }),
    (e.prototype.post = function (e) {
      return complexRequest('post', e);
    }),
    (e.prototype.path = function (e) {
      return complexRequest('path', e);
    }),
    (e.prototype.put = function (e) {
      return complexRequest('put', e);
    }),
    (e.prototype.delete = function (e) {
      return complexRequest('delete', e);
    }),
    (e.TIMEOUT = 1e6),
    (e.STATUS_SUCCESS_CODES = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226]),
    (e.STATUS_REDIRECT_CODES = [300, 301, 302, 303, 304, 305, 306, 307, 308]),
    (e.READY_STATE_UNSENT = 0),
    (e.READY_STATE_OPENED = 1),
    (e.READY_STATE_HEADERS_RECEIVED = 2),
    (e.READY_STATE_LOADING = 3),
    (e.READY_STATE_DONE = 4),
    (e.CONTENT_TYPE_APPLICATION_JSON = 'application/json'),
    (e.CONTENT_TYPE_MULTIPART_FORM_DATA = 'multipart/form-data'),
    (e.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED = 'application/x-www-form-urlencoded'),
    (e.CONTENT_TYPE_TEXT_XML = 'text/xml'),
    (e.CONTENT_TYPE_APPLICATION_XML = 'application/xml'),
    (e.CONTENT_TYPE_TEXT_PLAIN = 'text/plain'),
    e
  );
})();
exports.default = Ajax;
// # sourceMappingURL=ajax.js.map
