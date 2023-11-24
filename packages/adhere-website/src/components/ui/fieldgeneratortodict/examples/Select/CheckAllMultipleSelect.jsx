import React, { useState } from 'react';

import { FieldGeneratorToDict } from '@baifendian/adhere';
import { Checkbox } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.SelectDynamic.CheckAll}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      placeholder={DictComponentName}
      style={{ width: 500 }}
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