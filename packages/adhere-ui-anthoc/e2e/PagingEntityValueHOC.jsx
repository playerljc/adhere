import { Avatar, Button } from 'antd';
import Mock from 'mockjs';
import React, { useEffect, useState } from 'react';

import AutoComplete from '../src/auto-complete';
import Checkbox from '../src/checkbox';
import Form from '../src/form';
// import Select from '../src/multiple-select/index';
import { PagingEntityValueHOC } from '../src/index';
import List from '../src/list';
import Select from '../src/select/Select';
import Table from '../src/table';
import Tag from '../src/tag';
import Transfer from '../src/transfer';

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

  // const [options, setOptions] = useState([]);

  function loadData(page, limit) {
    console.log('paging', page, limit);

    return new Promise((resolve) => {
      resolve({
        totalCount: dataSource.length,
        data: dataSource.slice((page - 1) * limit, page * limit),
      });
    });
  }

  useEffect(() => {
    form.setFieldValue('sex', [dataSource[0], dataSource[1], dataSource[5]]);
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
        <PagingEntityValueHOC>
          {/*<Table.TablePaging
            mode="multiple"
            isSuspenseAsync={false}
            pagingProps={{
              loadData,
              defaultLimit: 5,
            }}
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
          />*/}

          <Table.TablePagingSelect
            mode="multiple"
            style={{ width: 600 }}
            placeholder="RadioPagingList"
            pagingProps={{
              loadData,
              defaultLimit: 5,
            }}
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
        </PagingEntityValueHOC>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" block type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
