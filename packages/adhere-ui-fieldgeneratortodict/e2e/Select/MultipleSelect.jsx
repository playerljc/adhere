import React from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.SelectDynamic.CheckAll}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent placeholder={DictComponentName} style={{ width: 500 }} />;
};
