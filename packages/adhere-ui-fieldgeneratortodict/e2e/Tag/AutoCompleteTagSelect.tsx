import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.TagAC.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      mode="multiple"
      placeholder={DictComponentName}
      style={{
        width: 350,
      }}
      value={value}
      onChange={setValue}
    />
  );
};
