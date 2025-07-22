import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  // const DictComponentName = `SystemBookCatalogTextDynamic${FieldGeneratorToDict.ComponentNames.MobileInputMultipleDynamic.FilterCheckAllSelect}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogTextDynamic,
        FieldGeneratorToDict.ComponentNames.MobileInputMultipleDynamic.FilterCheckAllSelect,
      )
    ];

  return (
    <div style={{ padding: 20 }}>
      <DictComponent
        value={value}
        onChange={setValue}
        selectorProps={{
          filterProps: {
            optionFilterProp: 'label',
          },
        }}
      />
    </div>
  );
};
