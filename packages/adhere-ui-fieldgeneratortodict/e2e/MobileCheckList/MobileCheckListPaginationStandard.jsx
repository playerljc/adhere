import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

const defaultPaging = {
  limit: 20,
};

export default () => {
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUserPaging,
        FieldGeneratorToDict.ComponentNames.MobileCheckListPagination.Standard,
      )
    ];

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
