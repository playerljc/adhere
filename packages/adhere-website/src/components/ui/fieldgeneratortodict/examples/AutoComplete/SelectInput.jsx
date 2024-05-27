import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';

import styles from '../examples.less';

export default () => {
  const [value, setValue] = useState({
    inputValue: '',
    selectValue: '',
  });

  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.AutoCompleteDynamic.SelectInput}`;
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
