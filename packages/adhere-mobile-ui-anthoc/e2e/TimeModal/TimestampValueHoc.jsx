import { Button, Form } from 'antd-mobile';
import React from 'react';

import { TimeModal, TimeTimestampValueHOC } from '../../src/index';

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
          type="submit"
          color="primary"
          size="middle"
          onClick={() => {
            const values = form?.getFieldsValue();
            alert(JSON.stringify(values));
          }}
        >
          提交
        </Button>
      }
    >
      <Form.Item name="time" label="时间" rules={[{ required: true, message: '请选择时间' }]}>
        <TimeTimestampValueHOC>
          <TimeModal
            modalTriggerProps={{
              title: '选择时间',
            }}
          />
        </TimeTimestampValueHOC>
      </Form.Item>
    </Form>
  );
};
