import React from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  DataSourceManagerFormItem,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps, FieldProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

type CheckboxGroupFieldProps = FieldProps & {
  optionWrap?: boolean;
  columnCount?: number;
};

function normalizeLayoutProps(values: CheckboxGroupFieldProps): CheckboxGroupFieldProps {
  const next = { ...values };
  if (next.optionWrap) {
    next.columnCount = undefined;
  } else if (next.columnCount != null && Number(next.columnCount) > 0) {
    next.optionWrap = false;
  }
  return next;
}

const MainProperty = createMainProperty({
  formName: 'antCheckboxGroupMainProperty',
  getDefaultFormItems: (): DataItemRow[] => [
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
  ],
  autoFill: true,
  payloadToValues: (fieldProps) => normalizeLayoutProps(fieldProps as CheckboxGroupFieldProps),
  onFieldsChange: ({ form, getActiveFieldId, setFieldProps, valuesToPayload }) => {
    const raw = valuesToPayload(form.getFieldsValue()) as CheckboxGroupFieldProps;
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
