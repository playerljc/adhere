import React, { useState } from 'react';

import { ArrayEntityValueHOC, PagingEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src/index';

const defaultPaging = {
  limit: 20,
};

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUserPaging${FieldGeneratorToDict.ComponentNames.MobileCheckboxCheckListPagination.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <PagingEntityValueHOC onChange={setValue} value={value}>
      <DictComponent
        multiple
        // value={value}
        // onChange={setValue}
        pagingProps={{
          style: { height: '100%' },
          defaultPaging,
          isLocal: false,
        }}
      />
    </PagingEntityValueHOC>
  );
};
