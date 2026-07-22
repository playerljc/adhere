import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.SelectDynamic.Multi,
      )
    ];

  return (
    <DictComponent
      value={value}
      onChange={setValue}
      placeholder={names.SystemBookCatalogDynamic}
      style={{ width: 500 }}
    />
  );
};
