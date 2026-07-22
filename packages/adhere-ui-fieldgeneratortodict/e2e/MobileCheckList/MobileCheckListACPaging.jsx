import React, { useState } from 'react';

import { PagingEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUserByKPL,
        FieldGeneratorToDict.ComponentNames.MobileCheckListAC.Paging,
      )
    ];

  return (
    <PagingEntityValueHOC
      value={value}
      onChange={setValue}
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
