import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.ButtonSelect}`;
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
