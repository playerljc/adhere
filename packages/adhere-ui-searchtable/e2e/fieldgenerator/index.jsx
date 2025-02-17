import React from 'react';

import sage from '../saga';
import { searchTableClassFactory } from './Util';

const SearchTable = searchTableClassFactory({
  dictName: 'SystemTestTablePagination',
  override: {
    getColumns() {
      return this.__proto__.getColumns([
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          width: 150,
          align: 'left',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          key: 'sex',
          $tip: '性别',
          width: 150,
        },
        {
          title: '身高',
          dataIndex: 'height',
          key: 'height',
          align: 'center',
          width: 150,
          sorter: true,
          sortOrder: this.sortOrder('height'),
        },
        {
          title: '体重',
          dataIndex: 'width',
          key: 'width',
          align: 'center',
          width: 150,
          sorter: true,
          sortOrder: this.sortOrder('width'),
        },
        {
          title: '籍贯',
          dataIndex: 'homeTown',
          key: 'homeTown',
          ellipsis: true,
          width: 200,
        },
        {
          title: '出生年月',
          dataIndex: 'birthday',
          key: 'birthday',
          align: 'center',
          width: 200,
          sorter: true,
          sortOrder: this.sortOrder('birthday'),
        },
        {
          title: '现居住地',
          dataIndex: 'address',
          key: 'address',
          width: 300,
        },
      ]);
    },
  },
  sage,
});

export default () => {
  return <SearchTable />;
};
