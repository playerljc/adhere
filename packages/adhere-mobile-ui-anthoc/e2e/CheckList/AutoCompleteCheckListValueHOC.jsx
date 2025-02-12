import { Button, Form } from 'antd-mobile';
import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';
import Mock from '@baifendian/adhere-mock';
import { ArrayEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import { CheckList } from '../../src/index';

import '../../src/index.less';

const { Book } = Mock;

const book = Book.map((t) => {
  const id = Mockjs.mock('@guid');

  return {
    ...t,
    value: id,
    title: t.t,
    id,
  };
});

export default () => {
  const [searchDataSource, setSearchDataSource] = useState([]);

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
      >
        <ArrayEntityValueHOC optionsProp="searchDataSource">
          <CheckList.AutoCompleteCheckList
            placeholder="请输入关键字"
            style={{ height: '100%' }}
            value={value}
            loadData={(_kw) => {
              if (!_kw) {
                setSearchDataSource([]);
                return;
              }

              const handler = MobileGlobalIndicator.show();

              setTimeout(() => {
                setSearchDataSource(book.filter((_book) => _book.t.indexOf(_kw) !== -1));

                MobileGlobalIndicator.hide(handler);
              }, 500);
            }}
            onChange={(_value) => {
              setValue(_value);
            }}
            searchDataSource={searchDataSource}
            checkListProps={{
              multiple: true,
            }}
          />
        </ArrayEntityValueHOC>
      </Form.Item>
    </Form>
  );
};
