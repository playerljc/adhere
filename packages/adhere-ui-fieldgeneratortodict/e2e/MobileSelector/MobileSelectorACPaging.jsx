import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState();

  // const DictComponentName = `SystemUserByKPL${FieldGeneratorToDict.ComponentNames.MobileSelectorAC.Paging}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUserByKPL,
        FieldGeneratorToDict.ComponentNames.MobileSelectorAC.Paging,
      )
    ];

  return (
    <DictComponent
      placeholder="请输入关键字"
      style={{ height: '100%' }}
      bodyStyle={{ overflowY: 'hidden' }}
      value={value}
      onChange={setValue}
      pagingSelectorProps={{
        multiple: true,
        columns: 2,
        showCheckMark: true,
        pagingProps: {
          style: { height: '100%' },
          isLocal: false,
        },
      }}
    />
  );
};
