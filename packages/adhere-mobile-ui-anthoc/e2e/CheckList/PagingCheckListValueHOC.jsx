import { Button, Form } from 'antd-mobile';
import React from 'react';

import { ArrayEntityValueHOC, PagingEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

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
        <PagingEntityValueHOC>
          <CheckList.PagingCheckboxCheckList
            // options={options}
            multiple
            pagingProps={{
              style: { height: 300 },
              defaultPaging,
              isLocal: false,
              onLoad: (page, limit) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve({
                      data: options.slice((page - 1) * limit, page * limit),
                      total: options.length,
                    });
                  }, 1000);
                });
              },
            }}
          />
        </PagingEntityValueHOC>
      </Form.Item>
    </Form>
  );
};
