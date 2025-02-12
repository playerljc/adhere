import { Form, Input, TextArea } from 'antd-mobile';
import React, { forwardRef, useImperativeHandle } from 'react';

function Task(props, ref) {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    getValues: () => form.validateFields(),
  }));

  return (
    <Form form={form}>
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
        <Input placeholder="姓名" />
      </Form.Item>

      <Form.Item name="address" label="地址">
        <TextArea placeholder="地址" />
      </Form.Item>
    </Form>
  );
}

export default forwardRef(Task);
