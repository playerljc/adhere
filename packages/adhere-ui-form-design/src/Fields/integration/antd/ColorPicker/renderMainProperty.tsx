import React from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import {
  ColorPickerFormatSelectStandardDict,
  ColorPickerTriggerSelectStandardDict,
  SizeSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createMainProperty, renderMainPropertyWithCreate } from '../../../../utils';

const MainProperty = createMainProperty({
  formName: 'antColorPickerMainProperty',
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
      key: 'format',
      require: false,
      label: <Label>{Intl.get('format')}：</Label>,
      value: (
        <Value>
          <Form.Item name="format">
            <ColorPickerFormatSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'defaultFormat',
      require: false,
      label: <Label>{Intl.get('default_format')}：</Label>,
      value: (
        <Value>
          <Form.Item name="defaultFormat">
            <ColorPickerFormatSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'trigger',
      require: false,
      label: <Label>{Intl.get('trigger')}：</Label>,
      value: (
        <Value>
          <Form.Item name="trigger">
            <ColorPickerTriggerSelectStandardDict
              placeholder={Intl.get('please_select')}
              allowClear
            />
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
      key: 'showText',
      require: false,
      label: <Label>{Intl.get('show_text')}：</Label>,
      value: (
        <Value>
          <Form.Item name="showText">
            <WhetherRadioHorizontalDict placeholder={Intl.get('show_text')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'disabledAlpha',
      require: false,
      label: <Label>{Intl.get('disabled_alpha')}：</Label>,
      value: (
        <Value>
          <Form.Item name="disabledAlpha">
            <WhetherRadioHorizontalDict placeholder={Intl.get('disabled_alpha')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'disabledFormat',
      require: false,
      label: <Label>{Intl.get('disabled_format')}：</Label>,
      value: (
        <Value>
          <Form.Item name="disabledFormat">
            <WhetherRadioHorizontalDict placeholder={Intl.get('disabled_format')} />
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
