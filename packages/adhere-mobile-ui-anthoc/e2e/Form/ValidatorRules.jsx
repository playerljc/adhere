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
        name="email"
        label="邮箱"
        rules={[
          {
            required: true,
            message: '请输入邮箱',
          },
          Form.ValidatorRules.isEmail({ invalidMessage: '邮箱格式错误' }),
        ]}
      >
        <Input placeholder="email" />
      </Form.Item>

      <Form.Item
        name="url"
        label="URL"
        rules={[Form.ValidatorRules.isURL({ invalidMessage: 'URL 格式错误' })]}
      >
        <Input placeholder="https://example.com" />
      </Form.Item>

      <Form.Item
        name="mobile"
        label="手机号"
        rules={[Form.ValidatorRules.isMobilePhone({ invalidMessage: '手机号格式错误' })]}
      >
        <Input placeholder="mobile" />
      </Form.Item>
    </Form>
  );
};
