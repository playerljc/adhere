import React from 'react';

import Table from '../../src/table';
import { flatDataSource } from './tableExtMock';

import '../../src/index.less';

const sexMap = {
  0: '女',
  1: '男',
};

const columns = [
  {
    title: '基本信息',
    key: 'basicInfo',
    children: [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: {},
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        width: {},
        render: (v) => sexMap[v] ?? '-',
        renderToString: (v) => sexMap[v] ?? '-',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width: {},
        sorter: true,
      },
      {
        title: '出生年月',
        dataIndex: 'birthday',
        key: 'birthday',
        width: {},
      },
      {
        title: '民族',
        dataIndex: 'nation',
        key: 'nation',
        width: {},
      },
      {
        title: '学历',
        dataIndex: 'education',
        key: 'education',
        width: {},
      },
    ],
  },
  {
    title: '身体指标',
    key: 'bodyInfo',
    children: [
      {
        title: '身高',
        dataIndex: 'height',
        key: 'height',
        width: {},
        sorter: true,
      },
      {
        title: '体重',
        dataIndex: 'width',
        key: 'width',
        width: {},
        sorter: true,
      },
    ],
  },
  {
    title: '地区信息',
    key: 'regionInfo',
    children: [
      {
        title: '籍贯',
        dataIndex: 'homeTown',
        key: 'homeTown',
        width: {},
      },
      {
        title: '现居住地',
        dataIndex: 'address',
        key: 'address',
        width: {},
      },
    ],
  },
  {
    title: '联系方式',
    key: 'contactInfo',
    children: [
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
        width: {},
      },
      {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone',
        width: {},
      },
    ],
  },
  {
    title: '工作信息',
    key: 'jobInfo',
    children: [
      {
        title: '部门',
        dataIndex: 'deptName',
        key: 'deptName',
        width: {},
      },
      {
        title: '公司',
        dataIndex: 'company',
        key: 'company',
        width: {},
        ellipsis: true,
      },
      {
        title: '职位',
        dataIndex: 'position',
        key: 'position',
        width: {},
      },
      {
        title: '薪资',
        dataIndex: 'salary',
        key: 'salary',
        width: {},
        sorter: true,
      },
    ],
  },
  {
    title: '其他',
    key: 'otherInfo',
    children: [
      {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark',
        width: {},
        ellipsis: true,
      },
    ],
  },
];

/**
 * TableExt 表头分组 + 虚拟滚动示例
 */
export default () => {
  return (
    <div style={{ height: '100%', border: '1px solid #ccc' }}>
      <Table.TableExt
        virtual
        fixedHeaderAutoTable
        fixedTableSpaceBetween
        columns={columns}
        dataSource={flatDataSource}
        pagination={false}
      />
    </div>
  );
};
