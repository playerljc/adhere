import { Button, Form } from 'antd';
import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

const { TreeEntityValueHOC } = FieldGeneratorToDict;

export default () => {
  const [value, setValue] = useState([]);

  const [form] = Form.useForm();

  const DictComponentName = `SystemTableTreeACPaging${FieldGeneratorToDict.ComponentNames.TableTreeAC.MultiPaging}`;
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
        <TreeEntityValueHOC getTreeDataByDataSource={(_treeData) => _treeData.data}>
          <DictComponent
            placeholder={DictComponentName}
            style={{ width: 800 }}
            dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
            value={value}
            onChange={setValue}
            tablePagingProps={{
              rowKey: 'id',
              columns: [
                {
                  title: '名称',
                  key: 'name',
                  dataIndex: 'name',
                },
                {
                  title: '地址',
                  key: 'address',
                  dataIndex: 'address',
                },
                {
                  title: '籍贯',
                  key: 'nativePlace',
                  dataIndex: 'nativePlace',
                },
                {
                  title: '身高',
                  key: 'height',
                  dataIndex: 'height',
                },
                {
                  title: '体重',
                  key: 'width',
                  dataIndex: 'width',
                },
              ],
            }}
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
