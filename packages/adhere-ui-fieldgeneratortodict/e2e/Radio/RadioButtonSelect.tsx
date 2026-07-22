import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(undefined);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalog,
        FieldGeneratorToDict.ComponentNames.Radio.ButtonSelect,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemBookCatalog}
      style={{ width: 350 }}
      value={value}
      onChange={setValue}
    />
  );
};
