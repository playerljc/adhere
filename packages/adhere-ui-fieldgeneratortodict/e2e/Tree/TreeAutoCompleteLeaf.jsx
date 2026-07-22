import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(undefined);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTreeACFlat,
        FieldGeneratorToDict.ComponentNames.TreeAC.Leaf,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemTreeACFlat}
      style={{ width: 300 }}
      value={value}
      onChange={setValue}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      treeDataSimpleMode
    />
  );
};
