import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import sage from '../saga';

const DictComponent = FieldGeneratorToDict.Components[
  `SystemTable${FieldGeneratorToDict.ComponentNames.SearchTable.Standard}`
]({
  override: {
    getColumns() {
      return this.applySuper('getColumns', [
        [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width: 150,
            align: 'left',
            $search: {
              type: 'input',
              visible: true,
            },
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
            $search: {
              type: 'rangePicker',
              visible: true,
              startName: 'birthDayStart',
              endName: 'birthDayEnd',
            },
          },
          {
            title: '现居住地',
            dataIndex: 'address',
            key: 'address',
            width: 300,
          },
        ],
      ]);
    },
  },
  sage,
});

export default () => {
  return <DictComponent />;
};
