import React, { useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { DesignContext } from '../Design/Context';
import type { DesignValueProps, FormItemProps } from '../types';
import { genNewName, typeToNamePrefix } from '../utils';
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

  const { getActiveFieldId, getActiveDesignFieldValue, getDesignValue, setFormItemProps } =
    useContext(DesignContext);

  const { formItemProps } = designValue;

  const activeFieldId = getActiveFieldId();

  function onFieldsChange() {
    setFormItemProps(activeFieldId as string, { ...form.getFieldsValue() });
  }

  function genDefaultName(): string | null {
    const active = getActiveDesignFieldValue?.();
    const type = active?.type;
    if (!type) return null;

    const prefix = typeToNamePrefix(type);

    // 8 位 base36：更贴近 input_373phydm 风格
    const suffix = Math.random().toString(36).slice(2, 10).padEnd(8, '0');
    const base = `${prefix}_${suffix}`;

    const designValue = getDesignValue?.();
    if (!designValue) return base;

    return genNewName(base, designValue);
  }

  useEffect(() => {
    const values = mapFormValuesFromFormItemProps
      ? mapFormValuesFromFormItemProps(formItemProps as FormItemProps)
      : { ...(formItemProps as Record<string, unknown>) };

    // name 默认值：只在缺省时补齐一次
    if (activeFieldId && !values?.name) {
      const generated = genDefaultName();
      if (generated) {
        values.name = generated;
        setFormItemProps(activeFieldId as string, {
          ...(formItemProps as Record<string, unknown>),
          name: generated,
        } as FormItemProps);
      }
    }

    form.setFieldsValue(values);
  }, [
    activeFieldId,
    formItemProps,
    form,
    getActiveDesignFieldValue,
    getDesignValue,
    mapFormValuesFromFormItemProps,
    setFormItemProps,
  ]);

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
