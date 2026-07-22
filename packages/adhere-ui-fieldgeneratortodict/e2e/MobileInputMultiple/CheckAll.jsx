import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.MobileInputMultipleDynamic.CheckAll,
      )
    ];

  return (
    <div style={{ padding: 20 }}>
      <DictComponent value={value} onChange={setValue} />
    </div>
  );
};
