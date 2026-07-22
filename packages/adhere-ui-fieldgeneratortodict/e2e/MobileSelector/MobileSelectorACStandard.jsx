import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUserByKw,
        FieldGeneratorToDict.ComponentNames.MobileSelectorAC.Standard,
      )
    ];

  return (
    <DictComponent
      placeholder="请输入关键字"
      style={{ height: '100%' }}
      value={value}
      onChange={setValue}
      selectorProps={{
        multiple: true,
        columns: 2,
      }}
    />
  );
};
