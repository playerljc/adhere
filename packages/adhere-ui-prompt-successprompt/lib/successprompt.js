const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const antd_1 = require('antd');
const adhere_util_intl_1 = __importDefault(require('@baifendian/adhere-util-intl'));

exports.default = function (e) {
  antd_1.message.success(e || adhere_util_intl_1.default.v('操作成功'));
};
// # sourceMappingURL=successprompt.js.map
