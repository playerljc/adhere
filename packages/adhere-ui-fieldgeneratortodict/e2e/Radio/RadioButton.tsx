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
        FieldGeneratorToDict.ComponentNames.Radio.Button,
      )
    ];

  return <DictComponent value={value} onChange={setValue} />;
};
