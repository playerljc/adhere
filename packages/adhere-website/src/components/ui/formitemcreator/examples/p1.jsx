import { Button, Form } from 'antd';
import React from 'react';

import { FormItemCreator } from '@baifendian/adhere';

export default () => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
  };

  const onFinish = (values) => {
    console.log('success', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('failed', errorInfo);
  };

  return (
    <Form name="textDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <FormItemCreator
        columns={[
          {
            label: '就是一个查看',
            name: 'name',
            initialValue: '我就是一个查看',
            type: FormItemCreator.TEXT,
          },
        ]}
        layout={layout}
      />
      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
