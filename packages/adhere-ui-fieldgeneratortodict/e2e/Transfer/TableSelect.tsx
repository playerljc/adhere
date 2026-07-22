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
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalogDynamic,
        FieldGeneratorToDict.ComponentNames.TransferDynamic.TableSelect,
      )
    ];

  return (
    <DictComponent
      placeholder="Table Transfer Select"
      style={{ width: 600 }}
      value={value}
      onChange={setValue}
      leftColumns={columns}
      rightColumns={columns}
      transferProps={{
        showSearch: true,
        render: (item) => item.title,
      }}
    />
  );
};
