import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUserStatic,
        FieldGeneratorToDict.ComponentNames.MobileSelector.Standard,
      )
    ];

  return (
    <DictComponent
      value={value}
      onChange={setValue}
      style={{
        '--border-radius': '100px',
        '--border': 'solid transparent 1px',
        '--checked-border': 'solid var(--adm-color-primary) 1px',
        '--padding': '8px 24px',
      }}
      showCheckMark={false}
      multiple
      columns={2}
    />
  );
};
