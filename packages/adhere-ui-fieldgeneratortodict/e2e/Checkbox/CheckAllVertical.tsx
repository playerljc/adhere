import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState();

  // const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.CheckAllVertical}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.CheckAllVertical,
      )
    ];

  return <DictComponent value={value} onChange={setValue} />;
};
