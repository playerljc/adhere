import { Button, Form } from 'antd';
import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

const { TreeEntityValueHOC } = FieldGeneratorToDict;

export default () => {
  const [form] = Form.useForm();

  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemSSQ,
        FieldGeneratorToDict.ComponentNames.Cascader.Standard,
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
        name="cascader"
        label="级联选择"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
      >
        <TreeEntityValueHOC>
          <DictComponent placeholder={names.SystemSSQ} style={{ width: 200 }} />
        </TreeEntityValueHOC>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" block type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
