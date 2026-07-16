import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

import styles from '../examples.less';

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

  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TransferDynamic.TableSelect}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder={DictComponentName}
      className={styles.DictComponent}
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
