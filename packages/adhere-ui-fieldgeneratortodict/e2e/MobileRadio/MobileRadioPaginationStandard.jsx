import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

const defaultPaging = {
  limit: 20,
};

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUserPaging${FieldGeneratorToDict.ComponentNames.MobileRadioPagination.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      multiple
      value={value}
      onChange={setValue}
      pagingProps={{
        style: { height: '100%' },
        defaultPaging,
        isLocal: false,
      }}
      spaceStyle={{ '--gap': '24px' }}
    />
  );
};
