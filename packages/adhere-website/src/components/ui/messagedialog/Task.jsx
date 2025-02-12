import { Form, Input, Select } from 'antd';
import React, { forwardRef, useImperativeHandle } from 'react';

function Task(props, ref) {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    getValues: () => form.validateFields(),
  }));

  return (
    <Form
      name="userForm"
      form={form}
      labelCol={{
        span: 3,
      }}
      wrapperCol={{
        span: 21,
      }}
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
        <Input placeholder="姓名" />
      </Form.Item>

      <Form.Item
        name="sex"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择姓名',
          },
        ]}
      >
        <Select>
          <Select.Option value="1">男</Select.Option>
          <Select.Option value="2">女</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="address" label="地址">
        <Input placeholder="地址" />
      </Form.Item>
    </Form>
  );
}

export default forwardRef(Task);
