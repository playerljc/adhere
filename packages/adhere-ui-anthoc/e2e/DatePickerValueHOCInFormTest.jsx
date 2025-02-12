import { Button, Form } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';

import DatePickerTimestampValueHOC from '../src/date-picker-timestamp-value-hoc';

// import DatePickerTimestampValueHOC from '../src/date-picker-format-value-hoc';

export default () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('birthDay', dayjs().valueOf());
  }, []);

  return (
    <Form onFinish={onFinish} form={form} name="form">
      <Form.Item
        name="birthDay"
        label="出生年月"
        rules={[
          {
            required: true,
            message: '请选择出生年月',
          },
        ]}
      >
        <DatePickerTimestampValueHOC
          // type="seconds"
          // picker="quarter"
          // format="YYYY-MM-DD"
          onChange={(value, dateString, datejs, extra) => {
            debugger;
          }}
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
