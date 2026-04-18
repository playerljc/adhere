import React, { type ReactNode } from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import {
  ButtonHtmlTypeSelectStandardDict,
  ButtonShapeSelectStandardDict,
  ButtonTypeSelectStandardDict,
  InputSizeSelectStandardDict,
  WhetherRadioHorizontalDict,
} from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createStandardMainProperty } from '../../../../utils/createStandardMainProperty';

const MainProperty = createStandardMainProperty({
  formName: 'antButtonMainProperty',
  autoFill: true,
  buildRows: () => [
    {
      key: 'children',
      require: false,
      label: <Label>{Intl.get('button_text')}:</Label>,
      value: (
        <Value>
          <Form.Item name="children">
            <Input.OptimizedInput showCount={false} placeholder={Intl.get('button_text')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'type',
      require: false,
      label: <Label>{Intl.get('button_type')}:</Label>,
      value: (
        <Value>
          <Form.Item name="type">
            <ButtonTypeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'shape',
      require: false,
      label: <Label>{Intl.get('button_shape')}:</Label>,
      value: (
        <Value>
          <Form.Item name="shape">
            <ButtonShapeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'size',
      require: false,
      label: <Label>{Intl.get('button_size')}:</Label>,
      value: (
        <Value>
          <Form.Item name="size">
            <InputSizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'htmlType',
      require: false,
      label: <Label>{Intl.get('button_html_type')}:</Label>,
      value: (
        <Value>
          <Form.Item name="htmlType">
            <ButtonHtmlTypeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'ghost',
      require: false,
      label: <Label>{Intl.get('button_ghost')}:</Label>,
      value: (
        <Value>
          <Form.Item name="ghost">
            <WhetherRadioHorizontalDict placeholder={Intl.get('button_ghost')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'danger',
      require: false,
      label: <Label>{Intl.get('button_danger')}:</Label>,
      value: (
        <Value>
          <Form.Item name="danger">
            <WhetherRadioHorizontalDict placeholder={Intl.get('button_danger')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'loading',
      require: false,
      label: <Label>{Intl.get('button_loading')}:</Label>,
      value: (
        <Value>
          <Form.Item name="loading">
            <WhetherRadioHorizontalDict placeholder={Intl.get('button_loading')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'disabled',
      require: false,
      label: <Label>{Intl.get('button_disabled')}:</Label>,
      value: (
        <Value>
          <Form.Item name="disabled">
            <WhetherRadioHorizontalDict placeholder={Intl.get('button_disabled')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'block',
      require: false,
      label: <Label>{Intl.get('button_block')}:</Label>,
      value: (
        <Value>
          <Form.Item name="block">
            <WhetherRadioHorizontalDict placeholder={Intl.get('button_block')} />
          </Form.Item>
        </Value>
      ),
    },
  ],
});

export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}
