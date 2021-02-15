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
    (adhere_util_dict_1.default.handlers.ResourceNormalMaxZIndex = function () {
      return 19999;
    }),
      (adhere_util_dict_1.default.handlers.ResourceNormalPageSize = function () {
        return 10;
      }),
      (adhere_util_dict_1.default.handlers.ResourceNormalRomanNumeralsMap = function () {
        return new Map([
          [1, 'Ⅰ'],
          [2, 'Ⅱ'],
          [3, 'Ⅲ'],
          [4, 'Ⅳ'],
          [5, 'Ⅴ'],
          [6, 'Ⅵ'],
          [7, 'Ⅶ'],
          [8, 'Ⅷ'],
          [9, 'Ⅸ'],
          [10, 'Ⅹ'],
        ]);
      }),
      (adhere_util_dict_1.default.handlers.ResourceNormalWhether = function () {
        return [
          { label: adhere_util_intl_1.default.v('全部'), value: '' },
          { label: adhere_util_intl_1.default.v('是'), value: '1' },
          { label: adhere_util_intl_1.default.v('否'), value: '0' },
        ];
      }),
      (adhere_util_dict_1.default.handlers.ResourceNormalWhetherMap = function () {
        return new Map([
          ['', { label: adhere_util_intl_1.default.v('全部'), value: '' }],
          ['1', { label: adhere_util_intl_1.default.v('是'), value: '1' }],
          ['0', { label: adhere_util_intl_1.default.v('否'), value: '0' }],
        ]);
      }),
      (adhere_util_dict_1.default.handlers.ResourceNormalIsThere = function () {
        return [
          { label: adhere_util_intl_1.default.v('全部'), value: '' },
          { label: adhere_util_intl_1.default.v('有'), value: '1' },
          { label: adhere_util_intl_1.default.v('无'), value: '0' },
        ];
      }),
      (adhere_util_dict_1.default.handlers.ResourceNormalIsThereMap = function () {
        return new Map([
          ['', { label: adhere_util_intl_1.default.v('全部'), value: '' }],
          ['1', { label: adhere_util_intl_1.default.v('有'), value: '1' }],
          ['0', { label: adhere_util_intl_1.default.v('无'), value: '0' }],
        ]);
      }),
      (adhere_util_dict_1.default.handlers.ResourceNormalSex = function () {
        return [
          { label: adhere_util_intl_1.default.v('全部'), value: '' },
          { label: adhere_util_intl_1.default.v('男'), value: '1' },
          { label: adhere_util_intl_1.default.v('女'), value: '0' },
        ];
      }),
      (adhere_util_dict_1.default.handlers.ResourceNormalSexMap = function () {
        return new Map([
          ['', { label: adhere_util_intl_1.default.v('全部'), value: '' }],
          ['1', { label: adhere_util_intl_1.default.v('男'), value: '1' }],
          ['0', { label: adhere_util_intl_1.default.v('女'), value: '0' }],
        ]);
      });
  },
};
// # sourceMappingURL=dict.normal.config.js.map
