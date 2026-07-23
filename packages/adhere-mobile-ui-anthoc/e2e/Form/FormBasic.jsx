import React from 'react';

import { Button, Form, Input } from '../../src';

import '../../src/index.less';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="horizontal"
      footer={
        <Button
          block
          color="primary"
          size="middle"
          onClick={() => {
            form
              .validateFields()
              .then((values) => {
                alert(JSON.stringify(values));
              })
              .catch(() => {});
          }}
        >
          提交
        </Button>
      }
    >
      <Form.Item
        name="name"
        label="姓名"
        rules={[
          {
            required: true,
            message: '请输入姓名',
          },
        ]}
      >
        <Input placeholder="name" />
      </Form.Item>

      <Form.Item
        name="remark"
        label="备注"
        rules={[
          {
            required: true,
            message: '请输入备注',
          },
        ]}
      >
        <Input placeholder="remark" />
      </Form.Item>
    </Form>
  );
};
