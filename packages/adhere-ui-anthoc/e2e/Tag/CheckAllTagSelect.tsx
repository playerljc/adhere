import React, { useState } from 'react';

import Tag from '../../src/tag';

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <Tag.CheckAllTagSelect
      style={{ width: 200 }}
      placeholder="A-Z"
      value={value}
      onChange={(v) => {
        setValue(v);
      }}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          value: letter,
          label: letter,
          children: letter,
        };
      })}
    />
  );
};
