import React from 'react';

import FieldGeneratorToDict from '../../src';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.Button}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.RadioDynamic.Button,
      )
    ];

  return <DictComponent />;
};
