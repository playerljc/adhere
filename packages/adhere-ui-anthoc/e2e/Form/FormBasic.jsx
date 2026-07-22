import React from 'react';

import { Checkbox, Form, Input } from '../../src';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="formBasic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      style={{ maxWidth: 600 }}
      onFinish={(values) => {
        console.log('onFinish', values);
      }}
    >
      <Form.Item
        label="姓名"
        name="name"
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
        label="备注"
        name="remark"
        rules={[
          {
            required: true,
            message: '请输入备注',
          },
        ]}
      >
        <Input.TextArea placeholder="remark" rows={3} />
      </Form.Item>

      <Form.CheckboxWrapperFormItm
        label="同意协议"
        name="agree"
        rules={[
          {
            required: true,
            message: '请勾选同意协议',
          },
        ]}
      >
        <Checkbox>我已阅读并同意</Checkbox>
      </Form.CheckboxWrapperFormItm>

      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Form.SubmitButton form={form} type="primary" block>
          Submit
        </Form.SubmitButton>
      </Form.Item>
    </Form>
  );
};
