import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

const defaultPaging = {
  limit: 20,
};

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUserPaging${FieldGeneratorToDict.ComponentNames.MobileCheckboxCheckListPagination.Standard}`;
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
    />
  );
};
