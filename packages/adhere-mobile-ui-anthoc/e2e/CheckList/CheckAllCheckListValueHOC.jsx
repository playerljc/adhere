import { Button, Form } from 'antd-mobile';
import React, { useState } from 'react';

import { ArrayEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import { CheckList } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    title: letter,
    value: letter,
  };
});

export default () => {
  const [value, setValue] = useState([]);

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
      <Form.Item
        name="sex"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
        // initialValue={[]}
      >
        <ArrayEntityValueHOC>
          <CheckList.CheckAllCheckList
            value={value}
            options={options}
            onChange={setValue}
            onCheckAllChange={setValue}
            checkAllLabel={(_value) => (
              <div>
                <span>{!!_value.length ? `(${_value.length})` : null}</span>
                <span>全选</span>
              </div>
            )}
          />
        </ArrayEntityValueHOC>
      </Form.Item>
    </Form>
  );
};
