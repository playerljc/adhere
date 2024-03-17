import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUserByKPL${FieldGeneratorToDict.ComponentNames.MobileCheckListAC.Paging}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder="请输入关键字"
      style={{ height: '100%' }}
      bodyStyle={{ overflowY: 'hidden' }}
      value={value}
      onChange={setValue}
      pagingCheckListProps={{
        multiple: true,
        pagingProps: {
          style: { height: '100%' },
          isLocal: false,
        },
      }}
    />
  );
};
