import React, { type ReactNode } from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { TextTypeSelectStandardDict, WhetherRadioHorizontalDict } from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createStandardMainProperty } from '../../../../utils/createStandardMainProperty';

const MainProperty = createStandardMainProperty({
  formName: 'antTextMainProperty',
  autoFill: false,
  buildRows: () => [
    {
      key: 'children',
      require: false,
      label: <Label>{Intl.get('text_content')}:</Label>,
      value: (
        <Value>
          <Form.Item name="children">
            <Input.OptimizedTextArea
              showCount={false}
              placeholder={Intl.get('text_content')}
              autoSize
            />
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
            <TextTypeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('strong')} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('underline')} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('delete')} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('disabled')} />
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
            <WhetherRadioHorizontalDict placeholder={Intl.get('ellipsis')} />
          </Form.Item>
        </Value>
      ),
    },
  ],
});

export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}
