import { Button, Form } from 'antd-mobile';
import React from 'react';

import { CheckList, Modal } from '../../src/index';
import { letterOptions } from '../CheckList/options';

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
      <Form.Header>TriggerPrompt</Form.Header>

      <Form.Item name="person" label="人员" rules={[{ required: true, message: '人员不能为空' }]}>
        <Modal.TriggerPrompt
          title="人员选择"
          submitAction={{
            key: 'submit',
            primary: true,
            onClick: () => Promise.resolve(),
          }}
          popoverTriggerProps={{
            renderTrigger: (changeValue) => (
              <Button color="primary" size="mini">
                人员选择({changeValue?.length ?? 0})
              </Button>
            ),
          }}
        >
          <CheckList.FilterCheckAllCheckList
            filterProps={{ placeholder: '请输入关键字' }}
            style={{ height: 300 }}
            bodyWrapperStyle={{ overflowY: 'auto' }}
            options={letterOptions}
          />
        </Modal.TriggerPrompt>
      </Form.Item>
    </Form>
  );
};
