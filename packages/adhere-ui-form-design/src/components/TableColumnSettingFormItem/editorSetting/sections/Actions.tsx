import { Form } from 'antd';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { values } from '../../../../Dict';
import { ActionsFormItem } from '../../../index';

export default function ActionsSection() {
  return (
    <Form.Item name="actions" label={`${Intl.get('actions')}：`}>
      <ActionsFormItem actions={values.InputEvents?.value ?? []} />
    </Form.Item>
  );
}
