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
    <Form name="inputDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <FormItemCreator
        columns={[
          {
            label: '输入框',
            name: 'name',
            type: FormItemCreator.INPUT,
            rules: [{ required: true, message: '请输入' }],
            contentProps: { placeholder: '请输入关键词' },
          },
          {
            label: '密码框',
            name: 'password',
            type: FormItemCreator.PASSWORD,
            rules: [{ required: true, message: '请输入' }],
            contentProps: { placeholder: '请输入密码' },
          },
          {
            label: '文本域',
            name: 'des',
            type: FormItemCreator.TEXTAREA,
            contentProps: { rows: 8 },
          },
          {
            label: '数值输入框',
            name: 'number',
            type: FormItemCreator.NUMBER,
            contentProps: { min: 10 },
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
