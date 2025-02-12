import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState([]);

  const DictComponentName = `SystemTreeDynamic${FieldGeneratorToDict.ComponentNames.MobileCascaderViewDynamic.Filter}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <DictComponent
      value={value}
      onChange={(_value) => {
        setValue(_value);
      }}
      renderLabel={(item, filterValue) => {
        return (
          <label>
            <Highlighter
              highlightClassName="Highlight"
              searchWords={[filterValue]}
              autoEscape={true}
              textToHighlight={item.label}
            />
          </label>
        );
      }}
    />
  );
};
