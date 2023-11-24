import React from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.SuspenseButton}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent />;
};