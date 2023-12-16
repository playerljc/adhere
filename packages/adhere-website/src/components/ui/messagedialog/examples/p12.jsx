import { Button, Form } from 'antd';
import React, { useRef, useState } from 'react';

import { MessageDialog } from '@baifendian/adhere';

import SelectPerson from '../SelectPerson';

export default () => {
  const personSelectRef = useRef();
  const [form] = Form.useForm();
  const watchPerson = Form.useWatch('person', form);

  return (
    <Form
      name="PersonForm"
      form={form}
      onFinish={(values) => {
        alert(values);
      }}
    >
      <Form.Item
        label="人员选择"
        name="person"
        rules={[
          {
            required: true,
            message: '请选择人员',
          },
        ]}
      >
        <MessageDialog.TriggerPrompt
          okText="确认"
          renderTrigger={() => <Button type="primary">选取({watchPerson?.length})</Button>}
          modalConfig={{
            config: {
              title: '人员选择',
            },
          }}
          onSubmit={() =>
            new Promise((resolve) => {
              resolve(personSelectRef.current.getValues());
            })
          }
        >
          <SelectPerson ref={personSelectRef} />
        </MessageDialog.TriggerPrompt>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
