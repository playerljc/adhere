import React from 'react';
import { Form, InputNumber } from 'antd';

import Intl from '@baifendian/adhere-util-intl';

import { RateSizeSelectStandardDict, WhetherRadioHorizontalDict } from '../../../index';

export default function RateSection() {
  return (
    <>
      <Form.Item name="allowClear" label={`${Intl.get('rate_allow_clear')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="allowHalf" label={`${Intl.get('rate_allow_half')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="count" label={`${Intl.get('rate_count')}：`}>
        <InputNumber min={1} max={20} precision={0} placeholder={Intl.get('rate_count')} />
      </Form.Item>

      <Form.Item name="disabled" label={`${Intl.get('disabled')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="keyboard" label={`${Intl.get('rate_keyboard')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="size" label={`${Intl.get('rate_size')}：`}>
        <RateSizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>
    </>
  );
}

