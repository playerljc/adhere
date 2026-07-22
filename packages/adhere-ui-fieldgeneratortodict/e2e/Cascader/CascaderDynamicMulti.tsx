import React from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = React.useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemSSQRemote,
        FieldGeneratorToDict.ComponentNames.CascaderDynamic.Multi,
      )
    ];

  return (
    <DictComponent
      placeholder={names.SystemSSQRemote}
      style={{ width: 300 }}
      isHideInvalidValue={false}
      value={value}
      onChange={setValue}
    />
  );
};
