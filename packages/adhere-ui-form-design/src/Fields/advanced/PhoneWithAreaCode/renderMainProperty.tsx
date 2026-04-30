import React from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  AreaCodePhoneDataSourceManagerFormItem,
  PhoneAreaCodeSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../components';
import { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../utils';
import type { GetDefaultFormItemsCtx } from '../../../utils';

function getDefaultFormItems(
  _designValue: DesignValueProps,
  ctx: GetDefaultFormItemsCtx,
): DataItemRow[] {
  return [
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
      key: 'defaultCode',
      require: false,
      label: (
        <Label>
          {Intl.get('default')}
          {Intl.get('area_code')}：
        </Label>
      ),
      value: (
        <Value>
          <Form.Item name="defaultCode">
            <PhoneAreaCodeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'areaCodeOptionsSource',
      require: false,
      label: <Label>{Intl.get('area_code_data_source')}：</Label>,
      value: (
        <Value>
          <Form.Item name="areaCodeOptionsSource">
            <AreaCodePhoneDataSourceManagerFormItem />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'placeholder',
      require: false,
      label: <Label>{Intl.get('phone_number')}：</Label>,
      value: (
        <Value>
          <Form.Item name="placeholder">
            <Input.OptimizedInput
              placeholder={Intl.get('please_enter_phone_number')}
              maxLength={200}
              showCount={false}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'allowClear',
      require: false,
      label: (
        <Label>
          {Intl.get('allow_clear')}（{Intl.get('phone_number')}）：
        </Label>
      ),
      value: (
        <Value>
          <Form.Item name="allowClear">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
  ];
}

const MainProperty = createMainProperty({
  formName: 'phoneWithAreaCodeMainProperty',
  getDefaultFormItems,
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
