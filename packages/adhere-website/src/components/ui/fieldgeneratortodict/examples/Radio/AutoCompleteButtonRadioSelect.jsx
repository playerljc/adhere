import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

import styles from '../examples.less';

export default () => {
  const [value, setValue] = useState(undefined);

  const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.RadioAC.Button}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      className={styles.DictComponent2}
      placeholder={DictComponentName}
      value={value}
      onChange={setValue}
    />
  );
};
