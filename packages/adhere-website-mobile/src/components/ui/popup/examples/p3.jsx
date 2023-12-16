import { Button, Form } from 'antd-mobile';
import React, { useRef } from 'react';

import { Popup } from '@baifendian/adhere';

import SelectPerson from '../SelectPerson';

export default () => {
  const personSelectRef = useRef();

  const [form] = Form.useForm();
  const watchPerson = Form.useWatch('person', form);

  return (
    <Form
      layout="horizontal"
      form={form}
      footer={
        <Button
          block
          type="submit"
          color="primary"
          size="large"
          onClick={() => {
            form
              .validateFields()
              .then((values) => {
                alert(values);
              })
              .catch((error) => {
                console.log('error', error);
              });
          }}
        >
          提交
        </Button>
      }
    >
      <Form.Item
        label="人员选择"
        name="person"
        childElementPosition="right"
        // arrow
        rules={[
          {
            required: true,
            message: '请选择人员',
          },
        ]}
      >
        <Popup.TriggerPrompt
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
        </Popup.TriggerPrompt>
      </Form.Item>
    </Form>
  );
};
