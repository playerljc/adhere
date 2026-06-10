import React from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  buildFormPropertyPlaceholderRow,
  buildFormPropertyTipRow,
  InputNumberModeSelectStandardDict,
  InputSizeSelectStandardDict,
  ThousandsSelectStandardDict,
  VariantSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

/**
 * MainProperty - InputNumber basic props per Ant Design InputNumber API
 * @see https://ant.design/components/input-number-cn#api
 * Basic types only: placeholder, decimalSeparator, min, max, step, precision,
 * mode, stringMode, keyboard, changeOnBlur, changeOnWheel, controls, disabled,
 * readOnly, size, variant, status.
 */
const MainProperty = createMainProperty({
  formName: 'antInputNumberMainProperty',
  getDefaultFormItems: (_designValue, ctx): DataItemRow[] => [
    buildFormPropertyPlaceholderRow(ctx.titleLabelSlot),
    {
      key: 'decimalSeparator',
      require: false,
      label: <Label>{Intl.get('input_number_decimal_separator')}：</Label>,
      value: (
        <Value>
          <Form.Item name="decimalSeparator">
            <Input.OptimizedInput
              showCount={false}
              placeholder={Intl.get('input_number_decimal_separator')}
              maxLength={10}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'min',
      require: false,
      label: <Label>{Intl.get('input_number_min')}：</Label>,
      value: (
        <Value>
          <Form.Item name="min">
            <InputNumberInteger placeholder={Intl.get('input_number_min')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'max',
      require: false,
      label: <Label>{Intl.get('input_number_max')}：</Label>,
      value: (
        <Value>
          <Form.Item name="max">
            <InputNumberInteger placeholder={Intl.get('input_number_max')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'step',
      require: false,
      label: <Label>{Intl.get('input_number_step')}：</Label>,
      value: (
        <Value>
          <Form.Item name="step">
            <InputNumberInteger.InputPositiveNumberInteger
              placeholder={Intl.get('input_number_step')}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'precision',
      require: false,
      label: <Label>{Intl.get('input_number_precision')}：</Label>,
      value: (
        <Value>
          <Form.Item name="precision">
            <InputNumberInteger.InputPositiveNumberInteger
              placeholder={Intl.get('input_number_precision')}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'thousands',
      require: false,
      label: <Label>{Intl.get('thousands')}：</Label>,
      value: (
        <Value>
          <Form.Item name="thousands">
            <ThousandsSelectStandardDict placeholder={Intl.get('thousands')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'mode',
      require: false,
      label: <Label>{Intl.get('input_number_mode')}：</Label>,
      value: (
        <Value>
          <Form.Item name="mode">
            <InputNumberModeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'stringMode',
      require: false,
      label: <Label>{Intl.get('input_number_string_mode')}：</Label>,
      value: (
        <Value>
          <Form.Item name="stringMode">
            <WhetherRadioHorizontalDict placeholder={Intl.get('input_number_string_mode')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'keyboard',
      require: false,
      label: <Label>{Intl.get('input_number_keyboard')}：</Label>,
      value: (
        <Value>
          <Form.Item name="keyboard">
            <WhetherRadioHorizontalDict placeholder={Intl.get('input_number_keyboard')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'changeOnBlur',
      require: false,
      label: <Label>{Intl.get('input_number_change_on_blur')}：</Label>,
      value: (
        <Value>
          <Form.Item name="changeOnBlur">
            <WhetherRadioHorizontalDict placeholder={Intl.get('input_number_change_on_blur')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'changeOnWheel',
      require: false,
      label: <Label>{Intl.get('input_number_change_on_wheel')}：</Label>,
      value: (
        <Value>
          <Form.Item name="changeOnWheel">
            <WhetherRadioHorizontalDict placeholder={Intl.get('input_number_change_on_wheel')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'controls',
      require: false,
      label: <Label>{Intl.get('input_number_controls')}：</Label>,
      value: (
        <Value>
          <Form.Item name="controls">
            <WhetherRadioHorizontalDict placeholder={Intl.get('input_number_controls')} />
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
