import React from 'react';

import { Form, Input } from '../../src';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="customWrapper"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      style={{ maxWidth: 600 }}
      onFinish={(values) => {
        console.log('onFinish', values);
      }}
    >
      <Form.Item
        label="自定义包装"
        name="custom"
        rules={[
          {
            required: true,
            message: '请输入内容',
          },
        ]}
      >
        <Form.CustomWrapperFormItem>
          {({ id, value, onChange }) => (
            <Input
              id={id}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              placeholder="CustomWrapperFormItem"
            />
          )}
        </Form.CustomWrapperFormItem>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Form.SubmitButton form={form} type="primary" block>
          Submit
        </Form.SubmitButton>
      </Form.Item>
    </Form>
  );
};
