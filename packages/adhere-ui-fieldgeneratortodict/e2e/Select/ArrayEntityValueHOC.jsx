import { Button, Form, Select } from 'antd';
// import Mock from 'mockjs';
import React, { useEffect } from 'react';

import FieldGeneratorToDict from '../../src/index';

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

  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

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
          <DictComponent placeholder={DictComponentName} style={{ width: 500 }} />
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
