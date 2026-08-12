import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(['0-0-1']);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOrg,
        FieldGeneratorToDict.ComponentNames.Transfer.TreeSelectLeaf,
      )
    ];

  return (
    <DictComponent
      placeholder="TreeTransferSelect Leaf"
      style={{ width: 410 }}
      value={value}
      onChange={setValue}
      transferProps={{
        titles: ['可选', '已选'],
        showSearch: true,
      }}
    />
  );
};
