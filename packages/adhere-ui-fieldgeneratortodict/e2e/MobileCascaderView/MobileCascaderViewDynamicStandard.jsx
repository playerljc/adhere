import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemTreeDynamic${FieldGeneratorToDict.ComponentNames.MobileCascaderViewDynamic.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      value={value}
      onChange={(_value) => {
        setValue(_value);
      }}
    />
  );
};
