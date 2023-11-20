import React from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const DictComponentName = `SystemSSQ${FieldGeneratorToDict.ComponentNames.Cascader.ShowChild}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent placeholder={DictComponentName} style={{ width: 350 }} />;
};
