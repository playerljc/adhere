import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUserStatic${FieldGeneratorToDict.ComponentNames.MobileCheckbox.FilterCheckAll}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

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
