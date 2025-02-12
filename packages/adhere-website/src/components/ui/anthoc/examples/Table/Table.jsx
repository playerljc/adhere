import Mock from 'mockjs';
import React from 'react';

import { Table } from '@baifendian/adhere-ui-anthoc';

const dataSource = Array.from({ length: 100 }).map(() => ({
  id: Mock.mock('@guid'),
  name: Mock.mock('@name'),
  address: Mock.mock('@region'),
  height: Mock.mock('@integer(60, 100)'),
  width: Mock.mock('@integer(60, 100)'),
  nativePlace: Mock.mock('@city'),
}));

export default () => {
  return (
    <Table
      columns={[
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
      ]}
      dataSource={dataSource}
    />
  );
};
