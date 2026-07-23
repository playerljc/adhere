import React, { useEffect } from 'react';

import { Button, Form, InputMultiple } from '../../src';

import '../../src/index.less';

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('inputMultiple', ['React', 'Vue']);
  }, []);

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
          options={['React', 'Vue', 'Angular']}
          selectorProps={{
            filterProps: {
              placeholder: '请输入关键字',
            },
          }}
        />
      </Form.Item>
    </Form>
  );
};
