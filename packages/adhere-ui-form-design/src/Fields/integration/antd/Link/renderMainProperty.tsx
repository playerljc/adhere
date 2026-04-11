import React, { type ReactNode } from 'react';

import { Form, Input } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { LinkTargetSelectStandardDict, WhetherRadioHorizontalDict } from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import type { DesignValueProps } from '../../../../types';
import { createStandardMainProperty } from '../../../../utils/createStandardMainProperty';

const MainProperty = createStandardMainProperty({
  formName: 'antLinkMainProperty',
  buildRows: () => [
    {
      key: 'children',
      require: false,
      label: <Label>{Intl.get('link_text')}:</Label>,
      value: (
        <Value>
          <Form.Item name="children">
            <Input.OptimizedInput showCount={false} placeholder={Intl.get('link_text')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'href',
      require: false,
      label: <Label>{Intl.get('link_href')}:</Label>,
      value: (
        <Value>
          <Form.Item name="href">
            <Input.OptimizedInput showCount={false} placeholder={Intl.get('link_href')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'target',
      require: false,
      label: <Label>{Intl.get('link_target')}:</Label>,
      value: (
        <Value>
          <Form.Item name="target">
            <LinkTargetSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
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
  ],
});

export function renderMainProperty(props: DesignValueProps): ReactNode {
  return <MainProperty designValue={props} />;
}
