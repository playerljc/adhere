import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';

import { CascaderView } from '../../src/index';
import { options } from './options';

import './index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <CascaderView.FilterCascaderView
      options={options}
      value={value}
      onChange={setValue}
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
