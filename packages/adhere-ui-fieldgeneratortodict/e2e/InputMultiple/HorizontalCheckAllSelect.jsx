import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemBookCatalogTextDynamic${FieldGeneratorToDict.ComponentNames.InputMultipleDynamic.HorizontalCheckAllSelect}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      value={value}
      onChange={setValue}
      selectProps={{
        style: { width: 300 },
      }}
    />
  );
};
