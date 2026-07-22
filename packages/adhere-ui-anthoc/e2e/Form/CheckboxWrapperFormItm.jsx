import React from 'react';

import { Checkbox, Form, Switch } from '../../src';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="checkboxWrapper"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      style={{ maxWidth: 600 }}
      onFinish={(values) => {
        console.log('onFinish', values);
      }}
    >
      <Form.CheckboxWrapperFormItm
        label="Checkbox"
        name="agree"
        rules={[
          {
            required: true,
            message: '请勾选同意协议',
          },
        ]}
      >
        <Checkbox>我已阅读并同意用户协议</Checkbox>
      </Form.CheckboxWrapperFormItm>

      <Form.CheckboxWrapperFormItm label="Switch" name="enabled" initialValue={false}>
        <Switch />
      </Form.CheckboxWrapperFormItm>

      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Form.SubmitButton form={form} type="primary" block>
          Submit
        </Form.SubmitButton>
      </Form.Item>
    </Form>
  );
};
