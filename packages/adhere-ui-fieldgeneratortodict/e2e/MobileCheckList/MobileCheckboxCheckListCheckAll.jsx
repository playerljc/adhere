import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUserStatic,
        FieldGeneratorToDict.ComponentNames.MobileCheckboxCheckList.CheckAll,
      )
    ];

  return (
    <DictComponent
      value={value}
      onChange={setValue}
      onCheckAllChange={setValue}
      checkAllLabel={(_value) => (
        <div>
          <span>{!!_value.length ? `(${_value.length})` : null}</span>
          <span>全选</span>
        </div>
      )}
    />
  );
};
