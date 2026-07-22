import React, { useState } from 'react';

import { Checkbox } from '@baifendian/adhere-ui-anthoc';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemBookCatalog,
        FieldGeneratorToDict.ComponentNames.Select.DropdownRender,
      )
    ];

  return (
    <DictComponent
      mode="multiple"
      placeholder={names.SystemBookCatalog}
      style={{ width: 500 }}
      value={value}
      onChange={setValue}
    >
      {({ value: groupValue, onChange, options }) => (
        <Checkbox.Group value={groupValue} onChange={onChange} options={options} />
      )}
    </DictComponent>
  );
};
