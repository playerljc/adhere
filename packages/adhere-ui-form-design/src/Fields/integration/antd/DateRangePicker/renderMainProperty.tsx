import React, { type ReactNode, useContext, useEffect } from 'react';

import { Form, Input, Select } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import {
  PlacementSelectStandardDict,
  SizeSelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
  buildFormPropertyFillRow,
} from '../../../../components';
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
      key: 'format',
      require: false,
      label: <Label>{Intl.get('date_format')}：</Label>,
      value: (
        <Value>
          <Form.Item name="format">
            <Input.OptimizedInput showCount={false} placeholder={Intl.get('date_format')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'allowEmpty',
      require: false,
      label: <Label>{Intl.get('allow_clear')}（start）：</Label>,
      value: (
        <Value>
          <Form.Item name={['allowEmpty', 0]} label="">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'allowEmptyEnd',
      require: false,
      label: <Label>{Intl.get('allow_clear')}（end）：</Label>,
      value: (
        <Value>
          <Form.Item name={['allowEmpty', 1]} label="">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'placeholder',
      require: false,
      label: <Label>{Intl.get('placeholder')}：</Label>,
      value: (
        <Value>
          <Form.Item name="placeholder">
            <Input.OptimizedInput showCount={false} placeholder={Intl.get('placeholder')} />
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
      key: 'status',
      require: false,
      label: <Label>{Intl.get('input_status')}：</Label>,
      value: (
        <Value>
          <Form.Item name="status">
            <VerificationStatusSelectStandardDict
              placeholder={Intl.get('please_select')}
              allowClear
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'variant',
      require: false,
      label: <Label>{Intl.get('input_variant')}：</Label>,
      value: (
        <Value>
          <Form.Item name="variant">
            <VariantSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'placement',
      require: false,
      label: <Label>{Intl.get('placement')}：</Label>,
      value: (
        <Value>
          <Form.Item name="placement">
            <PlacementSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'showTime',
      require: false,
      label: <Label>{Intl.get('show_time')}：</Label>,
      value: (
        <Value>
          <Form.Item name="showTime">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'needConfirm',
      require: false,
      label: <Label>{Intl.get('need_confirm')}：</Label>,
      value: (
        <Value>
          <Form.Item name="needConfirm">
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
    buildFormPropertyFillRow(),
  ];

  function onFieldsChange() {
    setFieldProps(getActiveFieldId() as string, { ...form.getFieldsValue() });
  }

  useEffect(() => {
    form.setFieldsValue(fieldProps);
  }, [fieldProps]);

  return (
    <Form name="antDateRangePickerMainProperty" form={form} onFieldsChange={onFieldsChange}>
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
