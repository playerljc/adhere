import React, { useState } from 'react';

import { Tag } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Tag.VerticalCheckableTagGroup
      mode="multiple"
      value={value}
      onChange={(v) => {
        setValue(v);
      }}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          value: letter,
          children: letter,
        };
      })}
    />
  );
};
