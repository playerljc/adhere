import React from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import {
  PlacementSelectStandardDict,
  SizeSelectStandardDict,
  TimeHourStepSelectStandardDict,
  TimeMinuteSecondStepSelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../index';
import EditorSettingPlaceholderFormItem from '../EditorSettingPlaceholderFormItem';

export default function TimePickerSection() {
  return (
    <>
      <Form.Item name="disabled" label={`${Intl.get('disabled')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="format" label={`${Intl.get('date_format')}：`}>
        <Input.OptimizedInput placeholder="HH:mm:ss" showCount={false} />
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

      <Form.Item name="needConfirm" label={`${Intl.get('need_confirm')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="use12Hours" label="use12Hours：">
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="changeOnScroll" label={`${Intl.get('change_on_scroll')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="minuteStep" label={`${Intl.get('minute_step')}：`}>
        <TimeMinuteSecondStepSelectStandardDict
          placeholder={Intl.get('please_select')}
          allowClear
        />
      </Form.Item>

      <Form.Item name="hourStep" label={`${Intl.get('hour_step')}：`}>
        <TimeHourStepSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="secondStep" label={`${Intl.get('second_step')}：`}>
        <TimeMinuteSecondStepSelectStandardDict
          placeholder={Intl.get('please_select')}
          allowClear
        />
      </Form.Item>

      <Form.Item name="showNow" label={`${Intl.get('show_now')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="allowClear" label={`${Intl.get('allow_clear')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>
    </>
  );
}
