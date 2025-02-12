import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUserStatic${FieldGeneratorToDict.ComponentNames.MobileSelector.CheckAll}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      value={value}
      onChange={setValue}
      onCheckAllChange={setValue}
      style={{
        '--border-radius': '100px',
        '--border': 'solid transparent 1px',
        '--checked-border': 'solid var(--adm-color-primary) 1px',
        '--padding': '8px 24px',
      }}
      showCheckMark={false}
      multiple
      columns={2}
    />
  );
};
