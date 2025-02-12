import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUser${FieldGeneratorToDict.ComponentNames.MobileCheckboxCheckListDynamic.Standard}`;
  debugger;
  console.log('FieldGeneratorToDict.Components', FieldGeneratorToDict.Components);
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent placeholder={DictComponentName} value={value} onChange={setValue} />;
};
