import React from 'react';

import { Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  buildFormPropertyPlaceholderRow,
  buildFormPropertyTipRow,
  UploadDataSourceManagerFormItem,
  UploadListTypeSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

const MainProperty = createMainProperty({
  formName: 'antFileUploadMainProperty',
  getDefaultFormItems: (_designValue, ctx): DataItemRow[] => [
    buildFormPropertyPlaceholderRow(ctx.titleLabelSlot),
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
      key: 'accept',
      require: false,
      label: <Label>{Intl.get('upload_accept')}：</Label>,
      value: (
        <Value>
          <Form.Item name="accept">
            <Input.OptimizedInput allowClear showCount={false} placeholder={Intl.get('upload_accept')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'multiple',
      require: false,
      label: <Label>{Intl.get('upload_multiple')}：</Label>,
      value: (
        <Value>
          <Form.Item name="multiple">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'maxCount',
      require: false,
      label: <Label>{Intl.get('upload_max_count')}：</Label>,
      value: (
        <Value>
          <Form.Item name="maxCount">
            <InputNumberInteger.InputPositiveNumberInteger placeholder={Intl.get('upload_max_count')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'listType',
      require: false,
      label: <Label>{Intl.get('upload_list_type')}：</Label>,
      value: (
        <Value>
          <Form.Item name="listType">
            <UploadListTypeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'showUploadList',
      require: false,
      label: <Label>{Intl.get('upload_show_list')}：</Label>,
      value: (
        <Value>
          <Form.Item name="showUploadList">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'uploadDataSource',
      require: false,
      label: <Label>{Intl.get('upload_data_source')}：</Label>,
      value: (
        <Value>
          <Form.Item name="uploadDataSource">
            <UploadDataSourceManagerFormItem />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'name',
      require: false,
      label: <Label>{Intl.get('upload_field_name')}：</Label>,
      value: (
        <Value>
          <Form.Item name="name">
            <Input.OptimizedInput allowClear showCount={false} placeholder={Intl.get('upload_field_name')} />
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

