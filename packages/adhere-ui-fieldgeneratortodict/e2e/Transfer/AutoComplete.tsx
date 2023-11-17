import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.TransferAC.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder={DictComponentName}
      style={{ width: 600 }}
      value={value}
      onChange={setValue}
      render={(item) => item.title}
    />
  );
};
