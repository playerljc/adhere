import React from 'react';
import { Form, Input, InputNumber } from 'antd';

import Intl from '@baifendian/adhere-util-intl';

import { VariantSelectStandardDict, WhetherRadioHorizontalDict } from '../../../index';

export default function TextAreaSection() {
  return (
    <>
      <Form.Item name="placeholder" label={`${Intl.get('placeholder')}：`}>
        <Input placeholder={Intl.get('placeholder')} maxLength={50} />
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

      <Form.Item name="autoSize" label={`${Intl.get('textarea_auto_size')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="variant" label={`${Intl.get('input_variant')}：`}>
        <VariantSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>
    </>
  );
}

