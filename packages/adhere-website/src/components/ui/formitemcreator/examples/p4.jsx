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
    <Form name="switchDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <FormItemCreator
        columns={[
          {
            label: '开关',
            name: 'switch',
            type: FormItemCreator.SWITCH,
            contentProps: {
              // antd switch支持的属性
              checkedChildren: '开启',
            },
          },
          {
            label: '滑动条',
            name: 'slider',
            type: FormItemCreator.SLIDER,
            contentProps: {
              // antd slider支持的属性
              range: true,
            },
          },
          {
            label: '评分',
            name: 'rate',
            type: FormItemCreator.RATE,
            contentProps: {
              // antd rate支持的属性
              allowHalf: true,
            },
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
