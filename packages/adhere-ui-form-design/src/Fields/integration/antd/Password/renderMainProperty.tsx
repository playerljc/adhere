import React from 'react';

import { Form, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  buildFormPropertyPlaceholderRow,
  buildFormPropertyTipRow,
  InputSizeSelectStandardDict,
  VariantSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

/**
 * MainProperty - extends Input with Password-specific: visibilityToggle (boolean only)
 */
const MainProperty = createMainProperty({
  formName: 'antPasswordMainProperty',
  getDefaultFormItems: (_designValue, ctx): DataItemRow[] => [
    buildFormPropertyPlaceholderRow(ctx.titleLabelSlot),
    {
      key: 'allowClear',
      require: false,
      label: <Label>{Intl.get('allow_clear')}：</Label>,
      value: (
        <Value>
          <Form.Item name="allowClear">
            <WhetherRadioHorizontalDict placeholder={Intl.get('allow_clear')} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('read_only')} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('disabled')} />
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
            <InputNumberInteger.InputPositiveNumberInteger placeholder={Intl.get('max_length')} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('show_count')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'visibilityToggle',
      require: false,
      label: <Label>{Intl.get('password_visibility_toggle')}：</Label>,
      value: (
        <Value>
          <Form.Item name="visibilityToggle">
            <WhetherRadioHorizontalDict placeholder={Intl.get('password_visibility_toggle')} />
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
            <InputSizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
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
    buildFormPropertyTipRow(ctx.titleLabelSlot),
  ],
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
