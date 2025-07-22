import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemSSQ,
        FieldGeneratorToDict.ComponentNames.Cascader.TreeSelect,
      )
    ];

  return <DictComponent placeholder={names.SystemSSQ} style={{ width: 350 }} />;
};
