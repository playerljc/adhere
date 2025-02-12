import React from 'react';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const DictComponentName = `SystemDropNav${FieldGeneratorToDict.ComponentNames.Dropdown.Standard}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent>
      <a onClick={(e) => e.preventDefault()}>Hover me</a>
    </DictComponent>
  );
};
