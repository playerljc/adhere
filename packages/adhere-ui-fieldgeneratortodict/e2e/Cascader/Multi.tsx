import React from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const DictComponentName = `SystemSSQ${FieldGeneratorToDict.ComponentNames.Cascader.Multi}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent placeholder={DictComponentName} style={{ width: 200 }} />;
};