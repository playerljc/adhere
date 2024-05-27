import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

import styles from '../examples.less';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.CascaderDynamic.FlatStandard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder={DictComponentName}
      className={styles.DictComponent}
      value={value}
      onChange={setValue}
    />
  );
};
