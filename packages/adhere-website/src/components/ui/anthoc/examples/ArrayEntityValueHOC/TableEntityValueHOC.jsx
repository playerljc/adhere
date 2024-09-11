import { Button } from 'antd';
import Mock from 'mockjs';
import React, { useContext, useEffect } from 'react';
import { useImmer } from 'use-immer';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { ArrayEntityValueHOC, Form, Table } from '@baifendian/adhere-ui-anthoc';

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
  const [form] = Form.useForm();

  const [value, setValue] = useImmer({
    options: [],
    value: [],
  });

  const { media } = useContext(ConfigProvider.Context);

  useEffect(() => {}, []);

  return (
    <Form
      form={form}
      labelAlign="right"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 21 }}
      onFinish={(values) => {
        console.log('values', values);
        alert(JSON.stringify(values));
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
      >
        <ArrayEntityValueHOC>
          <Table.TableSelect
            placeholder="TableSelect"
            options={dataSource}
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
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex1"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Table.TableSelect
            mode="multiple"
            placeholder="TableSelect"
            options={dataSource}
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
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex2"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Table.AutoCompleteTableSelect
            // mode="multiple"
            placeholder="AutoCompleteTableSelect"
            dropdownStyle={{
              maxHeight: Util.pxToRem(300, media.designWidth, media),
              overflow: 'auto',
            }}
            options={value.options}
            loadData={(_kw) =>
              new Promise((resolve) => {
                if (!_kw) {
                  setValue((draft) => {
                    draft.options = [];
                  });
                  resolve();
                  return;
                }

                setTimeout(() => {
                  const result = [...dataSource].filter(
                    (_record) => _record.label.indexOf(_kw) !== -1,
                  );

                  setValue((draft) => {
                    draft.options = result;
                  });

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

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button htmlType="submit" block type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
