import { Button, Form } from 'antd-mobile';
import Mockjs from 'mockjs';
import React, { useState } from 'react';

import { MobileGlobalIndicator } from '@baifendian/adhere';
import { ArrayEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import { CheckList } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 100 }).map(() => {
  const value = Mockjs.mock('@guid');

  return {
    value,
    title: Mockjs.mock('@name'),
    id: value,
  };
});

export default () => {
  const [searchDataSource, setSearchDataSource] = useState([]);
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
            loadData={(_kw) => {
              if (!_kw) {
                setSearchDataSource([]);
                return;
              }

              const handler = MobileGlobalIndicator.show();

              setTimeout(() => {
                setSearchDataSource(options.filter((t) => t.title.indexOf(_kw) !== -1));
                MobileGlobalIndicator.hide(handler);
              }, 500);
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
