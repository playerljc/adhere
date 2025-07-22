import { Button, Form } from 'antd';
import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

const { TreeEntityValueHOC } = FieldGeneratorToDict;

export default () => {
  const [form] = Form.useForm();

  const [value, setValue] = useState(undefined);

  // const DictComponentName = `SystemTreeACFlat${FieldGeneratorToDict.ComponentNames.TreeAC.Multi}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTreeACFlat,
        FieldGeneratorToDict.ComponentNames.TreeAC.Multi,
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
        <TreeEntityValueHOC>
          <DictComponent
            placeholder={names.SystemTreeACFlat}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            style={{ width: 300 }}
            treeDataSimpleMode
            value={value}
            onChange={setValue}
          />
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
