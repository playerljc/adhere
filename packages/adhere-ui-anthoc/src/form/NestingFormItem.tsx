import { useMount, useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import React, {
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';

import type {
  DisplayNameInternal,
  InternalNestingFormItemHandle,
  InternalNestingFormItemProps,
} from '../types';
import Form from './Form';

const selectorPrefix = 'adhere-ui-anthoc-form-nesting-form-item';

/**
 * InternalNestingFormItem
 * @description 如果表单数据的值是非原始类型，则可以使用当前组件作为FormItem的children
 */
const InternalNestingFormItem = memo<
  PropsWithoutRef<InternalNestingFormItemProps> & RefAttributes<InternalNestingFormItemHandle>
>(
  forwardRef<InternalNestingFormItemHandle, InternalNestingFormItemProps>(
    ({ id, className, style, formProps, value, onChange, children }, ref) => {
      const [form] = Form.useForm();

      function onValuesChange(_, all) {
        onChange?.(all);
      }

      /**
       * validateFields
       * @description 对表单项进行校验
       * @return {Promise}
       */
      function validateFields(): Promise<void> {
        return new Promise((resolve, reject) => {
          form
            .validateFieldsWithNesting()
            .then(() => {
              resolve();
            })
            .catch((error) => {
              reject(error);
            });
        });
      }

      useMount(() => {
        if (value != null) {
          form.setFieldsValue(value);
        }
      });

      useUpdateEffect(() => {
        if (value != null) {
          form.setFieldsValue(value);
        }
      }, [value]);

      useImperativeHandle(ref, () => ({
        validateFields,
      }));

      return (
        <Form
          id={id}
          ref={ref}
          name={id}
          form={form}
          className={classNames(selectorPrefix, className)}
          style={style ?? {}}
          {...(formProps ?? {})}
          onValuesChange={onValuesChange}
        >
          {children}
        </Form>
      );
    },
  ),
);
const NestingFormItem = InternalNestingFormItem as DisplayNameInternal<
  typeof InternalNestingFormItem
>;

NestingFormItem.displayName = 'NestingFormItem';

export default NestingFormItem;
