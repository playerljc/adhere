import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemListDynamic${FieldGeneratorToDict.ComponentNames.MobileListDynamic.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent style={{ height: '100%' }} value={value} onChange={setValue} />;
};
