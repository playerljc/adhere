import merge from 'lodash.merge';
import React, { useContext, useEffect, useMemo } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import { DesignContext } from '../Design/Context';
import { buildFormPropertyFillRow, PropertiesGridLayout } from '../components';
import type { DesignValueProps, FieldProps } from '../types';

export function createStandardMainProperty({
  formName,
  buildRows,
  autoFill = true,
}: {
  formName: string;
  buildRows: (props: { designValue: DesignValueProps }) => DataItemRow[];
  autoFill?: boolean;
}) {
  function MainProperty({
    designValue,
    renderFormItems,
  }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
  }) {
    const [form] = Form.useForm();
    const { getActiveFieldId, setFieldProps, getTerminal } = useContext(DesignContext);
    const { fieldProps, fieldPropsByTerminal } = designValue;
    const terminal = getTerminal();

    /** 移动端编辑写入 overlay，面板表单需展示基线 + mobile 合并结果，否则 useEffect 会用旧基线覆盖输入 */
    const displayFieldProps = useMemo((): FieldProps => {
      if (terminal !== 'mobile') {
        return fieldProps;
      }
      return merge({}, fieldProps, fieldPropsByTerminal?.mobile ?? {}) as FieldProps;
    }, [terminal, fieldProps, fieldPropsByTerminal?.mobile]);

    const baseFormItems = buildRows({ designValue });
    const defaultFormItems = autoFill ? [...baseFormItems, buildFormPropertyFillRow()] : baseFormItems;

    function onFieldsChange() {
      setFieldProps(getActiveFieldId() as string, { ...form.getFieldsValue() });
    }

    useEffect(() => {
      form.setFieldsValue(displayFieldProps);
    }, [displayFieldProps, form]);

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
  }

  return MainProperty;
}
