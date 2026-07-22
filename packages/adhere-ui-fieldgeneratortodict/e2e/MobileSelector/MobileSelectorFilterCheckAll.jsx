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
        FieldGeneratorToDict.ComponentNames.MobileSelector.FilterCheckAll,
      )
    ];

  return (
    <DictComponent
      filterProps={{ placeholder: '请输入关键字', optionFilterProp: 'label' }}
      style={{ height: '100%' }}
      bodyWrapperStyle={{ overflowY: 'auto' }}
      checkAllBodyWrapperStyle={{ padding: 15, paddingTop: 0 }}
      checkAllWrapperStyle={{ paddingTop: 0 }}
      multiple
      columns={2}
      value={value}
      onChange={setValue}
      onCheckAllChange={setValue}
    />
  );
};
