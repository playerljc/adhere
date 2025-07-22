import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  // const DictComponentName = `SystemTableBookAC${FieldGeneratorToDict.ComponentNames.TableAC.Multi}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTableBookAC,
        FieldGeneratorToDict.ComponentNames.TableAC.Multi,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemTableBookAC}
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      tableProps={{
        rowId: 'itemid',
        pagination: false,
        columns: [
          {
            title: '名称',
            key: 'label',
            dataIndex: 'label',
          },
          {
            title: '出版社',
            key: 'name',
            dataIndex: 'name',
          },
          {
            title: 'jp',
            key: 'jp',
            dataIndex: 'jp',
          },
          {
            title: 'onTime',
            key: 'onTime',
            dataIndex: 'onTime',
          },
          {
            title: 'rn',
            key: 'rn',
            dataIndex: 'rn',
          },
        ],
      }}
    />
  );
};
