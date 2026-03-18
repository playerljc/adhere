import React, { type ReactNode } from 'react';

import { Form, Select, TextArea } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { WhetherRadioHorizontalDict } from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createStandardMainProperty } from '../../../../utils/createStandardMainProperty';

const MainProperty = createStandardMainProperty({
  formName: 'antTextMainProperty',
  buildRows: () => [
    {
      key: 'children',
      require: false,
      label: <Label>{Intl.get('text_content')}:</Label>,
      value: (
        <Value>
          <Form.Item name="children">
            <TextArea placeholder={Intl.get('text_content')} autoSize />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'type',
      require: false,
      label: <Label>{Intl.get('text_type')}:</Label>,
      value: (
        <Value>
          <Form.Item name="type">
            <Select
              placeholder={Intl.get('please_select')}
              allowClear
              options={[
                { label: 'secondary', value: 'secondary' },
                { label: 'success', value: 'success' },
                { label: 'warning', value: 'warning' },
                { label: 'danger', value: 'danger' },
              ]}
            />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'strong',
      require: false,
      label: <Label>{Intl.get('strong')}:</Label>,
      value: (
        <Value>
          <Form.Item name="strong">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'underline',
      require: false,
      label: <Label>{Intl.get('underline')}:</Label>,
      value: (
        <Value>
          <Form.Item name="underline">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'delete',
      require: false,
      label: <Label>{Intl.get('delete')}:</Label>,
      value: (
        <Value>
          <Form.Item name="delete">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'disabled',
      require: false,
      label: <Label>{Intl.get('disabled')}:</Label>,
      value: (
        <Value>
          <Form.Item name="disabled">
            <WhetherRadioHorizontalDict />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'ellipsis',
      require: false,
      label: <Label>{Intl.get('ellipsis')}:</Label>,
      value: (
        <Value>
          <Form.Item name="ellipsis">
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
