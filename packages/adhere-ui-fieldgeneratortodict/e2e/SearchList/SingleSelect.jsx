import React, { useState } from 'react';

import SearchList from '@baifendian/adhere-ui-searchlist';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';
import sage from '../saga';

const DictComponent = FieldGeneratorToDict.Components[
  FieldGeneratorToDict.genDictComponentName(
    // @ts-ignore
    names.SystemList,
    FieldGeneratorToDict.ComponentNames.SearchList.SingleSelect,
  )
]({
  override: {
    getColumns() {
      return [
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
          $search: {
            visible: true,
            type: 'dict',
            dictName: FieldGeneratorToDict.genDictComponentName(
              // @ts-ignore
              names.SystemTestSex,
              FieldGeneratorToDict.ComponentNames.Select.Standard,
            ),
            props: {
              dropdownStyle: {
                zIndex: 19999,
              },
            },
          },
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description',
          width: 150,
          $search: {
            type: 'input',
            visible: true,
          },
        },
        {
          title: '内容',
          dataIndex: 'content',
          key: 'content',
          width: 150,
          $search: {
            type: 'input',
            visible: true,
          },
        },
      ];
    },
  },
  SearchClass: SearchList,
  FieldGeneratorToDict,
  sage,
});

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <DictComponent
      placeholder="SingleSelect"
      style={{ width: 200 }}
      dropdownStyle={{ width: 1000, height: 500, overflow: 'auto', padding: '20px 20px 0 20px' }}
      value={value}
      onChange={setValue}
    />
  );
};
