import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

const defaultPaging = {
  limit: 20,
};

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUserStatic${FieldGeneratorToDict.ComponentNames.MobileSelectorPagination.Filter}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      multiple
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%' }}
      value={value}
      onChange={setValue}
      columns={2}
      pagingProps={{
        style: { height: '100%' },
        defaultPaging,
      }}
    />
  );
};
