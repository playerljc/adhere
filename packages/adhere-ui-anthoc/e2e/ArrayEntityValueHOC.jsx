import { Button } from 'antd';
import Mock from 'mockjs';
import React, { useEffect, useState } from 'react';

import AutoComplete from '../src/auto-complete';
import Checkbox from '../src/checkbox';
import Form from '../src/form';
// import Select from '../src/multiple-select/index';
import { ArrayEntityValueHOC } from '../src/index';
import Select from '../src/select/Select';
import Table from '../src/table';
import Tag from '../src/tag';
import Transfer from '../src/transfer';

const tableData = Array.from({ length: 100 }).map(() => {
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
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('sex', [
      {
        label: 'A',
        value: 'A',
      },
      'B',
    ]);
  }, []);

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
          {/*<Select
            onChange={(val, ...params) => {
              console.log(val, params);
            }}
            options={[
              {
                label: '男',
                value: 1,
              },
              {
                label: '女',
                value: 2,
              },
            ]}
          />*/}

          {/*<Checkbox.HorizontalCheckAllCheckbox
            options={[
              {
                label: '男',
                value: 1,
              },
              {
                label: '女',
                value: 2,
              },
            ]}
          />*/}

          {/*<Checkbox.CheckboxSelect
            placeholder="A-Z"
            style={{ width: 200 }}
            options={Array.from({ length: 26 }).map((t, _index) => {
              const letter = String.fromCharCode(97 + _index).toUpperCase();

              return {
                label: letter,
                value: letter,
              };
            })}
          />*/}

          {/*<Table.TableSelect
            mode="multiple"
            style={{ width: 600 }}
            placeholder="TableSelect"
            options={tableData}
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
            }}
          />*/}

          <Transfer.TransferSelect
            placeholder="A-Z"
            style={{ width: 410 }}
            options={Array.from({ length: 26 }).map((t, _index) => {
              const letter = String.fromCharCode(97 + _index).toUpperCase();

              return {
                label: letter,
                value: letter,
              };
            })}
          />

          {/*<Tag.TagSelect
            mode="multiple"
            style={{ width: 200 }}
            placeholder="A-Z"
            options={Array.from({ length: 26 }).map((t, _index) => {
              const letter = String.fromCharCode(97 + _index).toUpperCase();

              return {
                value: letter,
                label: letter,
                children: letter,
              };
            })}
          />*/}

          {/*<AutoComplete.AutoCompleteSelectInput
            placeholder="control mode"
            style={{ width: 200 }}
            options={Array.from({ length: 26 }).map((t, _index) => {
              const letter = String.fromCharCode(97 + _index).toUpperCase();

              return {
                label: letter,
                value: `${97 + _index}`,
              };
            })}
          />*/}
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
