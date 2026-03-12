import React, { type ReactNode, useContext, useEffect, useMemo } from 'react';

import { Form, Input, Select } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import {
  PickerSelectStandardDict,
  PlacementSelectStandardDict,
  SizeSelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import PropertiesGridLayout, { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';

/**
 * MainProperty - DatePicker basic props per antd DatePicker API.
 * Basic only: format, picker, showTime, allowClear, isBirthday, dateBoundMode, dateBoundBaseValue, dateBoundIncludeBase
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

  const pickerValue = Form.useWatch('picker', form) as string | undefined;

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
            <Input placeholder={Intl.get('date_format')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'picker',
      require: false,
      label: <Label>{Intl.get('please_select')}（picker）：</Label>,
      value: (
        <Value>
          <Form.Item name="picker">
            <PickerSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
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
            <Input placeholder={Intl.get('placeholder')} />
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
    ...(['year', 'quarter', 'month'].includes(pickerValue ?? '')
      ? ([
          {
            key: 'multiple',
            require: false,
            label: <Label>{Intl.get('multiple')}：</Label>,
            value: (
              <Value>
                <Form.Item name="multiple">
                  <WhetherRadioHorizontalDict />
                </Form.Item>
              </Value>
            ),
          },
        ] as DataItemRow[])
      : []),
    ...(pickerValue === 'week'
      ? ([
          {
            key: 'showWeek',
            require: false,
            label: <Label>{Intl.get('show_week')}：</Label>,
            value: (
              <Value>
                <Form.Item name="showWeek">
                  <WhetherRadioHorizontalDict />
                </Form.Item>
              </Value>
            ),
          },
        ] as DataItemRow[])
      : []),
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
      key: 'isBirthday',
      require: false,
      label: <Label>{Intl.get('is_birthday')}：</Label>,
      value: (
        <Value>
          <Form.Item name="isBirthday">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'dateBoundMode',
      require: false,
      label: <Label>{Intl.get('date_bound_mode')}：</Label>,
      value: (
        <Value>
          <Form.Item name="dateBoundMode">
            <Select
              placeholder={Intl.get('please_select')}
              allowClear
              options={[
                { label: Intl.get('none'), value: 'none' },
                { label: 'before', value: 'before' },
                { label: 'after', value: 'after' },
              ]}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'dateBoundBaseValue',
      require: false,
      label: <Label>{Intl.get('date_bound_base_value')}：</Label>,
      value: (
        <Value>
          <Form.Item name="dateBoundBaseValue">
            <Input placeholder={Intl.get('date_bound_base_value')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'dateBoundIncludeBase',
      require: false,
      label: <Label>{Intl.get('date_bound_include_base')}：</Label>,
      value: (
        <Value>
          <Form.Item name="dateBoundIncludeBase">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
  ];

  const finalFormItems = useMemo(() => {
    return renderFormItems ? renderFormItems(defaultFormItems) : defaultFormItems;
  }, [defaultFormItems, renderFormItems]);

  function onFieldsChange() {
    setFieldProps(getActiveFieldId() as string, { ...form.getFieldsValue() });
  }

  useEffect(() => {
    form.setFieldsValue(fieldProps);
  }, [fieldProps]);

  return (
    <Form name="antDatePickerMainProperty" form={form} onFieldsChange={onFieldsChange}>
      <PropertiesGridLayout
        layout="vertical"
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 1,
            colgroup: ['auto'],
            data: finalFormItems,
          },
        ]}
      />
    </Form>
  );
}

export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}
