import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState();

  // const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.Select}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.RadioDynamic.Select,
      )
    ];

  return (
    <DictComponent
      placeholder="SystemBookCatalogDynamic"
      style={{ width: 350 }}
      value={value}
      onChange={setValue}
    />
  );
};
