import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(undefined);

  // const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.RadioAC.Button}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemFilterBookList,
        FieldGeneratorToDict.ComponentNames.RadioAC.Button,
      )
    ];

  return (
    <DictComponent
      style={{ width: 600 }}
      placeholder="SystemFilterBookList"
      value={value}
      onChange={setValue}
    />
  );
};
