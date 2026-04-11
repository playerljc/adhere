import { Form, Input, InputNumber } from 'antd';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import {
  InputSizeSelectStandardDict,
  InputTypeSelectStandardDict,
  VariantSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../index';

export default function InputSection() {
  return (
    <>
      <Form.Item name="type" label={`${Intl.get('type')}：`}>
        <InputTypeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="placeholder" label={`${Intl.get('placeholder')}：`}>
        <Input.OptimizedInput
          placeholder={Intl.get('placeholder')}
          maxLength={50}
          showCount={false}
        />
      </Form.Item>

      <Form.Item name="allowClear" label={`${Intl.get('allow_clear')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="readOnly" label={`${Intl.get('read_only')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="disabled" label={`${Intl.get('disabled')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="maxLength" label={`${Intl.get('max_length')}：`}>
        <InputNumber min={0} precision={0} placeholder={Intl.get('max_length')} />
      </Form.Item>

      <Form.Item name="showCount" label={`${Intl.get('show_count')}：`}>
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
