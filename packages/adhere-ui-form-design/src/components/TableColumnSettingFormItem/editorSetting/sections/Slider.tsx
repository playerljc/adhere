import { Form, InputNumber } from 'antd';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { DirectionSelectStandardDict, WhetherRadioHorizontalDict } from '../../../index';

export default function SliderSection() {
  return (
    <>
      <Form.Item name="disabled" label={`${Intl.get('disabled')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="keyboard" label={`${Intl.get('slider_keyboard')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="min" label={`${Intl.get('slider_min')}：`}>
        <InputNumber placeholder={Intl.get('slider_min')} />
      </Form.Item>

      <Form.Item name="max" label={`${Intl.get('slider_max')}：`}>
        <InputNumber placeholder={Intl.get('slider_max')} />
      </Form.Item>

      <Form.Item name="step" label={`${Intl.get('slider_step')}：`}>
        <InputNumber min={1} placeholder={Intl.get('slider_step')} />
      </Form.Item>

      <Form.Item name="orientation" label={`${Intl.get('slider_orientation')}：`}>
        <DirectionSelectStandardDict allowClear placeholder={Intl.get('please_select')} />
      </Form.Item>

      <Form.Item name="reverse" label={`${Intl.get('slider_reverse')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="dots" label={`${Intl.get('slider_dots')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="included" label={`${Intl.get('slider_included')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="range" label={`${Intl.get('slider_range')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>
    </>
  );
}
