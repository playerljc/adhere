import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState();

  // const DictComponentName = `SystemUser${FieldGeneratorToDict.ComponentNames.MobileCheckboxDynamic.Filter}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUser,
        FieldGeneratorToDict.ComponentNames.MobileCheckboxDynamic.Filter,
      )
    ];

  return (
    <DictComponent
      value={value}
      onChange={setValue}
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%' }}
      bodyWrapperStyle={{ overflowY: 'auto' }}
      spaceStyle={{ '--gap': '24px' }}
    />
  );
};
