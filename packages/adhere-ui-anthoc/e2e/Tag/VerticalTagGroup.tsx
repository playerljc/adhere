import React from 'react';

import Tag from '../../src/tag';

export default () => {
  return (
    <Tag.VerticalTagGroup
      size={8}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          value: letter,
          children: letter,
          type: _index % 2 === 0 ? 'success' : 'warning',
        };
      })}
    />
  );
};
