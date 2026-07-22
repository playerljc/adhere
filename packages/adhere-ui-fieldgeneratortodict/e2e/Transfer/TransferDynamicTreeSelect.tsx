import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTreeDynamic,
        FieldGeneratorToDict.ComponentNames.TransferDynamic.TreeSelect,
      )
    ];

  return (
    <DictComponent
      placeholder="Tree Transfer Select"
      style={{ width: 410 }}
      value={value}
      onChange={setValue}
    />
  );
};
