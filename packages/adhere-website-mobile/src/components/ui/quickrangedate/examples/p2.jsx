import { Button, Form } from 'antd-mobile';
import dayjs from 'dayjs';
import React from 'react';

import { MobileQuickRangeDate } from '@baifendian/adhere';

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
    <Form
      form={form}
      layout="horizontal"
      footer={
        <Button
          block
          type="submit"
          color="primary"
          size="middle"
          onClick={() => {
            const values = form?.getFieldsValue();
            alert(JSON.stringify(values));
          }}
        >
          提交
        </Button>
      }
    >
      <Form.Item
        label="时间范围"
        name="dateRange"
        initialValue={{
          type: 'custom',
          value: [],
          start: dayjs().subtract(2, 'day').valueOf(),
          end: dayjs().subtract(1, 'day').valueOf(),
        }}
      >
        <MobileQuickRangeDate config={config} />
      </Form.Item>
    </Form>
  );
};
