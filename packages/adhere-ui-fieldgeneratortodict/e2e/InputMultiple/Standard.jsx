import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.InputMultipleDynamic.Standard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.InputMultipleDynamic.Standard,
      )
    ];

  return <DictComponent />;
};
