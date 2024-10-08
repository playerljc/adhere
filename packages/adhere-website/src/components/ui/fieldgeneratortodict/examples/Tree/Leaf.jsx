import React from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

import styles from '../examples.less';

export default () => {
  const DictComponentName = `SystemOrg${FieldGeneratorToDict.ComponentNames.Tree.Leaf}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return <DictComponent placeholder={DictComponentName} className={styles.DictComponent4} />;
};
