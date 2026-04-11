import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Design/Context';
import { MonacoCSSEditorFormItem } from '../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';

/**
 * StyleProperty
 * @param {DesignValueProps} props
 */
export function StyleProperty(props: DesignValueProps) {
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
  }, [styleProps, form]);

  return (
    <Form name="layoutStepsStyleProperty" form={form} onFieldsChange={onFieldsChange}>
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
                key: 'headerStyles',
                require: false,
                label: <Label>{Intl.get('header_style')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="headerStyles">
                      <MonacoCSSEditorFormItem language="css" />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'bodyStyles',
                require: false,
                label: <Label>{Intl.get('body_style')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="bodyStyles">
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

/**
 * renderStyleProperty
 * @param props
 */
export function renderStyleProperty(props: DesignValueProps): ReactNode {
  return <StyleProperty {...props} />;
}
