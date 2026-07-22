import { Button, Form } from 'antd';
import React, { useEffect } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

const { ArrayEntityValueHOC } = FieldGeneratorToDict;

export default () => {
  const [form] = Form.useForm();

  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.SelectDynamic.Multi,
      )
    ];

  useEffect(() => {
    form.setFieldValue('books', [
      {
        label: 'A',
        value: 'A',
      },
      'B',
    ]);
  }, [form]);

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
        <ArrayEntityValueHOC>
          <DictComponent placeholder={names.SystemBookCatalogDynamic} style={{ width: 500 }} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" block type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
