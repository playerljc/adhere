import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Checkbox.VerticalCheckAllCheckbox
      value={value}
      onChange={setValue}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          label: letter,
          value: letter,
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
