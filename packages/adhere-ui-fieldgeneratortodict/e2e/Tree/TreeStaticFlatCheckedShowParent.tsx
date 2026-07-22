import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemDepartmentAllStatic,
        FieldGeneratorToDict.ComponentNames.Tree.FlatCheckedShowParent,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemDepartmentAllStatic}
      style={{ width: 200 }}
      value={value}
      onChange={setValue}
    />
  );
};
