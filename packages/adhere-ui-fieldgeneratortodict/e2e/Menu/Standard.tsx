import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemNav${FieldGeneratorToDict.ComponentNames.Menu.Standard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemNav,
        FieldGeneratorToDict.ComponentNames.Menu.Standard,
      )
    ];

  return <DictComponent />;
};
