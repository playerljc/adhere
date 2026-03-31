import React from 'react';
import { Form, Input } from 'antd';

import Intl from '@baifendian/adhere-util-intl';

import type { DatePickerRuntimeState } from '../types';
import {
  DateBoundModeSelectStandardDict,
  PickerSelectStandardDict,
  PlacementSelectStandardDict,
  SizeSelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../index';

export default function DatePickerSection({ pickerValue, dateBoundMode }: DatePickerRuntimeState) {
  return (
    <>
      <Form.Item name="disabled" label={`${Intl.get('disabled')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="format" label={`${Intl.get('date_format')}：`}>
        <Input placeholder={Intl.get('date_format')} />
      </Form.Item>

      <Form.Item name="picker" label={`${Intl.get('please_select')}（picker）：`}>
        <PickerSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      <Form.Item name="placeholder" label={`${Intl.get('placeholder')}：`}>
        <Input placeholder={Intl.get('placeholder')} />
      </Form.Item>

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
        <WhetherRadioHorizontalDict placeholder={Intl.get('show_time')} />
      </Form.Item>

      <Form.Item name="needConfirm" label={`${Intl.get('need_confirm')}：`}>
        <WhetherRadioHorizontalDict placeholder={Intl.get('need_confirm')} />
      </Form.Item>

      {['year', 'quarter', 'month'].includes(pickerValue ?? '') ? (
        <Form.Item name="multiple" label={`${Intl.get('multiple')}：`}>
          <WhetherRadioHorizontalDict placeholder={Intl.get('multiple')} />
        </Form.Item>
      ) : null}

      {pickerValue === 'week' ? (
        <Form.Item name="showWeek" label={`${Intl.get('show_week')}：`}>
          <WhetherRadioHorizontalDict placeholder={Intl.get('show_week')} />
        </Form.Item>
      ) : null}

      <Form.Item name="allowClear" label={`${Intl.get('allow_clear')}：`}>
        <WhetherRadioHorizontalDict placeholder={Intl.get('allow_clear')} />
      </Form.Item>

      <Form.Item name="isBirthday" label={`${Intl.get('is_birthday')}：`}>
        <WhetherRadioHorizontalDict placeholder={Intl.get('is_birthday')} />
      </Form.Item>

      <Form.Item name="dateBoundMode" label={`${Intl.get('date_bound_mode')}：`}>
        <DateBoundModeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>

      {dateBoundMode ? (
        <>
          <Form.Item name="dateBoundBaseValue" label={`${Intl.get('date_bound_base_value')}：`}>
            <Input placeholder={Intl.get('date_bound_base_value')} />
          </Form.Item>

          <Form.Item name="dateBoundIncludeBase" label={`${Intl.get('date_bound_include_base')}：`}>
            <WhetherRadioHorizontalDict placeholder={Intl.get('date_bound_include_base')} />
          </Form.Item>
        </>
      ) : null}
    </>
  );
}

