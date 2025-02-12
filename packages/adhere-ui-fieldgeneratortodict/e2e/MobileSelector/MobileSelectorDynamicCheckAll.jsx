import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUser${FieldGeneratorToDict.ComponentNames.MobileSelectorDynamic.CheckAll}`;
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
