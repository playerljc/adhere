import { useMount, useUpdateEffect } from 'ahooks';
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

/**
 * InternalNestingFormItem
 * @description 如果表单数据的值是非原始类型
 */
const InternalNestingFormItem = memo<
  PropsWithoutRef<InternalNestingFormItemProps> & RefAttributes<InternalNestingFormItemHandle>
>(
  forwardRef<InternalNestingFormItemHandle, InternalNestingFormItemProps>(
    ({ className, style, formProps, value, onChange, children }, ref) => {
      const [form] = Form.useForm();

      function onValuesChange(changedValues, all) {
        onChange?.(all);
      }

      function validateFields() {
        return form
          .validateFields()
          .then(() => {
            return;
          })
          .catch((err) => {
            return new Error(err);
          });
      }

      useMount(() => {
        form.setFieldsValue(value);
      });

      useUpdateEffect(() => {
        form.setFieldsValue(value);
      }, [value]);

      useImperativeHandle(ref, () => ({
        validateFields,
      }));

      return (
        <Form
          ref={ref}
          className={className ?? ''}
          style={style ?? {}}
          form={form}
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
