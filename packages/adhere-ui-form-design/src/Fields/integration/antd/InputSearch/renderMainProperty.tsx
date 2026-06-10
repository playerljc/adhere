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
 * MainProperty - extends Input with Search-specific: loading (boolean only)
 */
const MainProperty = createMainProperty({
  formName: 'antInputSearchMainProperty',
  getDefaultFormItems: (_designValue, ctx): DataItemRow[] => [
    buildFormPropertyPlaceholderRow(ctx.titleLabelSlot),
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
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'loading',
      require: false,
      label: <Label>{Intl.get('search_loading')}：</Label>,
      value: (
        <Value>
          <Form.Item name="loading">
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
