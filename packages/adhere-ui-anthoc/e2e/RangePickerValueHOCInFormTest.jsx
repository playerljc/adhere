// import dayjs from 'dayjs';
import { Button, Form } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

// import RangePickerValueHOCTest from '../src/range-picker-timestamp-value-hoc';
import RangePickerValueHOCTest from '../src/range-picker-format-value-hoc';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  useEffect(() => {
    form.setFieldValue('createTime', ['2023-12-12: 23:45:23', '2026-12-12: 23:45:23']);
  }, []);

  return (
    <Form onFinish={onFinish} form={form}>
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
        <RangePickerValueHOCTest
          // defaultValue={1703030400000}
          showTime
          // type={['milliseconds', 'seconds']}
          // picker="week"
          // format="YYYY-MM-DD"
          // type={['seconds', 'milliseconds']}
          // onChange={(val, dateString, datejs, extra) => {
          //   setValue(val);
          // }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
