import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';

import { DesignContext } from '../../../../Design/Context';
import { buildFieldStylePropertyRows } from '../../../../components/FieldStylePropertyRows';
import PropertiesGridLayout from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

function StyleProperty(props: DesignValueProps) {
  const [form] = Form.useForm();
  const { getActiveFieldId, setStyleProps } = useContext(DesignContext);
  const { styleProps } = props;

  function onFieldsChange() {
    setStyleProps(getActiveFieldId() as string, { ...form.getFieldsValue() });
  }

  useEffect(() => {
    form.setFieldsValue(styleProps);
  }, [styleProps]);

  return (
    <Form name="antTimeRangePickerStyleProperty" form={form} onFieldsChange={onFieldsChange}>
      <PropertiesGridLayout
        layout="vertical"
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 1,
            colgroup: ['auto'],
            data: buildFieldStylePropertyRows(),
          },
        ]}
      />
    </Form>
  );
}

export function renderStyleProperty(props: DesignValueProps): ReactNode {
  return <StyleProperty {...props} />;
}
