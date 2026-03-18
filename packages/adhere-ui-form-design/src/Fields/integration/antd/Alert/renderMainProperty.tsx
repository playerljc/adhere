import React, { type ReactNode } from 'react';

import { Form, Input, Select, TextArea } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { WhetherRadioHorizontalDict } from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createStandardMainProperty } from '../../../../utils/createStandardMainProperty';

const MainProperty = createStandardMainProperty({
  formName: 'antAlertMainProperty',
  buildRows: () => [
        {
  key: 'message',
  require: false,
  label: <Label>{Intl.get('message')}:</Label>,
  value: (
    <Value>
      <Form.Item name="message"><Input placeholder={Intl.get('message')} /></Form.Item>
    </Value>
  ),
},
{
  key: 'description',
  require: false,
  label: <Label>{Intl.get('description')}:</Label>,
  value: (
    <Value>
      <Form.Item name="description"><TextArea placeholder={Intl.get('description')} autoSize /></Form.Item>
    </Value>
  ),
},
{
  key: 'type',
  require: false,
  label: <Label>{Intl.get('alert_type')}:</Label>,
  value: (
    <Value>
      <Form.Item name="type"><Select placeholder={Intl.get('please_select')} allowClear options={[{ label: 'info', value: 'info' }, { label: 'success', value: 'success' }, { label: 'warning', value: 'warning' }, { label: 'error', value: 'error' }]} /></Form.Item>
    </Value>
  ),
},
{
  key: 'closable',
  require: false,
  label: <Label>{Intl.get('alert_closable')}:</Label>,
  value: (
    <Value>
      <Form.Item name="closable"><WhetherRadioHorizontalDict /></Form.Item>
    </Value>
  ),
},
{
  key: 'showIcon',
  require: false,
  label: <Label>{Intl.get('alert_show_icon')}:</Label>,
  value: (
    <Value>
      <Form.Item name="showIcon"><WhetherRadioHorizontalDict /></Form.Item>
    </Value>
  ),
},
  ],
});

export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}
