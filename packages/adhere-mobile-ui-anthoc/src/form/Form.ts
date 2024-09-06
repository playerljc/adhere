import { Form } from 'antd-mobile';
import type { FormProps } from 'antd-mobile';

import Validator from '@baifendian/adhere-util-validator';

import type { FormHOCComponent, FormValidatorRulesType } from '../types';
import { createFactory } from '../util';
import CustomWrapperFormItem from './CustomWrapperFormItem';
import FormItem from './FormItem';
import NestingFormItem from './NestingFormItem';

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
          const self = this;

          function validate() {
            // 调用Validator的指定方法进行校验
            if (!Validator[_key].apply(self, [value, ...(argv?.params || [])])) {
              return Promise.reject(argv?.invalidMessage ?? '');
            }

            return Promise.resolve();
          }

          if (_?.required) {
            if (!value) {
              return Promise.reject(_?.message);
            } else {
              return validate();
            }
          } else {
            if (!value) {
              return Promise.resolve();
            } else {
              return validate();
            }
          }
        },
      });

      return result;
    }, {});
})();

FormHOC.ValidatorRules = ValidatorRules;
FormHOC.Item = FormItem;
FormHOC.NestingFormItem = NestingFormItem;
FormHOC.CustomWrapperFormItem = CustomWrapperFormItem;
FormHOC.displayName = 'Form';

export default FormHOC;
