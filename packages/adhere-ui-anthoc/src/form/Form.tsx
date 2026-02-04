import { Form } from 'antd';
import classNames from 'classnames';
import type { NamePath, ValidateOptions } from 'rc-field-form/es/interface';
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
 * ErrorFieldItem
 * @description 错误字段项类型，支持嵌套错误结构
 */
// type ErrorFieldItem = {
//   name: InternalNamePath;
//   errors: (string | ErrorFieldItem)[];
//   errorFields?: ErrorFieldItem[];
// };

/**
 * genPrefixId
 * @description 递归的寻找每一个error的name
 * @param params - 错误字段项，包含 name 和 errors
 * @return {string[]} - name 路径数组（将 InternalNamePath 转换为字符串数组）
 */
// function genPrefixId({ name, errors }: ErrorFieldItem): string[] {
//   const error = errors[0];
//
//   // 将 InternalNamePath (string | number)[] 转换为 string[]
//   const nameStrings = Array.isArray(name) ? name.map(String) : [String(name)];
//
//   // 如果 error 是字符串，说明已经到最底层，返回当前 name
//   if (typeof error === 'string') {
//     return nameStrings;
//   }
//
//   // 如果 error 是对象但没有 errorFields，也返回当前 name
//   if (!error.errorFields || !error.errorFields.length) {
//     return nameStrings;
//   }
//
//   // 递归处理嵌套的 errorFields
//   return [...nameStrings, ...genPrefixId(error.errorFields[0])];
// }

/**
 * OnFinishFailedParams
 * @description onFinishFailed 函数的参数类型
 */
// type OnFinishFailedParams = {
//   errorInfo: ValidateErrorEntity<any>;
//   name?: string;
//   scrollToFirstError?: boolean;
//   enableShakeAnimation?: boolean;
// };

/**
 * onFinishFailed
 * @description 对errorInfo进行处理，尤其是对scrollToFirstError操作进行了自定义的实现
 * @param errorInfo
 * @param name
 * @param scrollToFirstError
 * @param enableShakeAnimation
 */
// function onFinishFailed({
//   errorInfo,
//   name,
//   scrollToFirstError,
//   enableShakeAnimation,
// }: OnFinishFailedParams): void {
//   // console.log('errorInfo', errorInfo);
//   // console.log('props.name', props.name);
//   // console.log('errorInfo?.errorFields', errorInfo?.errorFields);
//   // console.log('props.scrollToFirstError', props.scrollToFirstError);
//   if (errorInfo && errorInfo?.errorFields?.length > 0 /*&& !!name*/ && !!scrollToFirstError) {
//     // 具体要使用哪个元素进行scroll的操作，还需要对errorFields进行进一步判断
//     const firstErrorId = [name, ...genPrefixId(errorInfo?.errorFields[0]), 'help']
//       .filter(Boolean)
//       .join('_');
//
//     const firstErrorEL = document.getElementById(firstErrorId);
//     if (firstErrorEL) {
//       firstErrorEL.scrollIntoView(true);
//
//       // 如果启用了抖动动画，则添加动画效果（默认为 true）
//       if (enableShakeAnimation !== false) {
//         firstErrorEL.classList.add(`${selectorPrefix}-shake-animation`);
//
//         // 动画结束后移除类名，以便可以重复触发
//         const handleAnimationEnd = () => {
//           firstErrorEL.classList.remove(`${selectorPrefix}-shake-animation`);
//           firstErrorEL.removeEventListener('animationend', handleAnimationEnd);
//         };
//         firstErrorEL.addEventListener('animationend', handleAnimationEnd);
//       }
//     }
//   }
//
//   // props?.onFinishFailed?.(errorInfo);
// }

/**
 * FormInternal
 * @description FormInternal
 * @param props
 */
const FormInternal = memo<FormInternalProps>((props) => {
  // 提取自定义属性，不传递给 antd Form
  const { scrollMarginTop, enableShakeAnimation, useForm: _useForm, ...restProps } = props;

  const style = useMemo(() => {
    return {
      scrollMarginTop,
    };
  }, [scrollMarginTop]);

  return (
    // @ts-ignore - FormProps 的 children 类型与 Form 组件的类型定义不完全兼容
    <Form
      {...restProps}
      className={classNames(selectorPrefix, props.className, {
        [`${selectorPrefix}-scroll-margin-top`]: !!scrollMarginTop,
      })}
      style={style}
      // onFinishFailed={onFinishFailed}
    />
  );
});

const FormInternalComponent = FormInternal as FormComponent;

/**
 * ValidateFieldsExtraConfig
 * @description validateFields 的额外配置参数（第三个参数）
 */
type ValidateFieldsExtraConfig = {
  name?: string; // 表单名称，用于生成错误元素 ID
  scrollToFirstError?: boolean; // 是否滚动到第一个错误
  enableShakeAnimation?: boolean; // 是否启用抖动动画
};

/**
 * FormInternalComponent
 * @description useForm进行重写
 */
FormInternalComponent.useForm = (...params) => {
  const [form] = Form.useForm(...params);

  const proxyForm: ProxyFormInstance<any> = {
    ...form,
  };

  /**
   * validateFields
   * @description 对validateFields进行重写，监控catch加入滚动到第一个错误的Field
   */
  proxyForm.validateFields = (async (
    nameList?: NamePath[],
    config?: ValidateOptions,
    { scrollToFirstError = true }: ValidateFieldsExtraConfig = {},
  ): Promise<any> => {
    return await form.validateFields(nameList, config).catch((errors) => {
      if (scrollToFirstError && !!errors && errors?.errorFields?.length > 0) {
        form.scrollToField(errors?.errorFields[0].name, { focus: true });
      }

      return errors;
    });
  }) as unknown as typeof form.validateFields;

  /**
   * validateFieldsWithNesting
   * @description 在使用<Form.NestingFormItem>的时候使用的校验方法，不触发submit函数，不需要收集onFinishFailed的错误信息
   * @param args - 与 form.validateFields 参数一致：nameList?: NamePath[], opt?: ValidateOptions
   */
  proxyForm.validateFieldsWithNesting = (...args: any) => form.validateFields(...args);

  return [proxyForm];
};

/**
 * 对FormInstance其他属性进行Merge
 */
Object.keys(Form)
  .filter((key) => !['$$typeof', 'useForm', 'Item'].includes(key))
  .forEach((key) => {
    console.log('key', key);
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
