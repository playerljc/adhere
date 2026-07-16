import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOrg,
        FieldGeneratorToDict.ComponentNames.Transfer.TreeSelect,
      )
    ];

  const [value, setValue] = useState([]);

  return (
    <DictComponent
      placeholder="Tree Transfer Select"
      style={{ width: 410 }}
      value={value}
      onChange={setValue}
    />
  );
};
