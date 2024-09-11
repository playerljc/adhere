import React, { useState } from 'react';

import { PagingEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUserByKPL${FieldGeneratorToDict.ComponentNames.MobileCheckListAC.Paging}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <PagingEntityValueHOC
      value={value}
      onChange={setValue}
      // optionsProp="searchDataSource"
      // changePropagation={false}
      pagingPropsPath={['pagingCheckListProps', 'pagingProps']}
    >
      <DictComponent
        placeholder="请输入关键字"
        style={{ height: '100%' }}
        bodyStyle={{ overflowY: 'hidden' }}
        pagingCheckListProps={{
          multiple: true,
          pagingProps: {
            style: { height: '100%' },
            isLocal: false,
          },
        }}
      />
    </PagingEntityValueHOC>
  );
};
