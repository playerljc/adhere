import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';

import { DesignContext } from '../../../../Design/Context';
import { buildFieldStylePropertyRows } from '../../../../components/FieldStylePropertyRows';
import PropertiesGridLayout from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

/**
 * StyleProperty
 *
 * @description
 * 现在样式的设置用的是完全使用@monaco-editor来实现
 * 也就是说都需要在编辑器中手写css代码的方式实现
 *
 * @param {DesignValueProps} props
 */
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
    <Form name="antInputStyleProperty" form={form} onFieldsChange={onFieldsChange}>
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
