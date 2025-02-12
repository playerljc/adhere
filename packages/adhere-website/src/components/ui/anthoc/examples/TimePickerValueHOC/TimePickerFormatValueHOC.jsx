import { Button } from 'antd';
import React, { useEffect } from 'react';

import { Form, TimePickerFormatValueHOC } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('createTime', '23:59:59');
  }, []);

  return (
    <Form
      form={form}
      labelAlign="right"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 21 }}
      onFinish={(values) => {
        console.log('values', values);
        alert(JSON.stringify(values));
      }}
    >
      <Form.Item
        name="createTime"
        label="开店时间"
        rules={[
          {
            required: true,
            message: '请选择开店时间',
          },
        ]}
      >
        <TimePickerFormatValueHOC />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button htmlType="submit" block type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
