import { Button, Form } from 'antd-mobile';
import React, { useMemo, useRef } from 'react';

import { Modal } from '@baifendian/adhere-mobile-ui-anthoc';

import FilterCheckAllCheckList from '../CheckList/FilterCheckAllCheckList';

export default () => {
  const [form] = Form.useForm();

  const person = Form.useWatch('person', form) ?? [];

  const filterCheckAllCheckListRef = useRef();

  const actions = useMemo(
    () => [
      {
        key: 'submit',
        text: '提交',
        primary: true,
        onClick: () => {
          const value = filterCheckAllCheckListRef.current.getValue();
          return Promise.resolve(value);
        },
      },
      {
        key: 'close',
        text: '关闭',
        onClick: () => {
          return Promise.resolve();
        },
      },
    ],
    [],
  );

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
      <Form.Header>Trigger</Form.Header>

      <Form.Item name="person" label="人员" rules={[{ required: true, message: '人员不能为空' }]}>
        <Modal.TriggerPrompt
          title="人员选择"
          actions={actions}
          popoverTriggerProps={{
            renderTrigger: () => (
              <Button color="primary" size="mini">
                人员选择({person.length})
              </Button>
            ),
          }}
        >
          <FilterCheckAllCheckList ref={filterCheckAllCheckListRef} />
        </Modal.TriggerPrompt>
      </Form.Item>
    </Form>
  );
};
