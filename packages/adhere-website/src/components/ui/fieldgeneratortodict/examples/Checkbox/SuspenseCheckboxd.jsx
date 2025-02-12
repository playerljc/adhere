import React from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.SuspenseStandard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent />;
};
