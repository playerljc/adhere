import React from 'react';

import SearchList from '@baifendian/adhere-ui-searchlist';

import FieldGeneratorToDict from '../../src/index';
import sage from '../saga';

const DictComponent = FieldGeneratorToDict.Components[
  `SystemList${FieldGeneratorToDict.ComponentNames.SearchList.Standard}`
]({
  override: {
    getColumns() {
      return this.applySuper('getColumns', [
        [
          {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            width: 150,
            align: 'left',
            $search: {
              type: 'input',
              visible: true,
            },
          },
          {
            title: '子标题',
            dataIndex: 'subTitle',
            key: 'subTitle',
            width: 150,
          },
          {
            title: '描述',
            dataIndex: 'description',
            key: 'description',
            width: 150,
          },
          {
            title: '内容',
            dataIndex: 'content',
            key: 'content',
            width: 150,
          },
        ],
      ]);
    },
  },
  SearchClass: SearchList,
  sage,
});

export default () => {
  return <DictComponent />;
};
