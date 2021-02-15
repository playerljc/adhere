const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const adhere_util_1 = __importDefault(require('@baifendian/adhere-util'));

function createProxy(e) {
  if (
    (adhere_util_1.default.isEmpty(e) && (e = {}),
    !adhere_util_1.default.isObject(e) && !adhere_util_1.default.isArray(e))
  )
    return e;
  let t;
  const r = new Proxy(e, {
    get(e, t, r) {
      let a = e[t];
      return (
        adhere_util_1.default.isEmpty(a) && ((a = {}), (e[t] = createProxy(a))),
        Reflect.get(e, t, r)
      );
    },
    set(e, t, r, a) {
      let u;
      let l;
      return (
        adhere_util_1.default.isEmpty(r) && (r = {}),
        adhere_util_1.default.isArray(e) &&
          ((u = e.length),
          Reflect.set(e, t, r, a),
          (l = e.length) < u
            ? console.log('删除', `key:${t}`, `value:${r}`)
            : (u < l
                ? console.log('添加', `key:${t}`, `value:${r}`)
                : console.log('修改', `key:${t}`, `value:${r}`),
              (adhere_util_1.default.isObject(r) || adhere_util_1.default.isArray(r)) &&
                ((r = createProxy(r)), Reflect.set(e, t, r, a)))),
        adhere_util_1.default.isObject(e) && (r = createProxy(r)),
        Reflect.set(e, t, r, a)
      );
    },
  });
  for (t in e) {
    const a = e[t];
    (adhere_util_1.default.isObject(a) || adhere_util_1.default.isArray(a)) &&
      (e[t] = createProxy(a));
  }
  return r;
}
exports.default = function (e) {
  return createProxy(e);
};
// # sourceMappingURL=notnull.js.map
