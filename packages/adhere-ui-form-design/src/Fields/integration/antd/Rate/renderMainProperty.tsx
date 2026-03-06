import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, InputNumberInteger, Select } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import { WhetherRadioHorizontalDict } from '../../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

/**
 * MainProperty - Rate basic props per https://ant.design/components/rate-cn#api
 * Basic only: allowClear, allowHalf, count, disabled, keyboard, size (small | middle)
 */
export function MainProperty({
  designValue,
  renderFormItems,
}: {
  designValue: DesignValueProps;
  renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}) {
  const [form] = Form.useForm();
  const { getActiveFieldId, setFieldProps } = useContext(DesignContext);
  const { fieldProps } = designValue;

  const defaultFormItems: DataItemRow[] = [
    {
      key: 'allowClear',
      require: false,
      label: <Label>{Intl.get('rate_allow_clear')}：</Label>,
      value: (
        <Value>
          <Form.Item name="allowClear">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'allowHalf',
      require: false,
      label: <Label>{Intl.get('rate_allow_half')}：</Label>,
      value: (
        <Value>
          <Form.Item name="allowHalf">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'count',
      require: false,
      label: <Label>{Intl.get('rate_count')}：</Label>,
      value: (
        <Value>
          <Form.Item name="count">
            <InputNumberInteger.InputPositiveNumberInteger
              placeholder={Intl.get('rate_count')}
              min={1}
              max={20}
            />
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
      key: 'keyboard',
      require: false,
      label: <Label>{Intl.get('rate_keyboard')}：</Label>,
      value: (
        <Value>
          <Form.Item name="keyboard">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'size',
      require: false,
      label: <Label>{Intl.get('rate_size')}：</Label>,
      value: (
        <Value>
          <Form.Item name="size">
            <Select
              placeholder={Intl.get('please_select')}
              allowClear
              options={[
                { label: 'small', value: 'small' },
                { label: 'middle', value: 'middle' },
              ]}
            />
          </Form.Item>
        </Value>
      ),
    },
  ];

  function onFieldsChange() {
    setFieldProps(getActiveFieldId() as string, { ...form.getFieldsValue() });
  }
  useEffect(() => {
    form.setFieldsValue(fieldProps);
  }, [fieldProps]);

  return (
    <Form name="antRateMainProperty" form={form} onFieldsChange={onFieldsChange}>
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

export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}
