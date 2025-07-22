import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState();

  // const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.CascaderDynamic.FlatChangeOnSelect}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemDepartmentAll,
        FieldGeneratorToDict.ComponentNames.CascaderDynamic.FlatChangeOnSelect,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemDepartmentAll}
      style={{ width: 350 }}
      value={value}
      onChange={setValue}
    />
  );
};
