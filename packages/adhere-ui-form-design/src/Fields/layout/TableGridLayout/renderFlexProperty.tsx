import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Design/Context';
import { AlignSelfSelectStandardDict, WhetherRadioHorizontalDict } from '../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';

/**
 * FlexProperty
 * @description 控件的属性面板，如果控件是TableGridLayout，那么属性面板就是TableGridLayout的属性面板
 * @param {DesignValueProps} props
 */
export function FlexProperty(props: DesignValueProps) {
  // 表单的instance
  const [form] = Form.useForm();

  const {
    // 获取当前激活的控件的id(也就是Editor中选中的控件)
    getActiveFieldId,
    // 设置控件的属性
    setFlexProps,
  } = useContext(DesignContext);

  // 控件的数据
  const { flexProps } = props;

  function onFieldsChange() {
    const values = form.getFieldsValue();

    setFlexProps(getActiveFieldId() as string, values);
  }

  useEffect(() => {
    // 设置控件的数据到表单
    form.setFieldsValue(flexProps);
  }, [flexProps]);

  return (
    <Form name="tableGridLayoutFlexProperty" form={form} onFieldsChange={onFieldsChange}>
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
                key: 'flex',
                require: false,
                label: <Label>{Intl.get('flex_grow')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="flex">
                      <InputNumberInteger.InputPositiveNumberInteger
                        max={50}
                        min={0}
                        placeholder={Intl.get('flex_grow')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'flexShrink',
                require: false,
                label: <Label>{Intl.get('flex_shrink')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="flexShrink">
                      <InputNumberInteger.InputPositiveNumberInteger
                        max={50}
                        min={0}
                        placeholder={Intl.get('flex_shrink')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'flexBasis',
                require: false,
                label: <Label>{Intl.get('flex_basis')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="flexBasis">
                      <Input.OptimizedInput
                        showCount={false}
                        placeholder={Intl.get('flex_basis')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'alignSelf',
                require: false,
                label: <Label>{Intl.get('align_self')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="alignSelf">
                      <AlignSelfSelectStandardDict placeholder={Intl.get('align_self')} />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'order',
                require: false,
                label: <Label>{Intl.get('order')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="order">
                      <InputNumberInteger max={1000} min={1} placeholder={Intl.get('order')} />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'minSize',
                require: false,
                label: <Label>{Intl.get('min_size')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="minSize">
                      <WhetherRadioHorizontalDict placeholder={Intl.get('min_size')} />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'scroll',
                require: false,
                label: <Label>{Intl.get('scroll')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="scroll">
                      <WhetherRadioHorizontalDict placeholder={Intl.get('scroll')} />
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
 * renderFlexProperty
 * @param {DesignValueProps} props
 * @return ReactElement
 */
export function renderFlexProperty(props: DesignValueProps): ReactNode {
  return <FlexProperty {...props} />;
}
