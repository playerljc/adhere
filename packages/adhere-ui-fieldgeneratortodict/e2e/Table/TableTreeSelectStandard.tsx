import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

const tableProps = {
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
  pagination: false,
};

export default () => {
  const [value, setValue] = useState(undefined);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTableTreeStatic,
        FieldGeneratorToDict.ComponentNames.TableTreeSelect.Standard,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemTableTreeStatic}
      style={{ width: 800 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      tableProps={tableProps}
    />
  );
};
