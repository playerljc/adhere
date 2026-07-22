import { Form } from 'antd';
import React from 'react';

import FieldGeneratorToDict from '../../src';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [form] = Form.useForm();

  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemFilterBookList,
        FieldGeneratorToDict.ComponentNames.SelectAC.CheckAll,
      )
    ];

  return (
    <Form
      form={form}
      onFinish={(values) => {
        console.log('onFinish', values);
      }}
    >
      <Form.Item
        name="books"
        label="图书"
        rules={[
          {
            required: true,
            message: '请选择图书',
          },
        ]}
      >
        <DictComponent style={{ width: 600 }} placeholder={names.SystemFilterBookList} />
      </Form.Item>
    </Form>
  );
};
