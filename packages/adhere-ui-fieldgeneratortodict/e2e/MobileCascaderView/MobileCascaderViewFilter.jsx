import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState();

  // const DictComponentName = `SystemTreeStatic${FieldGeneratorToDict.ComponentNames.MobileCascaderView.Filter}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTreeStatic,
        FieldGeneratorToDict.ComponentNames.MobileCascaderView.Filter,
      )
    ];

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
