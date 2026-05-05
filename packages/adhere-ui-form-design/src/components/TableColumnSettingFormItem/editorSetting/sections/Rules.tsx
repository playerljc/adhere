import { Form } from 'antd';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { RulesSettingFormItem } from '../../../index';

export default function RulesSection() {
  return (
    <Form.Item name="rules" label={`${Intl.get('rules')}：`}>
      <RulesSettingFormItem />
    </Form.Item>
  );
}
