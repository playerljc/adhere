import { Button } from 'antd';
import Mock from 'mockjs';
import React, { useContext, useEffect } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { Form, PagingEntityValueHOC, Table } from '@baifendian/adhere-ui-anthoc';

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

const columns = [
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
];

export default () => {
  const [form] = Form.useForm();

  const { media } = useContext(ConfigProvider.Context);

  function loadData(page, limit) {
    console.log('paging', page, limit);

    return new Promise((resolve) => {
      resolve({
        totalCount: dataSource.length,
        data: dataSource.slice((page - 1) * limit, page * limit),
      });
    });
  }

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
        <PagingEntityValueHOC>
          <Table.TablePaging
            isSuspenseAsync={false}
            pagingProps={{
              loadData,
              defaultLimit: 5,
            }}
            tablePagingProps={{
              rowKey: 'id',
              columns,
            }}
          />
        </PagingEntityValueHOC>
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
        <PagingEntityValueHOC>
          <Table.TablePagingSelect
            placeholder="RadioPagingList"
            pagingProps={{
              loadData,
              defaultLimit: 5,
            }}
            tablePagingProps={{
              rowKey: 'id',
              columns,
            }}
          />
        </PagingEntityValueHOC>
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
        <PagingEntityValueHOC>
          <Table.TablePaging
            mode="multiple"
            isSuspenseAsync={false}
            pagingProps={{
              loadData,
              defaultLimit: 5,
            }}
            tablePagingProps={{
              rowKey: 'id',
              columns,
            }}
          />
        </PagingEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex3"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <PagingEntityValueHOC>
          <Table.TablePagingSelect
            mode="multiple"
            placeholder="RadioPagingList"
            pagingProps={{
              loadData,
              defaultLimit: 5,
            }}
            tablePagingProps={{
              rowKey: 'id',
              columns,
            }}
          />
        </PagingEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex4"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <PagingEntityValueHOC>
          <Table.AutoCompleteTablePagingSelect
            mode="multiple"
            placeholder="AutoCompleteTablePagingSelect"
            dropdownStyle={{
              maxHeight: Util.pxToRem(300, media.designWidth, media),
              overflow: 'auto',
            }}
            pagingProps={{
              loadData,
              defaultLimit: 5,
            }}
            tablePagingProps={{
              rowKey: 'id',
              columns,
            }}
          />
        </PagingEntityValueHOC>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button htmlType="submit" block type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
