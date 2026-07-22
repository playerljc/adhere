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
        FieldGeneratorToDict.ComponentNames.MobileCheckbox.FilterCheckAll,
      )
    ];

  return (
    <DictComponent
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%' }}
      value={value}
      onChange={setValue}
      onCheckAllChange={setValue}
      checkAllLabel={(_value) => (
        <div>
          <span>{!!_value.length ? `(${_value.length})` : null}</span>
          <span>全选</span>
        </div>
      )}
      spaceStyle={{ '--gap': '24px' }}
      // bodyWrapperStyle={{ padding: 15, paddingTop: 0 }}
    />
  );
};
