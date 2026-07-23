import React from 'react';

import { Button, Form, Input } from '../../src';

import '../../src/index.less';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="horizontal"
      footer={
        <Button
          block
          color="primary"
          size="middle"
          onClick={() => {
            form
              .validateFields()
              .then((values) => {
                alert(JSON.stringify(values));
              })
              .catch(() => {});
          }}
        >
          提交
        </Button>
      }
    >
      <Form.Item
        name="custom"
        label="自定义包装"
        rules={[
          {
            required: true,
            message: '请输入内容',
          },
        ]}
      >
        <Form.CustomWrapperFormItem>
          {({ value, onChange }) => (
            <Input
              value={value}
              onChange={(val) => onChange?.(val)}
              placeholder="CustomWrapperFormItem"
            />
          )}
        </Form.CustomWrapperFormItem>
      </Form.Item>
    </Form>
  );
};
