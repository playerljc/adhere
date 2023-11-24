import React from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.TreeDynamic.FlatCheckedShowParent}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent placeholder={DictComponentName} style={{ width: 200 }} />;
};