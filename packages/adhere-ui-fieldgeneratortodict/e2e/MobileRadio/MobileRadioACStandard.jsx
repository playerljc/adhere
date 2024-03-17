import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUserByKw${FieldGeneratorToDict.ComponentNames.MobileRadioAC.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder="请输入关键字"
      style={{ height: '100%' }}
      value={value}
      onChange={setValue}
      checkListProps={{
        multiple: true,
      }}
      spaceStyle={{ '--gap': '24px' }}
    />
  );
};
