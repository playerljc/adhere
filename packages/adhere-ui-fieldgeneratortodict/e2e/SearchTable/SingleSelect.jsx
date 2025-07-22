import React from 'react';

import SearchTable from '@baifendian/adhere-ui-searchtable';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';
import sage from '../saga';

// const DictComponentName = `SystemTable${FieldGeneratorToDict.ComponentNames.SearchTable.SingleSelect}`;
const DictComponent = FieldGeneratorToDict.Components[
  FieldGeneratorToDict.genDictComponentName(
    // @ts-ignore
    names.SystemTable,
    FieldGeneratorToDict.ComponentNames.SearchTable.SingleSelect,
  )
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
            title: '身高',
            dataIndex: 'height',
            key: 'height',
            align: 'center',
            width: 150,
            sorter: true,
            sortOrder: this.sortOrder('height'),
            $search: {
              type: 'input',
              visible: true,
            },
          },
          {
            title: '体重',
            dataIndex: 'width',
            key: 'width',
            align: 'center',
            width: 150,
            sorter: true,
            sortOrder: this.sortOrder('width'),
            $search: {
              type: 'input',
              visible: true,
            },
          },
          {
            title: '籍贯',
            dataIndex: 'homeTown',
            key: 'homeTown',
            ellipsis: true,
            width: 200,
            $search: {
              type: 'input',
              visible: true,
            },
          },
          // {
          //   title: '出生年月',
          //   dataIndex: 'birthday',
          //   key: 'birthday',
          //   align: 'center',
          //   width: 200,
          //   sorter: true,
          //   sortOrder: this.sortOrder('birthday'),
          //   $search: {
          //     type: 'rangePicker',
          //     visible: true,
          //     startName: 'birthDayStart',
          //     endName: 'birthDayEnd',
          //   },
          // },
          {
            title: '现居住地',
            dataIndex: 'address',
            key: 'address',
            width: 300,
            $search: {
              type: 'input',
              visible: true,
            },
          },
        ],
      ]);
    },
  },
  SearchClass: SearchTable,
  FieldGeneratorToDict,
  sage,
});

export default () => {
  const [value, setValue] = React.useState('11212');

  return (
    <DictComponent
      placeholder="SingleSelect"
      style={{ width: 200 }}
      dropdownStyle={{ width: 1000, padding: '20px 20px 0 20px' }}
      value={value}
      onChange={(v) => {
        debugger;
        setValue(v);
      }}
    />
  );
};
