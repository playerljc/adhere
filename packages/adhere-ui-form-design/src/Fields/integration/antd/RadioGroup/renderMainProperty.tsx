import React from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  DataSourceManagerFormItem,
  RadioGroupButtonStyleSelectStandardDict,
  RadioGroupOptionTypeSelectStandardDict,
  SizeSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps, FieldProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

type RadioGroupFieldProps = FieldProps & {
  optionWrap?: boolean;
  columnCount?: number;
  optionType?: 'default' | 'button';
  buttonStyle?: 'outline' | 'solid';
};

function normalizeLayoutProps(values: RadioGroupFieldProps): RadioGroupFieldProps {
  const next = { ...values };
  if (next.optionWrap) {
    next.columnCount = undefined;
  } else if (next.columnCount != null && Number(next.columnCount) > 0) {
    next.optionWrap = false;
  }
  return next;
}

const MainProperty = createMainProperty({
  formName: 'antRadioGroupMainProperty',
  getDefaultFormItems: (designValue, ctx): DataItemRow[] => {
    const fieldProps = designValue.fieldProps as RadioGroupFieldProps;
    const optionType = ctx.watchValues?.optionType ?? fieldProps.optionType ?? 'default';

    const defaultFormItems: (DataItemRow | boolean)[] = [
    {
      key: 'disabled',
      require: false,
      label: <Label>{Intl.get('disabled')}：</Label>,
      value: (
        <Value>
          <Form.Item name="disabled">
            <WhetherRadioHorizontalDict placeholder={Intl.get('disabled')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'name',
      require: false,
      label: <Label>{Intl.get('name')}：</Label>,
      value: (
        <Value>
          <Form.Item name="name">
            <Input.OptimizedInput
              showCount={false}
              placeholder={Intl.get('name')}
              maxLength={200}
              allowClear
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'optionType',
      require: false,
      label: <Label>{Intl.get('radio_group_option_type')}：</Label>,
      value: (
        <Value>
          <Form.Item name="optionType">
            <RadioGroupOptionTypeSelectStandardDict
              allowClear={false}
              placeholder={Intl.get('radio_group_option_type')}
            />
          </Form.Item>
        </Value>
      ),
    },
    optionType === 'button' && {
      key: 'buttonStyle',
      require: false,
      label: <Label>{Intl.get('radio_group_button_style')}：</Label>,
      value: (
        <Value>
          <Form.Item name="buttonStyle">
            <RadioGroupButtonStyleSelectStandardDict
              allowClear={false}
              placeholder={Intl.get('radio_group_button_style')}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'block',
      require: false,
      label: <Label>{Intl.get('button_block')}：</Label>,
      value: (
        <Value>
          <Form.Item name="block">
            <WhetherRadioHorizontalDict placeholder={Intl.get('button_block')} />
          </Form.Item>
        </Value>
      ),
    },
    optionType === 'button' && {
      key: 'size',
      require: false,
      label: <Label>{Intl.get('button_size')}：</Label>,
      value: (
        <Value>
          <Form.Item name="size">
            <SizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'optionWrap',
      require: false,
      label: <Label>{Intl.get('whether_option_wrap')}：</Label>,
      value: (
        <Value>
          <Form.Item name="optionWrap">
            <WhetherRadioHorizontalDict placeholder={Intl.get('whether_option_wrap')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'columnCount',
      require: false,
      label: <Label>{Intl.get('column_count')}：</Label>,
      value: (
        <Value>
          <Form.Item name="columnCount">
            <InputNumberInteger.InputPositiveNumberInteger
              min={1}
              max={24}
              placeholder={Intl.get('column_count')}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'selectOptions',
      require: false,
      label: <Label>{Intl.get('select_options')}：</Label>,
      value: (
        <Value>
          <Form.Item name="selectOptions">
            <DataSourceManagerFormItem />
          </Form.Item>
        </Value>
      ),
    },
    ].filter(Boolean);

    return defaultFormItems as DataItemRow[];
  },
  autoFill: true,
  payloadToValues: (fieldProps) => normalizeLayoutProps(fieldProps as RadioGroupFieldProps),
  onFieldsChange: ({ form, getActiveFieldId, setFieldProps, valuesToPayload }) => {
    const raw = valuesToPayload(form.getFieldsValue()) as RadioGroupFieldProps;
    const next = normalizeLayoutProps(raw);
    if (next.columnCount !== raw.columnCount || next.optionWrap !== raw.optionWrap) {
      form.setFieldsValue(next);
    }
    setFieldProps(getActiveFieldId() as string, next);
  },
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
