import { Button, Form } from 'antd-mobile';
import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';
import { CheckList } from '@baifendian/adhere-mobile-ui-anthoc';
import { ArrayEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

const options = Array.from({ length: 1000 }).map((t, _index) => {
  const value = Mockjs.mock('@guid');
  const title = `${Mockjs.mock('@name')}1`;

  return {
    value,
    title,
    id: value,
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
          <CheckList.AutoCompletePagingCheckList
            placeholder="请输入关键字"
            style={{ height: '100%' }}
            bodyStyle={{ overflowY: 'hidden' }}
            value={value}
            loadData={(_kw) => {
              if (!_kw) {
                setSearchDataSource([]);
                return;
              }

              const handler = MobileGlobalIndicator.show();

              setTimeout(() => {
                setSearchDataSource(options.filter((_option) => _option.title.indexOf(_kw) !== -1));

                MobileGlobalIndicator.hide(handler);
              }, 500);
            }}
            onChange={(_value) => {
              setValue(_value);
            }}
            searchDataSource={searchDataSource}
            pagingCheckListProps={{
              multiple: true,
              pagingProps: {
                style: { height: 300 },
              },
            }}
          />
        </ArrayEntityValueHOC>
      </Form.Item>
    </Form>
  );
};
