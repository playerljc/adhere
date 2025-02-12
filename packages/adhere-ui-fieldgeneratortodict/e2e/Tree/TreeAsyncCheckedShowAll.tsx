import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState(undefined);

  const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.CheckedShowAll}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder={DictComponentName}
      style={{ width: 350 }}
      value={value}
      onChange={setValue}
    />
  );
};
