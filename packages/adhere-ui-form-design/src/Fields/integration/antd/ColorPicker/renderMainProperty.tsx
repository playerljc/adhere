import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, Select } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import { SizeSelectStandardDict, WhetherRadioHorizontalDict } from '../../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

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
      key: 'format',
      require: false,
      label: <Label>format：</Label>,
      value: (
        <Value>
          <Form.Item name="format">
            <Select
              placeholder={Intl.get('please_select')}
              allowClear
              options={[
                { label: 'hex', value: 'hex' },
                { label: 'rgb', value: 'rgb' },
                { label: 'hsb', value: 'hsb' },
              ]}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'defaultFormat',
      require: false,
      label: <Label>defaultFormat：</Label>,
      value: (
        <Value>
          <Form.Item name="defaultFormat">
            <Select
              placeholder={Intl.get('please_select')}
              allowClear
              options={[
                { label: 'hex', value: 'hex' },
                { label: 'rgb', value: 'rgb' },
                { label: 'hsb', value: 'hsb' },
              ]}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'trigger',
      require: false,
      label: <Label>trigger：</Label>,
      value: (
        <Value>
          <Form.Item name="trigger">
            <Select
              placeholder={Intl.get('please_select')}
              allowClear
              options={[
                { label: 'click', value: 'click' },
                { label: 'hover', value: 'hover' },
              ]}
            />
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
            <SizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'showText',
      require: false,
      label: <Label>showText：</Label>,
      value: (
        <Value>
          <Form.Item name="showText">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'disabledAlpha',
      require: false,
      label: <Label>disabledAlpha：</Label>,
      value: (
        <Value>
          <Form.Item name="disabledAlpha">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'disabledFormat',
      require: false,
      label: <Label>disabledFormat：</Label>,
      value: (
        <Value>
          <Form.Item name="disabledFormat">
            <WhetherRadioHorizontalDict />
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
    <Form name="antColorPickerMainProperty" form={form} onFieldsChange={onFieldsChange}>
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
