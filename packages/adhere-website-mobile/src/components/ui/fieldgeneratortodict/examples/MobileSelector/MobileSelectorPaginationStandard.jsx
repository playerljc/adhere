import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

const defaultPaging = {
  limit: 20,
};

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUserPaging${FieldGeneratorToDict.ComponentNames.MobileSelectorPagination.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      multiple
      columns={2}
      pagingProps={{
        style: { height: '100%', padding: 20 },
        defaultPaging,
        isLocal: false,
      }}
      value={value}
      onChange={setValue}
    />
  );
};
