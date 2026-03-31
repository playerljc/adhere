import React from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  SizeSelectStandardDict,
  TableColumnSettingFormItem,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

const MainProperty = createMainProperty({
  formName: 'antInputMainProperty',
  getDefaultFormItems: (): DataItemRow[] => [
    {
      key: 'title',
      require: false,
      label: <Label>{Intl.get('title')}：</Label>,
      value: (
        <Value>
          <Form.Item name="title">
            <Input placeholder={Intl.get('title')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'bordered',
      require: false,
      label: <Label>{Intl.get('bordered')}：</Label>,
      value: (
        <Value>
          <Form.Item name="bordered">
            <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'pagination',
      require: false,
      label: <Label>{Intl.get('transfer_pagination')}：</Label>,
      value: (
        <Value>
          <Form.Item name="pagination">
            <WhetherRadioHorizontalDict placeholder={Intl.get('please_select')} />
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
            <SizeSelectStandardDict placeholder={Intl.get('please_select')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'columnSetting',
      require: false,
      label: <Label>{Intl.get('column_settings')}：</Label>,
      value: (
        <Value>
          <Form.Item name="columnSetting">
            <TableColumnSettingFormItem />
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
