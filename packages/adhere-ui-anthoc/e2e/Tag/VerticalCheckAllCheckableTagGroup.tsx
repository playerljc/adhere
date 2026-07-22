import React, { useState } from 'react';

import Tag from '../../src/tag';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Tag.VerticalCheckAllCheckableTagGroup
      value={value}
      onChange={setValue}
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
            <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', marginBottom: 12 }}>
              {checkAllOrigin}
            </div>
            <div>{childrenOrigin}</div>
          </div>
        );
      }}
    />
  );
};
