import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState();

  // const DictComponentName = `SystemUser${FieldGeneratorToDict.ComponentNames.MobileSelectorDynamic.FilterCheckAll}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUser,
        FieldGeneratorToDict.ComponentNames.MobileSelectorDynamic.FilterCheckAll,
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
