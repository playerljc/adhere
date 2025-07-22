import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  // const DictComponentName = `SystemUserACPagin${FieldGeneratorToDict.ComponentNames.TableAC.MultiPaging}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUserACPagin,
        FieldGeneratorToDict.ComponentNames.TableAC.MultiPaging,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemUserACPagin}
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      pagingProps={{
        defaultLimit: 10,
      }}
      tablePagingProps={{
        rowId: 'itemid',
        columns: [
          {
            title: '名称',
            key: 'label',
            dataIndex: 'label',
          },
        ],
      }}
    />
  );
};
