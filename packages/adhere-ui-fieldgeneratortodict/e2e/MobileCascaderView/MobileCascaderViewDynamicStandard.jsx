import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState();

  // const DictComponentName = `SystemTreeDynamic${FieldGeneratorToDict.ComponentNames.MobileCascaderViewDynamic.Standard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTreeDynamic,
        FieldGeneratorToDict.ComponentNames.MobileCascaderViewDynamic.Standard,
      )
    ];

  return (
    <DictComponent
      value={value}
      onChange={(_value) => {
        setValue(_value);
      }}
    />
  );
};
