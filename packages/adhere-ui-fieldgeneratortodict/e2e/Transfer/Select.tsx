import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TransferDynamic.Select}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder={DictComponentName}
      style={{ width: 350 }}
      value={value}
      onChange={setValue}
      render={(item) => item.title}
    />
  );
};