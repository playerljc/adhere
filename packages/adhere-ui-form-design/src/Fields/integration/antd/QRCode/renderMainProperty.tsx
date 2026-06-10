import React, { type ReactNode } from 'react';

import { ColorPicker, Form, Input, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import {
  QRCodeErrorLevelSelectStandardDict,
  QRCodeStatusRenderTemplateSelectStandardDict,
  QRCodeStatusSelectStandardDict,
  QRCodeTypeSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createStandardMainProperty } from '../../../../utils/createStandardMainProperty';

const MainProperty = createStandardMainProperty({
  formName: 'antQRCodeMainProperty',
  buildRows: () => [
    {
      key: 'type',
      require: false,
      label: <Label>{Intl.get('type')}：</Label>,
      value: (
        <Value>
          <Form.Item name="type">
            <QRCodeTypeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'errorLevel',
      require: false,
      label: <Label>{Intl.get('error_level')}：</Label>,
      value: (
        <Value>
          <Form.Item name="errorLevel">
            <QRCodeErrorLevelSelectStandardDict
              placeholder={Intl.get('please_select')}
              allowClear
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'boostLevel',
      require: false,
      label: <Label>{Intl.get('boost_level')}：</Label>,
      value: (
        <Value>
          <Form.Item name="boostLevel">
            <WhetherRadioHorizontalDict placeholder={Intl.get('boost_level')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'status',
      require: false,
      label: <Label>{Intl.get('qr_status')}：</Label>,
      value: (
        <Value>
          <Form.Item name="status">
            <QRCodeStatusSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'statusRenderTemplate',
      require: false,
      label: <Label>{Intl.get('status_render_template')}：</Label>,
      value: (
        <Value>
          <Form.Item name="statusRenderTemplate">
            <QRCodeStatusRenderTemplateSelectStandardDict
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
      label: <Label>{Intl.get('qr_size')}：</Label>,
      value: (
        <Value>
          <Form.Item name="size">
            <InputNumberInteger.InputPositiveNumberInteger placeholder={Intl.get('qr_size')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'icon',
      require: false,
      label: <Label>{Intl.get('qr_icon')}：</Label>,
      value: (
        <Value>
          <Form.Item name="icon">
            <Input.OptimizedInput showCount={false} placeholder={Intl.get('qr_icon')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'iconSize',
      require: false,
      label: <Label>{Intl.get('icon_size')}：</Label>,
      value: (
        <Value>
          <Form.Item name="iconSize">
            <InputNumberInteger.InputPositiveNumberInteger placeholder={Intl.get('icon_size')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'color',
      require: false,
      label: <Label>{Intl.get('color')}：</Label>,
      value: (
        <Value>
          <Form.Item
            name="color"
            getValueFromEvent={(_color: unknown, hex: string) => hex}
            trigger="onChange"
          >
            <ColorPicker allowClear format="hex" showText disabledAlpha placement="bottomLeft" placeholder={Intl.get('color')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'bgColor',
      require: false,
      label: <Label>{Intl.get('bg_color')}：</Label>,
      value: (
        <Value>
          <Form.Item
            name="bgColor"
            getValueFromEvent={(_color: unknown, hex: string) => hex}
            trigger="onChange"
          >
            <ColorPicker allowClear format="hex" showText disabledAlpha placement="bottomLeft" placeholder={Intl.get('bg_color')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'marginSize',
      require: false,
      label: <Label>{Intl.get('margin_size')}：</Label>,
      value: (
        <Value>
          <Form.Item name="marginSize">
            <InputNumberInteger.InputPositiveNumberInteger placeholder={Intl.get('margin_size')} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('bordered')} />
          </Form.Item>
        </Value>
      ),
    },
  ],
});

export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}
