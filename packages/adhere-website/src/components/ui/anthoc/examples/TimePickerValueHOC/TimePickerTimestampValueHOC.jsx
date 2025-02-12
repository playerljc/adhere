import { Button } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';

import { Form, TimePickerTimestampValueHOC } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('birthDay2', dayjs().valueOf());
  }, []);

  return (
    <Form
      form={form}
      labelAlign="right"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 21 }}
      onFinish={(values) => {
        console.log('values', values);
        alert(JSON.stringify(values));
      }}
    >
      <Form.Item
        name="birthday"
        label="生日"
        rules={[
          {
            required: true,
            message: '请选择生日',
          },
        ]}
      >
        <TimePickerTimestampValueHOC />
      </Form.Item>

      <Form.Item
        name="birthday1"
        label="生日"
        rules={[
          {
            required: true,
            message: '请选择生日',
          },
        ]}
      >
        <TimePickerTimestampValueHOC type="seconds" />
      </Form.Item>

      <Form.Item
        name="birthday2"
        label="生日"
        rules={[
          {
            required: true,
            message: '请选择生日',
          },
        ]}
      >
        <TimePickerTimestampValueHOC />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button htmlType="submit" block type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
