import React from 'react';

import { Form, Input } from '../src/index';

export default () => {
  return (
    <Form>
      <Form.Item
        name="name"
        rules={[
          {
            require: true,
            message: 'name不能为空',
          },
          Form.ValidatorRules.isMimeType({ invalidMessage: 'MimeType错误' }),
        ]}
      >
        <Input placeholder="name" />
      </Form.Item>
    </Form>
  );
};
