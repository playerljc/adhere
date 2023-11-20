import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState({
    inputValue: '',
    selectValue: '',
  });

  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.AutoCompleteDynamic.SelectInput}`;
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
