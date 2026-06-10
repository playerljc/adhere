import React from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Intl from '@baifendian/adhere-util-intl';

import MonacoCSSEditorFormItem from './MonacoCSSEditorFormItem';
import { Label, Value } from './TableGridLayout';

export function buildFieldStylePropertyRows(): DataItemRow[] {
  return [
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
    {
      key: 'labelStyles',
      require: false,
      label: <Label>{Intl.get('label_style')}：</Label>,
      value: (
        <Value>
          <Form.Item name="labelStyles">
            <MonacoCSSEditorFormItem language="css" />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'valueStyles',
      require: false,
      label: <Label>{Intl.get('value_style')}：</Label>,
      value: (
        <Value>
          <Form.Item name="valueStyles">
            <MonacoCSSEditorFormItem language="css" />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'tipStyles',
      require: false,
      label: <Label>{Intl.get('tip_style')}：</Label>,
      value: (
        <Value>
          <Form.Item name="tipStyles">
            <MonacoCSSEditorFormItem language="css" />
          </Form.Item>
        </Value>
      ),
    },
  ];
}
