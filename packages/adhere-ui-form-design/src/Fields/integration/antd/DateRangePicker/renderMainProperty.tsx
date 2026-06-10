import React from 'react';

import { Form, Input, Select } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  buildFormPropertyPlaceholderRow,
  buildFormPropertyTipRow,
  PlacementSelectStandardDict,
  SizeSelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

const MainProperty = createMainProperty({
  formName: 'antDateRangePickerMainProperty',
  getDefaultFormItems: (_designValue, ctx): DataItemRow[] => [
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('allow_clear')} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('allow_clear')} />
          </Form.Item>
        </Value>
      ),
    },
    buildFormPropertyPlaceholderRow(ctx.titleLabelSlot),
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('show_time')} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('need_confirm')} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('allow_clear')} />
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
