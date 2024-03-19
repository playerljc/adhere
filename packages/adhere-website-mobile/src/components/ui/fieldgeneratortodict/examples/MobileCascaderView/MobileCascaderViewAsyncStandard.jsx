import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.MobileCascaderViewAsync.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      isEveryAsync
      value={value}
      onChange={(_value) => {
        setValue(_value);
      }}
      // treeDataSimpleMode
    />
  );
};
