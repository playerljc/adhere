import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState();

  // const DictComponentName = `SystemListStatic${FieldGeneratorToDict.ComponentNames.MobileList.Standard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemListStatic,
        FieldGeneratorToDict.ComponentNames.MobileList.Standard,
      )
    ];

  return <DictComponent style={{ height: '100%' }} value={value} onChange={setValue} />;
};
