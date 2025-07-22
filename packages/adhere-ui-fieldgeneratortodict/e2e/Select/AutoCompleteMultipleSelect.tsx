import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  // const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.SelectAC.Multi}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemFilterBookList,
        FieldGeneratorToDict.ComponentNames.SelectAC.Multi,
      )
    ];

  return (
    <DictComponent
      style={{ width: 600 }}
      placeholder={names.SystemFilterBookList}
      value={value}
      onChange={setValue}
    />
  );
};
