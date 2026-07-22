import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(undefined);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTreeDynamic,
        FieldGeneratorToDict.ComponentNames.MobileTreeSelectDynamic.Leaf,
      )
    ];

  return (
    <div style={{ padding: 20, width: '100%', height: '100%', overflowY: 'auto' }}>
      <DictComponent value={value} onChange={setValue} />
    </div>
  );
};
