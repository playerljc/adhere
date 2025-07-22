import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(undefined);

  // const DictComponentName = `SystemTreeACFlat${FieldGeneratorToDict.ComponentNames.TreeAC.ShowParent}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTreeACFlat,
        FieldGeneratorToDict.ComponentNames.TreeAC.ShowParent,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemTreeACFlat}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      style={{ width: 300 }}
      treeDataSimpleMode
      value={value}
      onChange={setValue}
    />
  );
};
