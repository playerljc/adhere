// import Mockjs from 'mockjs';
import { Button, Form } from 'antd-mobile';
import React from 'react';

import { ArrayEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

// import Mock from '@baifendian/adhere-mock';
import { CheckList } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 100 }).map((t, _index) => {
  return {
    title: `${_index + 1}`,
    value: _index + 1,
  };
});

const defaultPaging = {
  limit: 20,
};

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
        // initialValue={[]}
      >
        <ArrayEntityValueHOC>
          <CheckList.PagingCheckList
            options={options}
            multiple
            pagingProps={{
              style: { height: 300 },
              defaultPaging,
            }}
          />
        </ArrayEntityValueHOC>
      </Form.Item>
    </Form>
  );
};
