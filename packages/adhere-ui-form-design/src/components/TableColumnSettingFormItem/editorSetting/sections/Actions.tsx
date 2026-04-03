import React from 'react';
import { Form } from 'antd';

import Intl from '@baifendian/adhere-util-intl';

import { ActionsFormItem } from '../../../index';
import { values } from '../../../../Dict';

export default function ActionsSection() {
  return (
    <Form.Item name="actions" label={`${Intl.get('actions')}：`}>
      <ActionsFormItem actions={values.InputEvents?.value ?? []} />
    </Form.Item>
  );
}

