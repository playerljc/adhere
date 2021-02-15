const __importDefault =
  (this && this.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const adhere_util_1 = __importDefault(require('@baifendian/adhere-util'));
const adhere_util_dict_1 = __importDefault(require('@baifendian/adhere-util-dict'));

function initBasicDict() {
  const i = require.context('./dict', !1, /.*\.(js)$/);
  i.keys().forEach(function (t) {
    t = i(t).default;
    t &&
      adhere_util_1.default.isObject(t) &&
      ('initStatic' in t && adhere_util_1.default.isFunction(t.initStatic) && t.initStatic(),
      'initRemote' in t && adhere_util_1.default.isFunction(t.initRemote) && t.initRemote());
  });
}
initBasicDict(), (exports.default = { Dict: adhere_util_dict_1.default });
// # sourceMappingURL=resource.js.map
