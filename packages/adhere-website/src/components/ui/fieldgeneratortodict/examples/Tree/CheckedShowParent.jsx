import React from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const DictComponentName = `SystemOrg${FieldGeneratorToDict.ComponentNames.Tree.CheckedShowParent}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent placeholder={DictComponentName} style={{ width: 200 }} />;
};
