import React from 'react';

import { Form, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  RateSizeSelectStandardDict, WhetherRadioHorizontalDict,
  buildFormPropertyTipRow,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import {
  createMainProperty,
  renderMainPropertyWithCreate,
} from '../../../../utils';
import type { DesignValueProps } from '../../../../types';

const MainProperty = createMainProperty({
  formName: 'antRateMainProperty',
  getDefaultFormItems: (_designValue, ctx): DataItemRow[] => [
    {
      key: 'allowClear',
      require: false,
      label: <Label>{Intl.get('rate_allow_clear')}：</Label>,
      value: (
        <Value>
          <Form.Item name="allowClear">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'allowHalf',
      require: false,
      label: <Label>{Intl.get('rate_allow_half')}：</Label>,
      value: (
        <Value>
          <Form.Item name="allowHalf">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'count',
      require: false,
      label: <Label>{Intl.get('rate_count')}：</Label>,
      value: (
        <Value>
          <Form.Item name="count">
            <InputNumberInteger.InputPositiveNumberInteger
              placeholder={Intl.get('rate_count')}
              min={1}
              max={20}
            />
          </Form.Item>
        </Value>
      ),
    },
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
      key: 'keyboard',
      require: false,
      label: <Label>{Intl.get('rate_keyboard')}：</Label>,
      value: (
        <Value>
          <Form.Item name="keyboard">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'size',
      require: false,
      label: <Label>{Intl.get('rate_size')}：</Label>,
      value: (
        <Value>
          <Form.Item name="size">
            <RateSizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
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
