import React from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

import styles from '../examples.less';

export default () => {
  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.SelectDynamic.Multi}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent placeholder={DictComponentName} className={styles.DictComponent3} />;
};
