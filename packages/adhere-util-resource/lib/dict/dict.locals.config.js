const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const moment_1 = __importDefault(require('moment'));
const zh_CN_1 = __importDefault(require('antd/es/locale/zh_CN'));
const en_US_1 = __importDefault(require('antd/es/locale/en_US'));
const pt_PT_1 = __importDefault(require('antd/lib/locale/pt_PT'));
require('moment/locale/zh-cn'), require('moment/locale/en-ca'), require('moment/locale/pt');
const adhere_util_dict_1 = __importDefault(require('@baifendian/adhere-util-dict'));

exports.default = {
  initStatic() {
    (adhere_util_dict_1.default.handlers.Locals = function () {
      return { zh_CN: 'zh_CN', pt_PT: 'pt_PT', en_US: 'en_US' };
    }),
      (adhere_util_dict_1.default.handlers.LocalsAntd = function () {
        return { zh_CN: zh_CN_1.default, pt_PT: pt_PT_1.default, en_US: en_US_1.default };
      }),
      (adhere_util_dict_1.default.handlers.LocalsMoment = function () {
        return {
          zh_CN() {
            moment_1.default.locale('zh-cn');
          },
          en_US() {
            moment_1.default.locale('en-ca');
          },
          pt_PT() {
            moment_1.default.locale('pt');
          },
        };
      });
  },
  initRemote() {},
};
// # sourceMappingURL=dict.locals.config.js.map
