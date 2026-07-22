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
        names.SystemUser,
        FieldGeneratorToDict.ComponentNames.MobileSelectorPaginationDynamic.Filter,
      )
    ];

  return (
    <DictComponent
      multiple
      filterProps={{ placeholder: '请输入关键字' }}
      style={{ height: '100%' }}
      value={value}
      onChange={setValue}
      pagingProps={{
        style: { height: '100%' },
        defaultPaging,
      }}
      columns={2}
    />
  );
};
