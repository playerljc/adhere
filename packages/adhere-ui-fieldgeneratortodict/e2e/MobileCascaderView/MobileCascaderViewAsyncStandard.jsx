import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(['210000000000', '210100000000', '210102000000']);

  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemDepartment,
        FieldGeneratorToDict.ComponentNames.MobileCascaderViewAsync.Standard,
      )
    ];

  return (
    <DictComponent
      isEveryAsync
      value={value}
      cascadeParams={['210000000000', '210100000000']}
      onChange={setValue}
    />
  );
};
