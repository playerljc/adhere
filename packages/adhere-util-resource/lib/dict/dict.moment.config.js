const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const adhere_util_dict_1 = __importDefault(require('@baifendian/adhere-util-dict'));

exports.default = {
  initStatic() {
    (adhere_util_dict_1.default.handlers.ResourceMomentFormatYear = function () {
      return 'YYYY';
    }),
      (adhere_util_dict_1.default.handlers.ResourceMomentFormat10 = function () {
        return 'YYYY-MM-DD';
      }),
      (adhere_util_dict_1.default.handlers.ResourceMomentFormatFull = function () {
        return 'YYYY-MM-DD HH:mm:ss';
      });
  },
};
// # sourceMappingURL=dict.moment.config.js.map
