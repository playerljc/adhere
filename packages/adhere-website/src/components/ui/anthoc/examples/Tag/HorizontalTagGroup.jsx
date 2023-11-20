import React from 'react';

import { Tag } from '@baifendian/adhere-ui-anthoc';

export default () => {
  return (
    <Tag.HorizontalTagGroup
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
