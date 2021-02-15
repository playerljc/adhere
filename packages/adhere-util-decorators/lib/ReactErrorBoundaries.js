const __extends =
  (this && this.__extends) ||
  (function () {
    var r = function (M, t) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (M, t) {
            M.__proto__ = t;
          }) ||
        function (M, t) {
          for (const e in t) t.hasOwnProperty(e) && (M[e] = t[e]);
        })(M, t);
    };
    return function (M, t) {
      function e() {
        this.constructor = M;
      }
      r(M, t),
        (M.prototype = t === null ? Object.create(t) : ((e.prototype = t.prototype), new e()));
    };
  })();
var __assign =
  (this && this.__assign) ||
  function () {
    return (__assign =
      Object.assign ||
      function (M) {
        for (var t, e = 1, r = arguments.length; e < r; e++)
          for (const N in (t = arguments[e]))
            Object.prototype.hasOwnProperty.call(t, N) && (M[N] = t[N]);
        return M;
      }).apply(this, arguments);
  };
const __rest =
  (this && this.__rest) ||
  function (M, t) {
    const e = {};
    for (N in M) Object.prototype.hasOwnProperty.call(M, N) && t.indexOf(N) < 0 && (e[N] = M[N]);
    if (M != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var r = 0, N = Object.getOwnPropertySymbols(M); r < N.length; r++)
        t.indexOf(N[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(M, N[r]) &&
          (e[N[r]] = M[N[r]]);
    return e;
  };
const __importDefault =
  (this && this.__importDefault) ||
  function (M) {
    return M && M.__esModule ? M : { default: M };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const react_1 = __importDefault(require('react'));
const antd_1 = require('antd');
const adhere_util_intl_1 = __importDefault(require('@baifendian/adhere-util-intl'));
const adhere_util_1 = __importDefault(require('@baifendian/adhere-util'));

const errorIcon =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkyNzM0NTgwMDkxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzODMiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1OC4zMjUzODYgNTYzLjA3MzczMW0tNzYuNzgyNzgxIDBhNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMCAxNTMuNTY1NTYzIDAgNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMC0xNTMuNTY1NTYzIDBaIiBmaWxsPSIjMTM5MjdEIiBwLWlkPSIzMzg0Ij48L3BhdGg+PHBhdGggZD0iTTY2NS40NTY1MTIgNTYzLjA3MzczMW0tNzYuNzgyNzgxIDBhNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMCAxNTMuNTY1NTYzIDAgNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMC0xNTMuNTY1NTYzIDBaIiBmaWxsPSIjMTM5MjdEIiBwLWlkPSIzMzg1Ij48L3BhdGg+PHBhdGggZD0iTTUxMS44OTA5NDkgMGMyNjguNTYwNTc1IDAgNDg2LjI5MDk0OSAyMTcuNzMwMzc0IDQ4Ni4yOTA5NSA0ODYuMjkwOTQ5IDAgMTE5LjYyNzU3NC00My40NTkwNTQgMjMyLjQ3MjY2OC0xMjAuMjY3NDMxIDMyMC4xODQxOTlsLTcuNzAzODcyIDguNTc0MDc3Vjk3Mi41ODE4OTlhNTEuMTg4NTIxIDUxLjE4ODUyMSAwIDAgMS00Ny4zNzQ5NzYgNTEuMDYwNTQ5bC0zLjgzOTEzOSAwLjEyNzk3MWE1MS4xODg1MjEgNTEuMTg4NTIxIDAgMCAxLTUxLjAzNDk1Ni00Ny4zNzQ5NzZsLTAuMTI3OTcxLTMuODM5MTM5di0xNzguMDg0ODY0YTUxLjE4ODUyMSA1MS4xODg1MjEgMCAwIDEgMTUuMDc1MDItMzYuMjY3MDY3QTM4Mi40ODA2MjkgMzgyLjQ4MDYyOSAwIDAgMCA4OTUuODA0ODU3IDQ4Ni4yOTA5NDljMC0yMTIuMDIyODU0LTE3MS44OTEwNTMtMzgzLjkxMzkwNy0zODMuOTEzOTA4LTM4My45MTM5MDctMjEyLjAyMjg1NCAwLTM4My45MTM5MDcgMTcxLjg5MTA1My0zODMuOTEzOTA3IDM4My45MTM5MDcgMCAxMDMuNDc3NTk1IDQxLjA3ODc4OCAyMDAuMzI2Mjc3IDExMi45MjE4NzcgMjcxLjkzOTAxOGE1MS4xODg1MjEgNTEuMTg4NTIxIDAgMCAxIDE0Ljg0NDY3MSAzMS43MzY4ODNsMC4yMDQ3NTQgNC41MzAxODRWOTcyLjU4MTg5OWE1MS4xODg1MjEgNTEuMTg4NTIxIDAgMCAxLTEwMi4yNDkwNyAzLjgzOTEzOUwxNTMuNTcxMzAyIDk3Mi41ODE4OTl2LTE1Ny41MzI2NzRBNDg0LjY1MjkxNyA0ODQuNjUyOTE3IDAgMCAxIDI1LjcyNzk3MSA0OTcuNTAxMjM1TDI1LjYgNDg2LjI5MDk0OUMyNS42IDIxNy43MzAzNzQgMjQzLjMzMDM3NCAwIDUxMS44OTA5NDkgMHoiIGZpbGw9IiMxMzkyN0QiIHAtaWQ9IjMzODYiPjwvcGF0aD48cGF0aCBkPSJNNTExLjg5MDk0OSA3OTMuNDIyMDc1YTUxLjE4ODUyMSA1MS4xODg1MjEgMCAwIDEgNTEuMDYwNTUgNDcuMzQ5MzgyTDU2My4wNzk0NyA4NDQuNjEwNTk2djEyNy45NzEzMDNhNTEuMTg4NTIxIDUxLjE4ODUyMSAwIDAgMS0xMDIuMjQ5MDcgMy44MzkxMzlMNDYwLjcwMjQyOCA5NzIuNTgxODk5di0xMjcuOTcxMzAzYTUxLjE4ODUyMSA1MS4xODg1MjEgMCAwIDEgNTEuMTg4NTIxLTUxLjE4ODUyMXoiIGZpbGw9IiMxMzkyN0QiIHAtaWQ9IjMzODciPjwvcGF0aD48L3N2Zz4=';

exports.default = function (t) {
  let e;
  const r =
    ((e = react_1.default.Component),
    __extends(M, e),
    (M.getDerivedStateFromError = function (M) {
      return console.error(M), { hasError: !0 };
    }),
    (M.prototype.componentDidCatch = function (M, t) {
      console.error(M, t);
    }),
    (M.prototype.render = function () {
      if (this.state.hasError)
        return react_1.default.createElement(antd_1.Empty, {
          image: errorIcon,
          imageStyle: { height: 60 },
          description: adhere_util_intl_1.default.v('糟糕！，出了些问题'),
        });
      var M = this.props;
      var M = (M.forwardedRef, __rest(M, ['forwardedRef']));
      var M = { ...M };
      return (
        adhere_util_1.default.isArray(t)
          ? t.prototype.isReactComponent &&
            (M.ref = this.props.forwardedRef || react_1.default.createRef())
          : adhere_util_1.default.isObject(t) &&
            t.constructor.prototype.isReactComponent &&
            (M.ref = this.props.forwardedRef || react_1.default.createRef()),
        react_1.default.createElement(t, { ...M })
      );
    }),
    M);
  function M() {
    const M = (e !== null && e.apply(this, arguments)) || this;
    return (M.state = { hasError: !1 }), M;
  }
  return react_1.default.forwardRef(function (M, t) {
    return react_1.default.createElement(r, { ...M, forwardedRef: t });
  });
};
// # sourceMappingURL=ReactErrorBoundaries.js.map
