import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState(undefined);

  const DictComponentName = `SystemTreeACFlat${FieldGeneratorToDict.ComponentNames.TreeAC.ShowChild}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder={DictComponentName}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      style={{ width: 300 }}
      treeDataSimpleMode
      value={value}
      onChange={setValue}
    />
  );
};
