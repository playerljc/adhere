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
        FieldGeneratorToDict.ComponentNames.TransferAC.Standard,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemFilterBookList}
      style={{ width: 600 }}
      value={value}
      onChange={setValue}
      render={(item) => item.title}
    />
  );
};
