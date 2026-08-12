import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOrgFlat,
        FieldGeneratorToDict.ComponentNames.Transfer.TreeSelectFlat,
      )
    ];

  return (
    <DictComponent
      placeholder="TreeTransferSelect Flat"
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
