import { Button } from 'antd';
import React, { useEffect } from 'react';

import { Form, RangePickerFormatValueHOC } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('createTime', ['2023-12-12: 23:45:23', '2026-12-12: 23:45:23']);
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
        name="createTime"
        label="创建时间"
        rules={[
          {
            required: true,
            message: '请选择创建时间',
          },
        ]}
      >
        <RangePickerFormatValueHOC />
      </Form.Item>

      <Form.Item
        name="createTime1"
        label="创建时间"
        rules={[
          {
            required: true,
            message: '请选择创建时间',
          },
        ]}
      >
        <RangePickerFormatValueHOC type={['seconds', 'seconds']} />
      </Form.Item>

      <Form.Item
        name="createTime2"
        label="创建时间"
        rules={[
          {
            required: true,
            message: '请选择创建时间',
          },
        ]}
      >
        <RangePickerFormatValueHOC type={['seconds', 'milliseconds']} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button htmlType="submit" block type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
