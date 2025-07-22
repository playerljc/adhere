import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  // const DictComponentName = `SystemTableTreeACPaging${FieldGeneratorToDict.ComponentNames.TableTreeAC.MultiPaging}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTableTreeACPaging,
        FieldGeneratorToDict.ComponentNames.TableTreeAC.MultiPaging,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemTableTreeACPaging}
      style={{ width: 800 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
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
  );
};
