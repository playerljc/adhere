import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { options } from '../dict/dict/data';

export default () => {
  const [value, setValue] = useState([options[0]]);

  const DictComponentName = `SystemUserByKw${FieldGeneratorToDict.ComponentNames.MobileCheckListAC.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <FieldGeneratorToDict.ArrayEntityValueHOC optionsProp="searchDataSource">
      <DictComponent
        placeholder="请输入关键字"
        style={{ height: '100%' }}
        value={value}
        onChange={(e) => {
          setValue(e);
          console.log('ValueHOC change');
        }}
        checkListProps={{
          multiple: true,
        }}
      />
    </FieldGeneratorToDict.ArrayEntityValueHOC>
  );
};
