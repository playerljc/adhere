import { Button, Form } from 'antd';
// import Mock from 'mockjs';
import React, { useEffect } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

const { TreeEntityValueHOC } = FieldGeneratorToDict;

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

  // const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.TreeDynamic.Flat}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemDepartmentAll,
        FieldGeneratorToDict.ComponentNames.TreeDynamic.Flat,
      )
    ];

  return (
    <Form
      form={form}
      onFinish={(values) => {
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
          <DictComponent placeholder={names.SystemDepartmentAll} style={{ width: 200 }} />
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
