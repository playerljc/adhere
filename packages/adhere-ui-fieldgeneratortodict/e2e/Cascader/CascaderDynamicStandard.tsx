import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(undefined);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemSSQRemote,
        FieldGeneratorToDict.ComponentNames.CascaderDynamic.Standard,
      )
    ];

  return <DictComponent placeholder={names.SystemSSQRemote} style={{ width: 200 }} value={value} onChange={setValue} />;
};
