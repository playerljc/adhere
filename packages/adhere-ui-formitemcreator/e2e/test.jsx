import { Button, Form } from 'antd';
import React from 'react';

import FormItemCreator from '../src/index';

import '../src/index.less';

const onFinish = (values) => {
  console.log('success', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('failed', errorInfo);
};

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

export default () => (
  <Form name="textDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
    <FormItemCreator
      columns={[
        {
          label: '就是一个查看',
          name: 'name',
          initialValue: '我就是一个查看',
          type: FormItemCreator.TEXT,
        },
        {
          label: '这是一个可操作tag',
          name: 'hobby',
          type: FormItemCreator.TAG,
          initialValue: ['篮球'],
          contentProps: {
            disabled: true,
          },
        },
        {
          label: '这是一个autocomplete的select',
          name: '打标签',
          type: FormItemCreator.SELECT,
          contentProps: {
            autoComplete: true,
            options: [
              { label: '标签1', value: '1' },
              { label: '标签2', value: '2' },
            ],
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
