import React from 'react';
import { Form } from 'antd';

import Intl from '@baifendian/adhere-util-intl';

import {
  ColorPickerFormatSelectStandardDict,
  ColorPickerTriggerSelectStandardDict,
  SizeSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../index';

export default function ColorPickerSection() {
  return (
    <>
      <Form.Item name="disabled" label={`${Intl.get('disabled')}：`}>
        <WhetherRadioHorizontalDict placeholder={Intl.get('disabled')} />
      </Form.Item>

      <Form.Item name="allowClear" label={`${Intl.get('allow_clear')}：`}>
        <WhetherRadioHorizontalDict placeholder={Intl.get('allow_clear')} />
      </Form.Item>

      <Form.Item name="format" label={`${Intl.get('format')}：`}>
        <ColorPickerFormatSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="defaultFormat" label={`${Intl.get('default_format')}：`}>
        <ColorPickerFormatSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="trigger" label={`${Intl.get('trigger')}：`}>
        <ColorPickerTriggerSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="size" label={`${Intl.get('input_size')}：`}>
        <SizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="showText" label={`${Intl.get('show_text')}：`}>
        <WhetherRadioHorizontalDict placeholder={Intl.get('show_text')} />
      </Form.Item>

      <Form.Item name="disabledAlpha" label={`${Intl.get('disabled_alpha')}：`}>
        <WhetherRadioHorizontalDict placeholder={Intl.get('disabled_alpha')} />
      </Form.Item>

      <Form.Item name="disabledFormat" label={`${Intl.get('disabled_format')}：`}>
        <WhetherRadioHorizontalDict placeholder={Intl.get('disabled_format')} />
      </Form.Item>
    </>
  );
}

