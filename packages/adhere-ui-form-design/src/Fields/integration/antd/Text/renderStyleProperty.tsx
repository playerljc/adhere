import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import { MonacoCSSEditorFormItem } from '../../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
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
  // 表单的instance
  const [form] = Form.useForm();

  const {
    // 获取当前激活的控件的id(也就是Editor中选中的控件)
    getActiveFieldId,
    // 设置控件的属性
    setStyleProps,
  } = useContext(DesignContext);

  const { styleProps } = props;

  function onFieldsChange() {
    const values = form.getFieldsValue();

    setStyleProps(getActiveFieldId() as string, {
      ...values,
    });
  }

  useEffect(() => {
    // 设置控件的数据到表单
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
            ],
          },
        ]}
      />
    </Form>
  );
}
/**
 * renderStyleProperty
 * @description 我觉得直接写代码就行，不需要那么多的可视化设置
 * @param props
 */
export function renderStyleProperty(props: DesignValueProps): ReactNode {
  return <StyleProperty {...props} />;
}
