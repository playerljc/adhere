import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.TreeDynamic.FlatLeafMulti}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemDepartmentAll,
        FieldGeneratorToDict.ComponentNames.TreeDynamic.FlatLeafMulti,
      )
    ];

  return <DictComponent placeholder={names.SystemDepartmentAll} style={{ width: 200 }} />;
};
