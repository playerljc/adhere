import React, { useState } from 'react';

import Tag from '../../src/tag';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Tag.TagSelect
      mode="multiple"
      style={{ width: 200 }}
      placeholder="TagSelect multiple"
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      tagProps={{}}
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
