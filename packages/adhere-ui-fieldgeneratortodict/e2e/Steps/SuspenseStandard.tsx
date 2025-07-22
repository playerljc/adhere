import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemOneWizard${FieldGeneratorToDict.ComponentNames.Steps.SuspenseStandard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOneWizard,
        FieldGeneratorToDict.ComponentNames.Steps.SuspenseStandard,
      )
    ];

  return <DictComponent />;
};
