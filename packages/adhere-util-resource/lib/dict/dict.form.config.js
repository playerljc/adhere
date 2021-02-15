const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const adhere_util_dict_1 = __importDefault(require('@baifendian/adhere-util-dict'));
const adhere_util_intl_1 = __importDefault(require('@baifendian/adhere-util-intl'));

exports.default = {
  initStatic() {
    (adhere_util_dict_1.default.handlers.FormInputNumberRule = function () {
      return {
        whitespace: !0,
        type: 'number',
        message: adhere_util_intl_1.default.v('输入的值在1~200之间'),
        min: 1,
        max: 200,
      };
    }),
      (adhere_util_dict_1.default.handlers.FormInputStringRule = function () {
        return {
          whitespace: !0,
          type: 'string',
          message: adhere_util_intl_1.default.v('输入的内容在100个字符之内'),
          min: 1,
          max: 100,
        };
      }),
      (adhere_util_dict_1.default.handlers.FormPopupContainer = function () {
        return function (e) {
          return e.parentElement;
        };
      });
  },
};
// # sourceMappingURL=dict.form.config.js.map
