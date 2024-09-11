import { Button, Form } from 'antd-mobile';
import Mockjs from 'mockjs';
import React from 'react';

import { CheckList, Popup } from '../../src/index';

// import FilterCheckAllCheckList from '../CheckList/FilterCheckAllCheckList';
import '../../src/index.less';

const options = Array.from({ length: 100 }).map((t, _index) => {
  const value = Mockjs.mock('@guid');
  const title = `${Mockjs.mock('@name')}`;

  return {
    title,
    value,
  };
});

export default () => {
  const [form] = Form.useForm();

  // const person = Form.useWatch('person', form) ?? [];

  // const filterCheckAllCheckListRef = useRef();

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
        <Popup.TriggerPrompt
          title="人员选择"
          header={<div>header</div>}
          submitAction={{
            key: 'submit',
            primary: true,
            // onClick: () => {
            //   const value = filterCheckAllCheckListRef.current.getValue();
            //   return Promise.resolve(value);
            // },
            onClick: () => {
              return Promise.resolve();
            },
          }}
          popoverTriggerProps={{
            renderTrigger: (changeValue) => (
              <Button color="primary" size="mini">
                人员选择({changeValue?.length})
              </Button>
            ),
          }}
          position="bottom"
        >
          {/*<FilterCheckAllCheckList
            ref={filterCheckAllCheckListRef}
            style={{ width: '100%', height: 'auto' }}
          />*/}
          <CheckList.FilterCheckAllCheckList
            filterProps={{ placeholder: '请输入关键字' }}
            style={{ height: '100%' }}
            bodyWrapperStyle={{ overflowY: 'auto' }}
            // value={value}
            options={options}
            // onChange={(val) => {
            //   setValue(val);
            //   props.onChange(val);
            // }}
            // onCheckAllChange={setValue}
          />
        </Popup.TriggerPrompt>
      </Form.Item>
    </Form>
  );
};
