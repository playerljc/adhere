import React, { type ReactNode } from 'react';

import { ColorPicker, Form, InputNumberInteger } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { SignaturePadModeSelectStandardDict, WhetherRadioHorizontalDict } from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createStandardMainProperty } from '../../../../utils/createStandardMainProperty';

const MainProperty = createStandardMainProperty({
  formName: 'antSignaturePadMainProperty',
  buildRows: () => [
    {
      key: 'mode',
      require: false,
      label: <Label>{Intl.get('mode')}：</Label>,
      value: (
        <Value>
          <Form.Item name="mode">
            <SignaturePadModeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'penColor',
      require: false,
      label: <Label>{Intl.get('pen_color')}：</Label>,
      value: (
        <Value>
          <Form.Item
            name="penColor"
            getValueFromEvent={(_color: unknown, hex: string) => hex}
            trigger="onChange"
          >
            <ColorPicker
              allowClear
              format="hex"
              showText
              disabledAlpha
              placement="bottomLeft"
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'backgroundColor',
      require: false,
      label: <Label>{Intl.get('background_color')}：</Label>,
      value: (
        <Value>
          <Form.Item
            name="backgroundColor"
            getValueFromEvent={(_color: unknown, hex: string) => hex}
            trigger="onChange"
          >
            <ColorPicker
              allowClear
              format="hex"
              showText
              disabledAlpha
              placement="bottomLeft"
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'lineWidth',
      require: false,
      label: <Label>{Intl.get('line_width')}：</Label>,
      value: (
        <Value>
          <Form.Item name="lineWidth">
            <InputNumberInteger.InputPositiveNumberInteger placeholder={Intl.get('line_width')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'canvasWidth',
      require: false,
      label: <Label>{Intl.get('canvas_width')}：</Label>,
      value: (
        <Value>
          <Form.Item name="canvasWidth">
            <InputNumberInteger.InputPositiveNumberInteger placeholder={Intl.get('canvas_width')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'canvasHeight',
      require: false,
      label: <Label>{Intl.get('canvas_height')}：</Label>,
      value: (
        <Value>
          <Form.Item name="canvasHeight">
            <InputNumberInteger.InputPositiveNumberInteger placeholder={Intl.get('canvas_height')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'clearOnResize',
      require: false,
      label: <Label>{Intl.get('clear_on_resize')}：</Label>,
      value: (
        <Value>
          <Form.Item name="clearOnResize">
            <WhetherRadioHorizontalDict placeholder={Intl.get('clear_on_resize')} />
          </Form.Item>
        </Value>
      ),
    },
  ],
});

export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}

