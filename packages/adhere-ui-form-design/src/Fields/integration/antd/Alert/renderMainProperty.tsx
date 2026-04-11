import React, { type ReactNode } from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { AlertTypeSelectStandardDict, WhetherRadioHorizontalDict } from '../../../../components';
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
          <Form.Item name="message">
            <Input.OptimizedInput showCount={false} placeholder={Intl.get('message')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'description',
      require: false,
      label: <Label>{Intl.get('description')}:</Label>,
      value: (
        <Value>
          <Form.Item name="description">
            <Input.OptimizedTextArea
              showCount={false}
              placeholder={Intl.get('description')}
              autoSize
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'type',
      require: false,
      label: <Label>{Intl.get('alert_type')}:</Label>,
      value: (
        <Value>
          <Form.Item name="type">
            <AlertTypeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'closable',
      require: false,
      label: <Label>{Intl.get('alert_closable')}:</Label>,
      value: (
        <Value>
          <Form.Item name="closable">
            <WhetherRadioHorizontalDict placeholder={Intl.get('alert_closable')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'showIcon',
      require: false,
      label: <Label>{Intl.get('alert_show_icon')}:</Label>,
      value: (
        <Value>
          <Form.Item name="showIcon">
            <WhetherRadioHorizontalDict placeholder={Intl.get('alert_show_icon')} />
          </Form.Item>
        </Value>
      ),
    },
  ],
});

export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}
