import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  // const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.MobileTreeSelectAsync.ShowChild}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemDepartment,
        FieldGeneratorToDict.ComponentNames.MobileTreeSelectAsync.ShowChild,
      )
    ];

  return (
    <div style={{ padding: 20, width: '100%', height: '100%', overflowY: 'auto' }}>
      <DictComponent />
    </div>
  );
};
