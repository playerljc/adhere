import { Button } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';

import { Form, RangePickerTimestampValueHOC } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('createTime', [dayjs().valueOf(), dayjs().valueOf()]);
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
        <RangePickerTimestampValueHOC />
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
        <RangePickerTimestampValueHOC type={['seconds', 'seconds']} />
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
        <RangePickerTimestampValueHOC type={['seconds', 'milliseconds']} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button htmlType="submit" block type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
