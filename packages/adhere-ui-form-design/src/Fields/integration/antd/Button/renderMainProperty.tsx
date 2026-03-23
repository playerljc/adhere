import React, { type ReactNode } from 'react';

import { Form, Input, Select } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { WhetherRadioHorizontalDict } from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createStandardMainProperty } from '../../../../utils/createStandardMainProperty';

const MainProperty = createStandardMainProperty({
  formName: 'antButtonMainProperty',
  buildRows: () => [
    {
      key: 'children',
      require: false,
      label: <Label>{Intl.get('button_text')}:</Label>,
      value: (
        <Value>
          <Form.Item name="children">
            <Input placeholder={Intl.get('button_text')} />
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
            <Select
              placeholder={Intl.get('please_select')}
              allowClear
              options={[
                { label: 'default', value: 'default' },
                { label: 'primary', value: 'primary' },
                { label: 'dashed', value: 'dashed' },
                { label: 'link', value: 'link' },
                { label: 'text', value: 'text' },
              ]}
            />
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
            <Select
              placeholder={Intl.get('please_select')}
              allowClear
              options={[
                { label: 'default', value: 'default' },
                { label: 'circle', value: 'circle' },
                { label: 'round', value: 'round' },
              ]}
            />
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
            <Select
              placeholder={Intl.get('please_select')}
              allowClear
              options={[
                { label: 'large', value: 'large' },
                { label: 'middle', value: 'middle' },
                { label: 'small', value: 'small' },
              ]}
            />
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
            <Select
              placeholder={Intl.get('please_select')}
              allowClear
              options={[
                { label: 'button', value: 'button' },
                { label: 'submit', value: 'submit' },
                { label: 'reset', value: 'reset' },
              ]}
            />
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
            <WhetherRadioHorizontalDict />
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
            <WhetherRadioHorizontalDict />
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
            <WhetherRadioHorizontalDict />
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
            <WhetherRadioHorizontalDict />
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
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
  ],
});

export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}
