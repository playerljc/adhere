import { Button, Form } from 'antd';
// import Mock from 'mockjs';
import React, { useEffect } from 'react';

import FieldGeneratorToDict from '../../src/index';

const { AsyncTreeEntityValueHOC } = FieldGeneratorToDict;

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

  const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.FlatStandard}`;
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
        <AsyncTreeEntityValueHOC>
          <DictComponent placeholder={DictComponentName} style={{ width: 350 }} />
        </AsyncTreeEntityValueHOC>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" block type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
