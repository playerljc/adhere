import { Button, Form } from 'antd-mobile';
import React from 'react';

import { PagingEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import { CheckList } from '../../src/index';
import { defaultPaging, pagingOptions } from './options';

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
        <PagingEntityValueHOC>
          <CheckList.PagingCheckList
            multiple
            pagingProps={{
              style: { height: 300 },
              defaultPaging,
              isLocal: false,
              onLoad: (page, limit) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve({
                      data: pagingOptions.slice((page - 1) * limit, page * limit),
                      total: pagingOptions.length,
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
