import { Button, Form } from 'antd-mobile';
import React from 'react';

import { ArrayEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import { CheckList } from '../../src/index';
import { letterOptions } from './options';

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
      <Form.Item
        name="sex"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <CheckList.CheckAllCheckList
            options={letterOptions}
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
