import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalog,
        FieldGeneratorToDict.ComponentNames.Select.CheckAll,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemBookCatalog}
      style={{ width: 500 }}
      value={value}
      onChange={setValue}
    />
  );
};
