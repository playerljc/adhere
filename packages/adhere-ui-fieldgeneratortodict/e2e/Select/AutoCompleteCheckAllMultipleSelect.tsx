import { Form } from 'antd';
import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [form] = Form.useForm();
  // const [value, setValue] = useState([]);

  // const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.SelectAC.CheckAll}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemFilterBookList,
        FieldGeneratorToDict.ComponentNames.SelectAC.CheckAll,
      )
    ];

  return (
    <Form form={form}>
      <Form.Item
        name="sex"
        label="自动补全"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
        // initialValue={[]}
      >
        <DictComponent
          style={{ width: 600 }}
          placeholder={names.SystemFilterBookList}
          // value={value}
          // onChange={setValue}
        >
          {/*{({ originNode, value, onChange, options }) => {
        // return originNode;
        return <Checkbox.Group value={value} onChange={onChange} options={options} />;
      }}*/}
        </DictComponent>
      </Form.Item>
    </Form>
  );
};
