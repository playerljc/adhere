import React from 'react';

import { Form, Input } from '../../src';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="validatorRules"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      style={{ maxWidth: 600 }}
      onFinish={(values) => {
        console.log('onFinish', values);
      }}
    >
      <Form.Item
        label="邮箱"
        name="email"
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
        label="URL"
        name="url"
        rules={[Form.ValidatorRules.isURL({ invalidMessage: 'URL 格式错误' })]}
      >
        <Input placeholder="https://example.com" />
      </Form.Item>

      <Form.Item
        label="手机号"
        name="mobile"
        rules={[Form.ValidatorRules.isMobilePhone({ invalidMessage: '手机号格式错误' })]}
      >
        <Input placeholder="mobile" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Form.SubmitButton form={form} type="primary" block>
          Submit
        </Form.SubmitButton>
      </Form.Item>
    </Form>
  );
};
