import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState();

  // const DictComponentName = `SystemTreeStatic${FieldGeneratorToDict.ComponentNames.MobileCascaderView.Standard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTreeStatic,
        FieldGeneratorToDict.ComponentNames.MobileCascaderView.Standard,
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
