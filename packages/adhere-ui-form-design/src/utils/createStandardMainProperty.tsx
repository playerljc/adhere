import React, { useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import { DesignContext } from '../Design/Context';
import PropertiesGridLayout from '../components/TableGridLayout';
import type { DesignValueProps } from '../types';

export function createStandardMainProperty({
  formName,
  buildRows,
}: {
  formName: string;
  buildRows: (props: { designValue: DesignValueProps }) => DataItemRow[];
}) {
  function MainProperty({
    designValue,
    renderFormItems,
  }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
  }) {
    const [form] = Form.useForm();
    const { getActiveFieldId, setFieldProps } = useContext(DesignContext);
    const { fieldProps } = designValue;

    const defaultFormItems = buildRows({ designValue });

    function onFieldsChange() {
      setFieldProps(getActiveFieldId() as string, { ...form.getFieldsValue() });
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
  }

  return MainProperty;
}

