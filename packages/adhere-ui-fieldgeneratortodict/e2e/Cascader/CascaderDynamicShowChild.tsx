import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemSSQRemote,
        FieldGeneratorToDict.ComponentNames.CascaderDynamic.ShowChild,
      )
    ];

  return <DictComponent placeholder={names.SystemSSQRemote} style={{ width: 350 }} value={value} onChange={setValue} />;
};
