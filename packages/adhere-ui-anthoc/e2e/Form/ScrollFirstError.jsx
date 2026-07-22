import React from 'react';

import { Form, Input } from '../../src';

export default () => {
  const [form] = Form.useForm();

  return (
    <div style={{ height: 280, overflowY: 'auto', border: '1px solid #f0f0f0', padding: 16 }}>
      <Form
        form={form}
        name="scrollFirstError"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        style={{ maxWidth: 600 }}
        scrollToFirstError
        scrollMarginTop={24}
        enableShakeAnimation
        onFinish={(values) => {
          console.log('onFinish', values);
        }}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <Form.Item
            key={index}
            label={`字段${index + 1}`}
            name={`field${index + 1}`}
            rules={[
              {
                required: true,
                message: `请输入字段${index + 1}`,
              },
            ]}
          >
            <Input placeholder={`field${index + 1}`} />
          </Form.Item>
        ))}

        <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
          <Form.SubmitButton form={form} type="primary" block>
            Submit（校验失败会滚动到首个错误）
          </Form.SubmitButton>
        </Form.Item>
      </Form>
    </div>
  );
};
