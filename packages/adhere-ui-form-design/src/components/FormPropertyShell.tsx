import React, { useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { DesignContext } from '../Design/Context';
import type { DesignValueProps, FormItemProps } from '../types';
import PropertiesGridLayout from './TableGridLayout';

export type FormPropertyShellProps = {
  formName: string;
  designValue: DesignValueProps;
  renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
  rows: DataItemRow[];
  /**
   * 将 formItemProps 映射为表单字段初始值（例如 Slider 将 value 数组归一为单项）
   */
  mapFormValuesFromFormItemProps?: (formItemProps: FormItemProps) => Record<string, unknown>;
};

/**
 * Slider 等：表单「表单项配置」里 value 可能为区间数组，设计器表单中按单值展示
 */
export function mapSliderFormPropertyFormValues(
  formItemProps: FormItemProps,
): Record<string, unknown> {
  const fp = formItemProps as Record<string, unknown> | undefined;
  const value = fp?.value;
  return {
    ...fp,
    value: Array.isArray(value) ? value[0] : value,
  };
}

/**
 * 表单项属性面板公共容器：Form 同步、回写 DesignContext
 */
export function FormPropertyShell({
  formName,
  designValue,
  renderFormItems,
  rows,
  mapFormValuesFromFormItemProps,
}: FormPropertyShellProps) {
  const [form] = Form.useForm();

  const { getActiveFieldId, setFormItemProps } = useContext(DesignContext);

  const { formItemProps } = designValue;

  const activeFieldId = getActiveFieldId();

  function onFieldsChange() {
    setFormItemProps(activeFieldId as string, { ...form.getFieldsValue() });
  }

  useEffect(() => {
    const values = mapFormValuesFromFormItemProps
      ? mapFormValuesFromFormItemProps(formItemProps as FormItemProps)
      : { ...(formItemProps as Record<string, unknown>) };
    form.setFieldsValue(values);
  }, [formItemProps, form, mapFormValuesFromFormItemProps]);

  return (
    <Form name={formName} form={form} onFieldsChange={onFieldsChange}>
      <PropertiesGridLayout
        layout="vertical"
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 1,
            colgroup: ['auto'],
            data: renderFormItems ? renderFormItems(rows) : rows,
          },
        ]}
      />
    </Form>
  );
}
