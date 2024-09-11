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
    <Form name="skipDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <FormItemCreator
        columns={[
          {
            label: '是否显示下拉',
            name: 'showSelect',
            type: FormItemCreator.RADIO,
            contentProps: {
              options: [
                { label: '是', value: 1 },
                { label: '否', value: 2 },
              ],
              onChange: (e) => setSkip(e.target.value === 2),
            },
          },
          {
            label: '下拉',
            name: 'isSelect',
            type: FormItemCreator.SELECT,
            skip,
            contentProps: {
              options: [
                { label: '下拉1', value: 1 },
                { label: '下拉2', value: 2 },
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
};
