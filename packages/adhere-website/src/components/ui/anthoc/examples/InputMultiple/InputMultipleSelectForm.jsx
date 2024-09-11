import { Button } from 'antd';
import React, { useEffect } from 'react';

import { Form, InputMultiple } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('inputMultiple', ['111', '222']);
  }, []);

  return (
    <Form
      form={form}
      onFinish={(values) => {
        alert(values);
      }}
    >
      <Form.Item
        name="inputMultiple"
        label="多关键字输入"
        rules={[
          {
            required: true,
            message: '请选择多关键字',
          },
        ]}
      >
        <InputMultiple.Select
          isCheckAll
          selectProps={{
            style: { width: 300 },
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" block type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
