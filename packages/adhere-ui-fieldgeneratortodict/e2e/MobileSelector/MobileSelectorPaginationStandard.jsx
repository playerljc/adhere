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
        FieldGeneratorToDict.ComponentNames.MobileSelectorPagination.Standard,
      )
    ];

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
