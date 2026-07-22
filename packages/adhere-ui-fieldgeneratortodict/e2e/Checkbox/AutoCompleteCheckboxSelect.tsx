import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemFilterBookList,
        FieldGeneratorToDict.ComponentNames.CheckBoxAC.Standard,
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
