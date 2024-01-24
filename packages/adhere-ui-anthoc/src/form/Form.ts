import { Form } from 'antd';
import type { FormProps } from 'antd';

import Validator from '@baifendian/adhere-util-validator';

import type { FormHOCComponent, FormValidatorRulesType } from '../types';
import { createFactory } from '../util';

// Form对象
const FormHOC: FormHOCComponent = createFactory<FormProps>(Form, {});

// entityInValue
// dataSourceProp 数据源属性

let ValidatorRules: FormValidatorRulesType;

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
    .reduce<FormValidatorRulesType>((result, _key) => {
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

FormHOC.ValidatorRules = ValidatorRules;
FormHOC.displayName = 'Form';

export default FormHOC;
