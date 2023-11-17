import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.SelectAC.Multi}`;
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
