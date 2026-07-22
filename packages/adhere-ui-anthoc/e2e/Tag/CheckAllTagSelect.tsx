import React, { useState } from 'react';

import Tag from '../../src/tag';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Tag.CheckAllTagSelect
      style={{ width: 300 }}
      placeholder="CheckAllTagSelect"
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
      render={(checkAllOrigin, childrenOrigin) => {
        return (
          <div>
            <div style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
              {checkAllOrigin}
            </div>
            <div style={{ padding: 12 }}>{childrenOrigin}</div>
          </div>
        );
      }}
    />
  );
};
