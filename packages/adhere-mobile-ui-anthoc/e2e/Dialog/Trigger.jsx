import { Button, Form } from 'antd-mobile';
import React, { useMemo } from 'react';

import { CheckList, Dialog } from '../../src/index';
import { letterOptions } from '../CheckList/options';

import '../../src/index.less';

export default () => {
  const [form] = Form.useForm();

  const person = Form.useWatch('person', form) ?? [];

  const actions = useMemo(
    () => [
      {
        key: 'submit',
        text: '提交',
        primary: true,
        onClick: () => Promise.resolve(),
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
        <Dialog.Trigger
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
          <CheckList.FilterCheckAllCheckList
            filterProps={{ placeholder: '请输入关键字' }}
            style={{ height: 300 }}
            bodyWrapperStyle={{ overflowY: 'auto' }}
            options={letterOptions}
          />
        </Dialog.Trigger>
      </Form.Item>
    </Form>
  );
};
