// import dayjs from 'dayjs';
import { Button, Form } from 'antd';
import React from 'react';

import TimePickerTimestampValueHOC from '../src/time-picker-timestamp-value-hoc';

// import TimePickerTimestampValueHOC from '../src/time-picker-format-value-hoc';

export default () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const [form] = Form.useForm();

  // useEffect(() => {
  //   form.setFieldValue('closeTime', dayjs().valueOf());
  // }, []);

  return (
    <Form onFinish={onFinish} form={form} name="form">
      <Form.Item
        name="closeTime"
        label="闭店时间"
        rules={[
          {
            required: true,
            message: '请选择闭店时间',
          },
        ]}
      >
        <TimePickerTimestampValueHOC
          // defaultValue={1703030400000}
          // showTime
          // picker="year"
          // format="YYYY-MM-DD HH:mm:ss"
          type="seconds"
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
