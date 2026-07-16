import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

const columns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];

export default () => {
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.TransferDynamic.Table,
      )
    ];

  const [targetKeys, setTargetKeys] = useState<string[]>([]);

  return (
    <DictComponent
      style={{ width: 800 }}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      showSearch
      leftColumns={columns}
      rightColumns={columns}
      render={(item) => item.title}
    />
  );
};
