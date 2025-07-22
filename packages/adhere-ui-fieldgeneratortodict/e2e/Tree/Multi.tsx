import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemOrg${FieldGeneratorToDict.ComponentNames.Tree.Multi}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOrg,
        FieldGeneratorToDict.ComponentNames.Tree.Multi,
      )
    ];

  return <DictComponent placeholder={names.SystemOrg} style={{ width: 200 }} />;
};
