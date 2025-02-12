import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUserStatic${FieldGeneratorToDict.ComponentNames.MobileRadio.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent value={value} onChange={setValue} spaceStyle={{ '--gap': '24px' }} />;
};
