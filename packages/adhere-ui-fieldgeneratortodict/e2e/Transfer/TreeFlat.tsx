import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [targetKeys, setTargetKeys] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOrgFlat,
        FieldGeneratorToDict.ComponentNames.Transfer.TreeFlat,
      )
    ];

  return (
    <DictComponent
      style={{ width: 600 }}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      showSearch
    />
  );
};
