import React from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  SendSMSDataSourcePickerFormItem,
  WhetherRadioHorizontalDict,
  buildFormPropertyPlaceholderRow,
} from '../../../components';
import { Label, Value } from '../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../utils';

const MainProperty = createMainProperty({
  formName: 'sendSMSMainProperty',
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
      key: 'readOnly',
      require: false,
      label: <Label>{Intl.get('read_only')}：</Label>,
      value: (
        <Value>
          <Form.Item name="readOnly">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    buildFormPropertyPlaceholderRow(ctx.titleLabelSlot),
    {
      key: 'placeholder',
      require: false,
      label: <Label>{Intl.get('verification_code')}：</Label>,
      value: (
        <Value>
          <Form.Item name="placeholder">
            <Input.OptimizedInput
              placeholder={Intl.get('please_enter_verification_code')}
              maxLength={200}
              showCount={false}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'countdownSeconds',
      require: false,
      label: <Label>{Intl.get('send_sms_countdown_seconds')}：</Label>,
      value: (
        <Value>
          <Form.Item name="countdownSeconds">
            <InputNumberInteger.InputPositiveNumberInteger
              placeholder={Intl.get('send_sms_countdown_seconds')}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'sendApi.source',
      require: false,
      label: <Label>{Intl.get('send_sms_data_source')}：</Label>,
      value: (
        <Value>
          <Form.Item name={['sendApi', 'source']}>
            <SendSMSDataSourcePickerFormItem />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'sendApi.responseMap.dataPath',
      require: false,
      label: <Label>{Intl.get('data_path')}：</Label>,
      value: (
        <Value>
          <Form.Item name={['sendApi', 'responseMap', 'dataPath']}>
            <Input.OptimizedInput placeholder="data.xxx" maxLength={200} showCount={false} />
          </Form.Item>
        </Value>
      ),
    },
  ],
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}

