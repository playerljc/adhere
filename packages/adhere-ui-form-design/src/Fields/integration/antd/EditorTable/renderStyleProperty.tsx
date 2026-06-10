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
    const values = form.getFieldsValue();

    setStyleProps(getActiveFieldId() as string, {
      ...values,
    });
  }

  useEffect(() => {
    form.setFieldsValue(styleProps);
  }, [styleProps]);

  return (
    <Form name="antEditorTableStyleProperty" form={form} onFieldsChange={onFieldsChange}>
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
      ></PropertiesGridLayout>
    </Form>
  );
}

export function renderStyleProperty(props: DesignValueProps): ReactNode {
  return <StyleProperty {...props} />;
}
