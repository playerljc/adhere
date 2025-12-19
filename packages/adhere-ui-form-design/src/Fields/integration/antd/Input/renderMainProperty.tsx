import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import {
  InputSizeSelectStandardDict,
  InputTypeSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

/**
 * MainProperty
 * @description 控件的属性面板，如果控件是TableGridLayout，那么属性面板就是TableGridLayout的属性面板
 * @param {DesignValueProps} props
 */
function MainProperty(props: DesignValueProps) {
  // 表单的instance
  const [form] = Form.useForm();

  const {
    // 获取当前激活的控件的id(也就是Editor中选中的控件)
    getActiveFieldId,
    // 设置控件的属性
    setFieldProps,
  } = useContext(DesignContext);

  // 控件的数据
  const { fieldProps } = props;

  function onFieldsChange() {
    const values = form.getFieldsValue();

    setFieldProps(getActiveFieldId() as string, {
      ...values,
    });
  }

  useEffect(() => {
    form.setFieldsValue(fieldProps);
  }, [fieldProps]);

  return (
    <Form name="antInputMainProperty" form={form} onFieldsChange={onFieldsChange}>
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
                key: 'type',
                require: false,
                label: <Label>{Intl.get('type')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="type">
                      <InputTypeSelectStandardDict />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'allowClear',
                require: false,
                label: <Label>{Intl.get('allow_clear')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="allowClear">
                      <WhetherRadioHorizontalDict />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'readOnly',
                require: false,
                label: <Label>{Intl.get('read_only')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="readOnly">
                      <WhetherRadioHorizontalDict />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'disabled',
                require: false,
                label: <Label>{Intl.get('disabled')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="disabled">
                      <WhetherRadioHorizontalDict />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'maxLength',
                require: false,
                label: <Label>{Intl.get('max_length')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="maxLength">
                      <InputNumberInteger.InputPositiveNumberInteger
                        placeholder={Intl.get('max_length')}
                      />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'showCount',
                require: false,
                label: <Label>{Intl.get('show_count')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="showCount">
                      <WhetherRadioHorizontalDict />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'size',
                require: false,
                label: <Label>{Intl.get('input_size')}：</Label>,
                value: (
                  <Value>
                    <Form.Item name="size">
                      <InputSizeSelectStandardDict />
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
 * renderMainProperty
 * @param {DesignValueProps} props
 * @return ReactElement
 */
export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty {...props} />;
}
