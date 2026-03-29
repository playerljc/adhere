import React, { type ReactNode, useContext, useEffect } from 'react';
import type { ReactElement } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import { DesignContext } from '../Design/Context';
import { buildFormPropertyFillRow, PropertiesGridLayout } from '../components';
import type { DesignValueProps } from '../types';

export interface CreateMainPropertyOptions {
  /** 表单名称 */
  formName: string;
  /** 默认表单项数组（不包含 fill） */
  getDefaultFormItems: (designValue: DesignValueProps) => DataItemRow[];
  /** 是否自动添加 fill 设置项（默认 true） */
  autoFill?: boolean;
}

export function createMainProperty(options: CreateMainPropertyOptions) {
  const { formName, getDefaultFormItems, autoFill = true } = options;

  return function MainProperty({
    designValue,
    renderFormItems,
  }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
  }): ReactNode {
    const [form] = Form.useForm();
    const { getActiveFieldId, setFieldProps } = useContext(DesignContext);
    const { fieldProps } = designValue;

    // 获取默认表单项
    const baseFormItems = getDefaultFormItems(designValue);

    // 自动添加 fill 设置项
    const defaultFormItems: DataItemRow[] = autoFill
      ? [...baseFormItems, buildFormPropertyFillRow()]
      : baseFormItems;

    function onFieldsChange() {
      const values = form.getFieldsValue();
      setFieldProps(getActiveFieldId() as string, { ...values });
    }

    useEffect(() => {
      form.setFieldsValue(fieldProps);
    }, [fieldProps]);

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
              data: renderFormItems ? renderFormItems(defaultFormItems) : defaultFormItems,
            },
          ]}
        />
      </Form>
    );
  };
}

export function renderMainProperty(
  Component: ReturnType<typeof createMainProperty>,
  props: DesignValueProps,
): ReactNode {
  return <Component designValue={props} />;
}
