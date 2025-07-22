import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemSegNav${FieldGeneratorToDict.ComponentNames.Segmented.SuspenseStandard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemSegNav,
        FieldGeneratorToDict.ComponentNames.Segmented.SuspenseStandard,
      )
    ];

  return <DictComponent />;
};
