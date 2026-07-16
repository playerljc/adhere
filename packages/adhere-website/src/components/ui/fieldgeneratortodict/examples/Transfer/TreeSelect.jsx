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
  const [targetKeys, setTargetKeys] = useState([]);

  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TransferDynamic.Table}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      className={styles.DictComponent3}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      showSearch
      leftColumns={columns}
      rightColumns={columns}
      render={(item) => item.title}
    />
  );
};
