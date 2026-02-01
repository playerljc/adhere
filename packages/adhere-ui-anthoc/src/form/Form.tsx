import { Form } from 'antd';
import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import Validator from '@baifendian/adhere-util-validator';

import type {
  CustomWrapperFormItemProps,
  FormComponent,
  FormHOCComponent,
  FormInternalProps,
  FormValidatorRulesType,
  InternalNestingFormItemProps,
  ProxyFormInstance,
} from '../types';
import { createFactory } from '../util';
import CheckboxWrapperFormItm, { type CheckboxWrapperFormItmProps } from './CheckboxWrapperFormItm';
import CustomWrapperFormItem from './CustomWrapperFormItem';
import FormItem from './FormItem';
import NestingFormItem from './NestingFormItem';
import SubmitButton from './SubmitButton';

const selectorPrefix = 'adhere-ui-anthoc-form';

/**
 * FormInternal
 * @description FormInternal
 * @param props
 */
const FormInternal = memo<FormInternalProps>((props) => {
  /**
   * genPrefixId
   * @description 递归的寻找每一个error的name
   * @param {{name:string; errors: object;}} params
   * @return {string[]}
   */
  function genPrefixId({ name, errors }) {
    const error = errors[0];

    if (typeof error === 'string') {
      return [name];
    }

    if (!error.errorFields.length) {
      return [name];
    }

    return [name, ...genPrefixId(error.errorFields[0])];
  }

  /**
   * onFinishFailed
   * @description 对errorInfo进行处理，尤其是对scrollToFirstError操作进行了自定义的实现
   * @param errorInfo
   */
  function onFinishFailed(errorInfo) {
    console.log('errorInfo', errorInfo);
    console.log('props.name', props.name);
    console.log('errorInfo?.errorFields', errorInfo?.errorFields);
    console.log('props.scrollToFirstError', props.scrollToFirstError);
    if (
      errorInfo &&
      errorInfo?.errorFields?.length > 0 &&
      !!props.name &&
      !!props.scrollToFirstError
    ) {
      // 具体要使用哪个元素进行scroll的操作，还需要对errorFields进行进一步判断
      const firstErrorId = [props.name, ...genPrefixId(errorInfo?.errorFields[0]), 'help'].join(
        '_',
      );

      const firstErrorEL = document.getElementById(firstErrorId);
      if (firstErrorEL) {
        firstErrorEL.scrollIntoView(true);
        
        // 如果启用了抖动动画，则添加动画效果（默认为 true）
        if (props.enableShakeAnimation !== false) {
          firstErrorEL.classList.add(`${selectorPrefix}-shake-animation`);
          
          // 动画结束后移除类名，以便可以重复触发
          const handleAnimationEnd = () => {
            firstErrorEL.classList.remove(`${selectorPrefix}-shake-animation`);
            firstErrorEL.removeEventListener('animationend', handleAnimationEnd);
          };
          firstErrorEL.addEventListener('animationend', handleAnimationEnd);
        }
      }
    }

    props?.onFinishFailed?.(errorInfo);
  }

  const style = useMemo(() => {
    return {
      scrollMarginTop: props.scrollMarginTop,
    };
  }, [props.scrollMarginTop]);

  return (
    // @ts-ignore
    <Form
      {...props}
      className={classNames(selectorPrefix, props.className, {
        [`${selectorPrefix}-scroll-margin-top`]: !!props.scrollMarginTop,
      })}
      style={style}
      onFinishFailed={onFinishFailed}
    />
  );
});

const FormInternalComponent = FormInternal as FormComponent;

/**
 * FormInternalComponent
 * @description useForm进行重写
 */
FormInternalComponent.useForm = () => {
  const [form] = Form.useForm();

  const proxyForm: ProxyFormInstance<any> = {
    ...form,
  };

  // 重写了validateFields进行重写
  const validateFields = form.validateFields;

  proxyForm.validateFields = (...opt: any[]) => {
    // 调用了submit方法
    form.submit();

    // 一下操作是需要和原始的validateFields一致
    return new Promise((resolve, reject) => {
      // 为什么要使用setTimeout，因为调用了submit之后不能马上调用getFieldsValue和getFieldsError方法
      setTimeout(() => {
        // @ts-ignore
        const values = form.getFieldsValue(...opt);
        const errors = form.getFieldsError(...opt);

        // 有错误
        if (!!errors.length && errors.some((error) => !!error.errors.length)) {
          return reject(errors);
        }

        // 没有了错误
        return resolve(values);
      }, 1);
    });
  };

  /**
   * validateFieldsWithNesting
   * @description 在使用<Form.NestingFormItem>的时候使用的校验方法，不触发submit函数，不需要收集onFinishFailed的错误信息
   * @param opt
   */
  proxyForm.validateFieldsWithNesting = (...opt) => validateFields(...opt);

  return [proxyForm];
};

/**
 * 对FormInstance其他属性进行Merge
 */
Object.keys(Form)
  .filter((key) => !['$$typeof', 'useForm', 'Item'].includes(key))
  .forEach((key) => {
    FormInternalComponent[key] = Form[key];
  });

// Form对象
const FormHOC: FormHOCComponent = createFactory<FormInternalProps>(FormInternalComponent, {});

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
FormHOC.NestingFormItem = createFactory<InternalNestingFormItemProps>(NestingFormItem, {});
FormHOC.CustomWrapperFormItem = createFactory<CustomWrapperFormItemProps>(
  CustomWrapperFormItem,
  {},
);
FormHOC.CheckboxWrapperFormItm = createFactory<CheckboxWrapperFormItmProps>(
  CheckboxWrapperFormItm,
  {},
);
FormHOC.Item = FormItem;
FormHOC.SubmitButton = SubmitButton;
FormHOC.displayName = 'Form';

export default FormHOC;
