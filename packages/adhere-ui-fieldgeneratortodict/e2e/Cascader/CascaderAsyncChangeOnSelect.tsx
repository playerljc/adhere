import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(undefined);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemDepartment,
        FieldGeneratorToDict.ComponentNames.CascaderAsync.ChangeOnSelect,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemDepartment}
      style={{ width: 350 }}
      value={value}
      onChange={setValue}
    />
  );
};
