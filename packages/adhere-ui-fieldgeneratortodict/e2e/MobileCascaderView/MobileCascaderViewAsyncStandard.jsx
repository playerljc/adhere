import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  // const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.MobileCascaderViewAsync.Standard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemDepartment,
        FieldGeneratorToDict.ComponentNames.MobileCascaderViewAsync.Standard,
      )
    ];

  return (
    <DictComponent
      isEveryAsync
      value={value}
      onChange={(_value) => {
        setValue(_value);
      }}
      // treeDataSimpleMode
    />
  );
};
