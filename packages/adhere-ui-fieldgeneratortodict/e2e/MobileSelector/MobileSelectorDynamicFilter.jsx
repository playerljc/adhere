import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUser${FieldGeneratorToDict.ComponentNames.MobileSelectorDynamic.Filter}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      filterProps={{ placeholder: '请输入关键字', optionFilterProp: 'label' }}
      style={{ height: '100%' }}
      bodyWrapperStyle={{ overflowY: 'auto', padding: 20, paddingTop: 0 }}
      multiple
      columns={2}
      value={value}
      onChange={setValue}
    />
  );
};
