Object.defineProperty(exports, '__esModule', { value: !0 });
const target = {};
const funParams = new Map();
function diffParams(n, e) {
  if (n.length !== e.length) return !1;
  for (var r = !1, t = 0; t < n.length; t++)
    if (n[t] !== e[t]) {
      r = !0;
      break;
    }
  return !r;
}
function CreateFunProxy(n, i) {
  return new Proxy(n, {
    apply(n, e, r) {
      const t = e || window;
      let a = null;
      var e = funParams.get(i);
      return (
        e && diffParams(e.argArray, r)
          ? (a = e.result)
          : ((a = n.apply(t, r)), funParams.set(i, { argArray: r, result: a })),
        a
      );
    },
  });
}
function initValue(n, e) {
  e = (0, ins.handlers[n])(e);
  return (e = e instanceof Function ? CreateFunProxy(e, n) : e);
}
var ins = {
  handlers: {},
  value: new Proxy(target, {
    get(n, e, r) {
      return (
        e in n ||
          (r[e] = {
            value: initValue(e, null),
            refresh(n) {
              r[e].value = initValue(e, n);
            },
          }),
        Reflect.get(target, e, r)
      );
    },
  }),
  init(n) {
    ((n = void 0 === n ? [] : n) || []).forEach(function (n) {
      n && (n.initStatic(), n.initRemote());
    });
  },
};
exports.default = ins;
// # sourceMappingURL=dict.js.map
