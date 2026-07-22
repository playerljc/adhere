import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState(undefined);

  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTreeDynamic,
        FieldGeneratorToDict.ComponentNames.MobileCascaderViewDynamic.Filter,
      )
    ];

  return (
    <DictComponent
      value={value}
      onChange={setValue}
      renderLabel={(item, filterValue) => (
        <label>
          <Highlighter
            highlightClassName="Highlight"
            searchWords={[filterValue]}
            autoEscape
            textToHighlight={item.label}
          />
        </label>
      )}
    />
  );
};
