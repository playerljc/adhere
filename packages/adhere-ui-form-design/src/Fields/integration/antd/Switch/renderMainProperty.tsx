import React from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  SwitchSizeSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

/**
 * MainProperty - Switch basic props per https://ant.design/components/switch-cn#api
 * Basic only: disabled, loading, size (default | small)
 */
const MainProperty = createMainProperty({
  formName: 'antSwitchMainProperty',
  getDefaultFormItems: (): DataItemRow[] => [
    {
      key: 'disabled',
      require: false,
      label: <Label>{Intl.get('disabled')}：</Label>,
      value: (
        <Value>
          <Form.Item name="disabled">
            <WhetherRadioHorizontalDict placeholder={Intl.get('disabled')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'loading',
      require: false,
      label: <Label>{Intl.get('switch_loading')}：</Label>,
      value: (
        <Value>
          <Form.Item name="loading">
            <WhetherRadioHorizontalDict placeholder={Intl.get('switch_loading')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'size',
      require: false,
      label: <Label>{Intl.get('switch_size')}：</Label>,
      value: (
        <Value>
          <Form.Item name="size">
            <SwitchSizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
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
