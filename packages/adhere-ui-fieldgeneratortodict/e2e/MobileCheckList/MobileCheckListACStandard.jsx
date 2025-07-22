import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { options } from '../dict/dict/data';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([options[0]]);

  // const DictComponentName = `SystemUserByKw${FieldGeneratorToDict.ComponentNames.MobileCheckListAC.Standard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUserByKw,
        FieldGeneratorToDict.ComponentNames.MobileCheckListAC.Standard,
      )
    ];

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
