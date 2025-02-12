import { Button } from 'antd';
import Mock from 'mockjs';
import React, { useState } from 'react';

import Form from '../../src/form';
import { ArrayEntityValueHOC } from '../../src/index';
import Table from '../../src/table';

const dataSource = Array.from({ length: 100 }).map(() => {
  const label = Mock.mock('@name');
  const value = Mock.mock('@guid');

  return {
    id: value,
    name: label,
    address: Mock.mock('@region'),
    height: Mock.mock('@integer(60, 100)'),
    width: Mock.mock('@integer(60, 100)'),
    nativePlace: Mock.mock('@city'),
    label,
    value,
  };
});

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState(undefined);

  const [form] = Form.useForm();

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
          <Table.AutoCompleteTableSelect
            placeholder="AutoCompleteTableSelect"
            style={{ width: 600 }}
            dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
            mode="multiple"
            value={value}
            options={options}
            onChange={setValue}
            loadData={(_kw) =>
              new Promise((resolve) => {
                if (!_kw) {
                  setOptions([]);
                  resolve();
                  return;
                }

                setTimeout(() => {
                  const result = [...dataSource].filter(
                    (_record) => _record.label.indexOf(_kw) !== -1,
                  );

                  setOptions(result);

                  resolve();
                }, 500);
              })
            }
            tableProps={{
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
              pagination: false,
            }}
          />
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
