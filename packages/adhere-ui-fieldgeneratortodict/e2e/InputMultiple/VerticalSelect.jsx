import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  // const DictComponentName = `SystemBookCatalogTextDynamic${FieldGeneratorToDict.ComponentNames.InputMultipleDynamic.VerticalSelect}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogTextDynamic,
        FieldGeneratorToDict.ComponentNames.InputMultipleDynamic.VerticalSelect,
      )
    ];

  return (
    <DictComponent
      value={value}
      onChange={setValue}
      selectProps={{
        style: { width: 300 },
      }}
    />
  );
};
