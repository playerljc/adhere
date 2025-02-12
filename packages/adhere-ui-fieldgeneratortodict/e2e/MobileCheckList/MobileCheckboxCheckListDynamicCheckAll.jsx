import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUser${FieldGeneratorToDict.ComponentNames.MobileCheckboxCheckListDynamic.CheckAll}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

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
