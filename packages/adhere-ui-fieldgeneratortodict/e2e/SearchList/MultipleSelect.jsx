import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import sage from '../saga';

const DictComponent = FieldGeneratorToDict.Components[
  `SystemList${FieldGeneratorToDict.ComponentNames.SearchList.MultipleSelect}`
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
  sage,
});

export default () => {
  const [value, setValue] = React.useState([]);

  return (
    <DictComponent
      placeholder="MultipleSelect"
      style={{ width: 600 }}
      dropdownStyle={{ width: 2000, height: 500, overflow: 'auto', padding: '20px 20px 0 20px' }}
      value={value}
      onChange={setValue}
    />
  );
};
