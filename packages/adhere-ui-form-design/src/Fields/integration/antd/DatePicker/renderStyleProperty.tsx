import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import { MonacoCSSEditorFormItem } from '../../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
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
    <Form name="antDatePickerStyleProperty" form={form} onFieldsChange={onFieldsChange}>
      <PropertiesGridLayout
        layout="vertical"
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 1,
            colgroup: ['auto'],
            data: [
              {
                key: 'styles',
                require: false,
                label: <Label>{Intl.get('style')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="styles">
                      <MonacoCSSEditorFormItem language="css" />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'labelStyles',
                require: false,
                label: <Label>{Intl.get('label_style')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="labelStyles">
                      <MonacoCSSEditorFormItem language="css" />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'valueStyles',
                require: false,
                label: <Label>{Intl.get('value_style')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="valueStyles">
                      <MonacoCSSEditorFormItem language="css" />
                    </Form.Item>
                  </Value>
                ),
              },
            ],
          },
        ]}
      />
    </Form>
  );
}

export function renderStyleProperty(props: DesignValueProps): ReactNode {
  return <StyleProperty {...props} />;
}
