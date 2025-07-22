import { Button, Form } from 'antd';
// import Mock from 'mockjs';
import React, { useEffect } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

const { ArrayEntityValueHOC } = FieldGeneratorToDict;

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    // form.setFieldValue('sex', [
    //   {
    //     label: 'A',
    //     value: 'A',
    //   },
    //   'B',
    // ]);
  }, []);

  // const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard,
      )
    ];

  return (
    <Form
      form={form}
      onFinish={(values) => {
        debugger;
      }}
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
