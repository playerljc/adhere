import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemDropNav${FieldGeneratorToDict.ComponentNames.Dropdown.Standard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemDropNav,
        FieldGeneratorToDict.ComponentNames.Dropdown.Standard,
      )
    ];

  return (
    <DictComponent>
      <a onClick={(e) => e.preventDefault()}>Hover me</a>
    </DictComponent>
  );
};
