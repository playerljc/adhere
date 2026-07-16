import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

import styles from '../examples.less';

export default () => {
  const [targetKeys, setTargetKeys] = useState([]);

  const DictComponentName = `SystemTreeDynamic${FieldGeneratorToDict.ComponentNames.TransferDynamic.Tree}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      className={styles.DictComponent3}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
    />
  );
};
