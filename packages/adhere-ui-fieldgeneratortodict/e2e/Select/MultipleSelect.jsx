import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.SelectDynamic.CheckAll}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.SelectDynamic.CheckAll,
      )
    ];

  const [value, setValue] = React.useState([]);

  return (
    <DictComponent
      value={value}
      onChange={setValue}
      placeholder={names.SystemBookCatalogDynamic}
      style={{ width: 500 }}
    />
  );
};
