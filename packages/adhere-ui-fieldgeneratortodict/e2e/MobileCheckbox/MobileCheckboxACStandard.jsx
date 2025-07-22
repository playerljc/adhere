import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState();

  // const DictComponentName = `SystemUserByKw${FieldGeneratorToDict.ComponentNames.MobileCheckboxAC.Standard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUserByKw,
        FieldGeneratorToDict.ComponentNames.MobileCheckboxAC.Standard,
      )
    ];

  return (
    <DictComponent
      placeholder="请输入关键字"
      style={{ height: '100%' }}
      value={value}
      onChange={setValue}
      checkListProps={{
        multiple: true,
      }}
      spaceStyle={{ '--gap': '24px' }}
    />
  );
};
