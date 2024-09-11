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
    <Form name="uploadDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <FormItemCreator
        columns={[
          {
            label: '上传头像',
            name: 'image',
            type: FormItemCreator.UPLOAD,
            contentProps: {
              // antd Upload支持的属性
              // children 是upload组件包括的组件
              children: <Button>Upload</Button>,
            },
          },
          {
            label: '自己定义的表单项',
            name: 'my',
            type: FormItemCreator.DEFINE,
            content: <div>我就是自定义的</div>,
            contentProps: {
              // 传给content的属性
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
