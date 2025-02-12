import React, { useState } from 'react';

import { Checkbox } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.SelectDynamic.DropdownRender}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      mode="multiple"
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
