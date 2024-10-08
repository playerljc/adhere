import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';
import { Checkbox } from '@baifendian/adhere-ui-anthoc';

import styles from '../examples.less';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.SelectDynamic.DropdownRender}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      mode="multiple"
      placeholder={DictComponentName}
      className={styles.DictComponent3}
      value={value}
      onChange={setValue}
    >
      {({ originNode, value, onChange, options }) => {
        // return originNode;
        return <Checkbox.Group value={value} onChange={onChange} options={options} />;
      }}
    </DictComponent>
  );
};
