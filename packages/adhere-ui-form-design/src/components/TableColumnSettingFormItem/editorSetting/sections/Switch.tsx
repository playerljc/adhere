import { Form } from 'antd';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SwitchSizeSelectStandardDict, WhetherRadioHorizontalDict } from '../../../index';

export default function SwitchSection() {
  return (
    <>
      <Form.Item name="disabled" label={`${Intl.get('disabled')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="loading" label={`${Intl.get('switch_loading')}：`}>
        <WhetherRadioHorizontalDict />
      </Form.Item>

      <Form.Item name="size" label={`${Intl.get('switch_size')}：`}>
        <SwitchSizeSelectStandardDict placeholder={Intl.get('please_select')} allowClear />
      </Form.Item>
    </>
  );
}
