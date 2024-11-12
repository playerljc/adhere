import React from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.MobileInputMultipleDynamic.Filter}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <div style={{ padding: 20 }}>
      <DictComponent />
    </div>
  );
};
