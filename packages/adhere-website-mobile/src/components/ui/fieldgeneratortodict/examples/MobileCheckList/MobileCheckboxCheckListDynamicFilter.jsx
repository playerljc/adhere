import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUser${FieldGeneratorToDict.ComponentNames.MobileCheckboxCheckListDynamic.Filter}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%' }}
      bodyWrapperStyle={{ overflowY: 'auto' }}
      value={value}
      onChange={setValue}
    />
  );
};
