import React from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import {
  PlacementSelectStandardDict,
  SizeSelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../index';
import EditorSettingPlaceholderFormItem from '../EditorSettingPlaceholderFormItem';

export default function RangePickerSection() {
  return (
    <>
      <Form.Item name="disabled" label={`${Intl.get('disabled')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="format" label={`${Intl.get('date_format')}：`}>
        <Input.OptimizedInput placeholder={Intl.get('date_format')} showCount={false} />
      </Form.Item>

      <Form.Item name={['allowEmpty', 0]} label={`${Intl.get('allow_clear')}（start）：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name={['allowEmpty', 1]} label={`${Intl.get('allow_clear')}（end）：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <EditorSettingPlaceholderFormItem />

      <Form.Item name="size" label={`${Intl.get('input_size')}：`}>
        <SizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="status" label={`${Intl.get('input_status')}：`}>
        <VerificationStatusSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="variant" label={`${Intl.get('input_variant')}：`}>
        <VariantSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="placement" label={`${Intl.get('placement')}：`}>
        <PlacementSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="showTime" label={`${Intl.get('show_time')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="needConfirm" label={`${Intl.get('need_confirm')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="allowClear" label={`${Intl.get('allow_clear')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>
    </>
  );
}
