import { Form, Input, InputNumber } from 'antd';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import {
  InputNumberModeSelectStandardDict,
  InputSizeSelectStandardDict,
  ThousandsSelectStandardDict,
  VariantSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../index';

export default function InputNumberSection() {
  return (
    <>
      <Form.Item name="placeholder" label={`${Intl.get('placeholder')}：`}>
        <Input.OptimizedInput
          placeholder={Intl.get('placeholder')}
          maxLength={50}
          showCount={false}
        />
      </Form.Item>

      <Form.Item name="decimalSeparator" label={`${Intl.get('input_number_decimal_separator')}：`}>
        <Input.OptimizedInput
          placeholder={Intl.get('input_number_decimal_separator')}
          maxLength={10}
          showCount={false}
        />
      </Form.Item>

      <Form.Item name="min" label={`${Intl.get('input_number_min')}：`}>
        <InputNumber placeholder={Intl.get('input_number_min')} />
      </Form.Item>

      <Form.Item name="max" label={`${Intl.get('input_number_max')}：`}>
        <InputNumber placeholder={Intl.get('input_number_max')} />
      </Form.Item>

      <Form.Item name="step" label={`${Intl.get('input_number_step')}：`}>
        <InputNumber min={0} placeholder={Intl.get('input_number_step')} />
      </Form.Item>

      <Form.Item name="precision" label={`${Intl.get('input_number_precision')}：`}>
        <InputNumber min={0} precision={0} placeholder={Intl.get('input_number_precision')} />
      </Form.Item>

      <Form.Item name="thousands" label={`${Intl.get('thousands')}：`}>
        <ThousandsSelectStandardDict placeholder={Intl.get('thousands')} />
      </Form.Item>

      <Form.Item name="mode" label={`${Intl.get('input_number_mode')}：`}>
        <InputNumberModeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="stringMode" label={`${Intl.get('input_number_string_mode')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="keyboard" label={`${Intl.get('input_number_keyboard')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="changeOnBlur" label={`${Intl.get('input_number_change_on_blur')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="changeOnWheel" label={`${Intl.get('input_number_change_on_wheel')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="controls" label={`${Intl.get('input_number_controls')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="disabled" label={`${Intl.get('disabled')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="readOnly" label={`${Intl.get('read_only')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="size" label={`${Intl.get('input_size')}：`}>
        <InputSizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="variant" label={`${Intl.get('input_variant')}：`}>
        <VariantSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>
    </>
  );
}
