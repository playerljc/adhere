import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState(undefined);

  const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.SelectAC.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      style={{ width: 600 }}
      placeholder={DictComponentName}
      value={value}
      onChange={setValue}
    />
  );
};
