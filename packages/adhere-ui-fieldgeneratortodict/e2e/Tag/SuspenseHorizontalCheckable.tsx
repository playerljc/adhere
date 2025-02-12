import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.SuspenseHorizontalCheckable}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent value={value} onChange={setValue} />;
};
