import React from 'react';

import AutoComplete from '../../src/auto-complete';

export default () => (
  <AutoComplete
    // value={value}
    options={Array.from({ length: 26 }).map((t, _index) => {
      const letter = String.fromCharCode(97 + _index).toUpperCase();

      return {
        label: letter,
        value: 97 + _index,
      };
    })}
    style={{ width: 200 }}
    onSelect={(v) => {
      console.log('onSelect', v);
    }}
    onSearch={(v) => {
      console.log('onSearch', v);
    }}
    onChange={(v) => {
      console.log('onChange', v);
    }}
    placeholder="control mode"
  />
);
