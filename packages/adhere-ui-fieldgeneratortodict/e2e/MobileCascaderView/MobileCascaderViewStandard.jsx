import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemTreeStatic${FieldGeneratorToDict.ComponentNames.MobileCascaderView.Standard}`;
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
