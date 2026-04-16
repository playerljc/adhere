import dayjs from 'dayjs';
import React from 'react';

import { DatePicker, Form, Input } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  DateBoundModeSelectStandardDict,
  PickerSelectStandardDict,
  PlacementSelectStandardDict,
  SizeSelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

/**
 * MainProperty - DatePicker basic props per antd DatePicker API.
 * Basic only: format, picker, showTime, allowClear, isBirthday, dateBoundMode, dateBoundBaseValue, dateBoundIncludeBase
 */
const MainProperty = createMainProperty({
  formName: 'antDatePickerMainProperty',
  getDefaultFormItems: (designValue, ctx): DataItemRow[] => {
    const pickerValue = ctx.watchValues?.picker as string | undefined;
    const dateBoundMode = ((ctx.watchValues?.dateBoundMode as string | undefined) ?? '') as string;

    const defaultFormItems: (DataItemRow | false)[] = [
    {
      key: 'disabled',
      require: false,
      label: <Label>{Intl.get('disabled')}：</Label>,
      value: (
        <Value>
          <Form.Item name="disabled">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'format',
      require: false,
      label: <Label>{Intl.get('date_format')}：</Label>,
      value: (
        <Value>
          <Form.Item name="format">
            <Input.OptimizedInput showCount={false} placeholder={Intl.get('date_format')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'picker',
      require: false,
      label: <Label>{Intl.get('please_select')}（picker）：</Label>,
      value: (
        <Value>
          <Form.Item name="picker">
            <PickerSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'placeholder',
      require: false,
      label: <Label>{Intl.get('placeholder')}：</Label>,
      value: (
        <Value>
          <Form.Item name="placeholder">
            <Input.OptimizedInput showCount={false} placeholder={Intl.get('placeholder')} />
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
            <SizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'status',
      require: false,
      label: <Label>{Intl.get('input_status')}：</Label>,
      value: (
        <Value>
          <Form.Item name="status">
            <VerificationStatusSelectStandardDict
              placeholder={Intl.get('please_select')}
              allowClear
            />
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
    {
      key: 'placement',
      require: false,
      label: <Label>{Intl.get('placement')}：</Label>,
      value: (
        <Value>
          <Form.Item name="placement">
            <PlacementSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'showTime',
      require: false,
      label: <Label>{Intl.get('show_time')}：</Label>,
      value: (
        <Value>
          <Form.Item name="showTime">
            <WhetherRadioHorizontalDict placeholder={Intl.get('show_time')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'needConfirm',
      require: false,
      label: <Label>{Intl.get('need_confirm')}：</Label>,
      value: (
        <Value>
          <Form.Item name="needConfirm">
            <WhetherRadioHorizontalDict placeholder={Intl.get('need_confirm')} />
          </Form.Item>
        </Value>
      ),
    },
    ...(['year', 'quarter', 'month'].includes(pickerValue ?? '')
      ? ([
          {
            key: 'multiple',
            require: false,
            label: <Label>{Intl.get('multiple')}：</Label>,
            value: (
              <Value>
                <Form.Item name="multiple">
                  <WhetherRadioHorizontalDict placeholder={Intl.get('multiple')} />
                </Form.Item>
              </Value>
            ),
          },
        ] as DataItemRow[])
      : []),
    ...(pickerValue === 'week'
      ? ([
          {
            key: 'showWeek',
            require: false,
            label: <Label>{Intl.get('show_week')}：</Label>,
            value: (
              <Value>
                <Form.Item name="showWeek">
                  <WhetherRadioHorizontalDict placeholder={Intl.get('show_week')} />
                </Form.Item>
              </Value>
            ),
          },
        ] as DataItemRow[])
      : []),
    {
      key: 'allowClear',
      require: false,
      label: <Label>{Intl.get('allow_clear')}：</Label>,
      value: (
        <Value>
          <Form.Item name="allowClear">
            <WhetherRadioHorizontalDict placeholder={Intl.get('allow_clear')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'isBirthday',
      require: false,
      label: <Label>{Intl.get('is_birthday')}：</Label>,
      value: (
        <Value>
          <Form.Item name="isBirthday">
            <WhetherRadioHorizontalDict placeholder={Intl.get('is_birthday')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'dateBoundMode',
      require: false,
      label: <Label>{Intl.get('date_bound_mode')}：</Label>,
      value: (
        <Value>
          <Form.Item name="dateBoundMode">
            <DateBoundModeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    !!dateBoundMode && {
      key: 'dateBoundBaseValue',
      require: false,
      label: <Label>{Intl.get('date_bound_base_value')}：</Label>,
      value: (
        <Value>
          <Form.Item name="dateBoundBaseValue">
            <DatePicker placeholder={Intl.get('date_bound_base_value')} />
          </Form.Item>
        </Value>
      ),
    },
    !!dateBoundMode && {
      key: 'dateBoundIncludeBase',
      require: false,
      label: <Label>{Intl.get('date_bound_include_base')}：</Label>,
      value: (
        <Value>
          <Form.Item name="dateBoundIncludeBase">
            <WhetherRadioHorizontalDict placeholder={Intl.get('date_bound_include_base')} />
          </Form.Item>
        </Value>
      ),
    },
    ].filter(Boolean);

    return defaultFormItems as DataItemRow[];
  },
  autoFill: true,
  payloadToValues: (fieldProps: any) => {
    const payload = { ...(fieldProps ?? {}) };
    if (payload.dateBoundBaseValue) {
      payload.dateBoundBaseValue = dayjs(payload.dateBoundBaseValue);
    }
    return payload;
  },
  valuesToPayload: (values: any) => {
    const payload = { ...(values ?? {}) };
    if (payload.dateBoundBaseValue) {
      payload.dateBoundBaseValue = payload.dateBoundBaseValue.valueOf();
    }
    return payload;
  },
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
