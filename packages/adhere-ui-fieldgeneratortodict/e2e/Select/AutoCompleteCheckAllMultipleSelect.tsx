import React, { useState } from 'react';

import { Checkbox } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.SelectAC.CheckAll}`;

  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      style={{ width: 600 }}
      placeholder={DictComponentName}
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
