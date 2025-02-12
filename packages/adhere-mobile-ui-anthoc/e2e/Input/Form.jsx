import { Button } from 'antd';
import React, { useEffect } from 'react';

import { Form, InputMultiple } from '../../src';

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('inputMultiple', ['111', '222']);
  }, []);

  return (
    <Form
      form={form}
      layout="horizontal"
      footer={
        <Button block type="submit" color="primary" size="large">
          提交
        </Button>
      }
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
        <InputMultiple.Dialog
          isCheckAll
          isFilter
          selectorProps={{
            filterProps: {
              optionFilterProp: 'label',
            },
          }}
        />
      </Form.Item>
    </Form>
  );
};
