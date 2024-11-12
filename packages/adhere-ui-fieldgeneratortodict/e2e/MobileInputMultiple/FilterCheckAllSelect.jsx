import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemBookCatalogTextDynamic${FieldGeneratorToDict.ComponentNames.MobileInputMultipleDynamic.FilterCheckAllSelect}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <div style={{ padding: 20 }}>
      <DictComponent
        value={value}
        onChange={setValue}
        selectorProps={{
          filterProps: {
            optionFilterProp: 'label',
          },
        }}
      />
    </div>
  );
};
