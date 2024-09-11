// import { Button, Form, Input } from 'antd';
import React from 'react';

import { Button, Form, Input } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [form] = Form.useForm();

  return (
    <div>
      <Form form={form}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: '请输入姓名',
            },
          ]}
          getErrorContainer={() => {
            return document.getElementById('error');
          }}
        >
          <Input />
        </Form.Item>
      </Form>

      <Button
        block
        onClick={() => {
          form.validateFields().then((values) => {});
        }}
      >
        Submit
      </Button>

      <div id="error" style={{ color: 'red', display: 'none' }}>
        11111111111111111
      </div>
    </div>
  );
};
