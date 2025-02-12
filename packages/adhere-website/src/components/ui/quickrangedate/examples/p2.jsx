import { Button, Form } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

import { QuickRangeDate } from '@baifendian/adhere';

export default () => {
  const config = [
    {
      type: 'a-d',
      value: 1,
    },
    {
      type: 'a-w',
      value: 1,
    },
    {
      type: 'a-M',
      value: 1,
    },
    {
      type: 'a-Q',
      value: 1,
    },
    {
      type: 'a-y',
      value: 1,
    },
    {
      type: 'a-h',
      value: 1,
    },
    {
      type: 'a-m',
      value: 1,
    },
    {
      type: 'a-s',
      value: 1,
    },
    {
      type: 'a-ms',
      value: 1,
    },
    {
      type: 'custom',
    },
  ];

  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.Item
        name="dateRange"
        initialValue={{
          type: 'custom',
          value: [],
          start: dayjs().subtract(2, 'day').valueOf(),
          end: dayjs().subtract(1, 'day').valueOf(),
        }}
      >
        <QuickRangeDate config={config} />
      </Form.Item>

      <Button
        onClick={() => {
          console.log(form.getFieldValue());
        }}
      >
        获取
      </Button>
    </Form>
  );
};
