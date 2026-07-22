import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTreeDynamic,
        FieldGeneratorToDict.ComponentNames.TreeDynamic.Multi,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemTreeDynamic}
      style={{ width: 200 }}
      value={value}
      onChange={setValue}
    />
  );
};
