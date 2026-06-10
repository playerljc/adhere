import React from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  buildFormPropertyPlaceholderRow,
  buildFormPropertyTipRow,
  PlacementSelectStandardDict,
  SizeSelectStandardDict,
  TimeHourStepSelectStandardDict,
  TimeMinuteSecondStepSelectStandardDict,
  VariantSelectStandardDict,
  VerificationStatusSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

const MainProperty = createMainProperty({
  formName: 'antTimePickerMainProperty',
  getDefaultFormItems: (_designValue, ctx): DataItemRow[] => [
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
            <Input.OptimizedInput showCount={false} placeholder="HH:mm:ss" />
          </Form.Item>
        </Value>
      ),
    },
    buildFormPropertyPlaceholderRow(ctx.titleLabelSlot),
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
      key: 'needConfirm',
      require: false,
      label: <Label>{Intl.get('need_confirm')}：</Label>,
      value: (
        <Value>
          <Form.Item name="needConfirm">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'use12Hours',
      require: false,
      label: <Label>use12Hours：</Label>,
      value: (
        <Value>
          <Form.Item name="use12Hours">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'changeOnScroll',
      require: false,
      label: <Label>{Intl.get('change_on_scroll')}：</Label>,
      value: (
        <Value>
          <Form.Item name="changeOnScroll">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'minuteStep',
      require: false,
      label: <Label>{Intl.get('minute_step')}：</Label>,
      value: (
        <Value>
          <Form.Item name="minuteStep">
            <TimeMinuteSecondStepSelectStandardDict
              placeholder={Intl.get('please_select')}
              allowClear
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'hourStep',
      require: false,
      label: <Label>{Intl.get('hour_step')}：</Label>,
      value: (
        <Value>
          <Form.Item name="hourStep">
            <TimeHourStepSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'secondStep',
      require: false,
      label: <Label>{Intl.get('second_step')}：</Label>,
      value: (
        <Value>
          <Form.Item name="secondStep">
            <TimeMinuteSecondStepSelectStandardDict
              placeholder={Intl.get('please_select')}
              allowClear
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'showNow',
      require: false,
      label: <Label>{Intl.get('show_now')}：</Label>,
      value: (
        <Value>
          <Form.Item name="showNow">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'allowClear',
      require: false,
      label: <Label>{Intl.get('allow_clear')}：</Label>,
      value: (
        <Value>
          <Form.Item name="allowClear">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    buildFormPropertyTipRow(ctx.titleLabelSlot),
  ],
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
