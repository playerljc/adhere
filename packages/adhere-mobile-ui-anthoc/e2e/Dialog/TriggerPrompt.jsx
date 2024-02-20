import { Button, Form } from 'antd-mobile';
import React, { useRef } from 'react';

import { Dialog } from '../../src/index';
import FilterCheckAllCheckList from '../CheckList/FilterCheckAllCheckList';

import '../../src/index.less';

export default () => {
  const [form] = Form.useForm();

  const person = Form.useWatch('person', form) ?? [];

  const filterCheckAllCheckListRef = useRef();

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
        <Dialog.TriggerPrompt
          title="人员选择"
          submitAction={{
            key: 'submit',
            primary: true,
            onClick: () => {
              const value = filterCheckAllCheckListRef.current.getValue();
              return Promise.resolve(value);
            },
          }}
          popoverTriggerProps={{
            renderTrigger: () => (
              <Button color="primary" size="mini">
                人员选择({person.length})
              </Button>
            ),
          }}
        >
          <FilterCheckAllCheckList ref={filterCheckAllCheckListRef} />
        </Dialog.TriggerPrompt>
      </Form.Item>
    </Form>
  );
};
