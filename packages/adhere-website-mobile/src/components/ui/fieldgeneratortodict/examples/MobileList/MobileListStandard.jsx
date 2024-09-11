import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemListStatic${FieldGeneratorToDict.ComponentNames.MobileList.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent style={{ height: '100%' }} value={value} onChange={setValue} />;
};
