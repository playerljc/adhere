import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemOneTL${FieldGeneratorToDict.ComponentNames.Timeline.SuspenseStandard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOneTL,
        FieldGeneratorToDict.ComponentNames.Timeline.SuspenseStandard,
      )
    ];

  return <DictComponent />;
};
