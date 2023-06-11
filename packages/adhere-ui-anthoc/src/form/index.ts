import { Form, FormRule } from 'antd';

import Validator from '@baifendian/adhere-util-validator';

import { createFactory } from '../util';

// Form对象
const FormWrap = createFactory(Form, {});

type ValidatorRulesType = {
  [prop: string]: (argv?: { params?: any; invalidMessage?: string }) => FormRule;
};

let ValidatorRules: ValidatorRulesType;

(() => {
  const excludes = [
    'default',
    'version',
    'toDate',
    'toFloat',
    'toInt',
    'toBoolean',
    'equals',
    'contains',
    'matches',
    'ltrim',
    'rtrim',
    'trim',
    'escape',
    'unescape',
    'stripLow',
    'whitelist',
    'blacklist',
    'isWhitelisted',
    'normalizeEmail',
    'toString',
  ];

  /**
   * 设置Rules
   * Rules根据@baifendian/adhere-util-validator库来生成
   */
  ValidatorRules = Array.from(Object.keys(Validator))
    .filter((_key) => !excludes.includes(_key))
    .reduce<ValidatorRulesType>((result, _key) => {
      result[_key] = (argv) => ({
        /**
         * validator
         * @description 主要是实现validator方法
         * @param _
         * @param value
         */
        validator(_, value) {
          if (!value) {
            return Promise.reject();
          }

          // 调用Validator的指定方法进行校验
          if (!Validator[_key].apply(this, [value, ...(argv?.params || [])])) {
            return Promise.reject(argv?.invalidMessage ?? '');
          }

          return Promise.resolve();
        },
      });

      return result;
    }, {});
})();

FormWrap.ValidatorRules = ValidatorRules;

export default FormWrap;
