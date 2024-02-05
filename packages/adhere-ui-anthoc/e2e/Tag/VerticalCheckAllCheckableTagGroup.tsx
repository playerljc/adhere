import React, { useState } from 'react';

import Tag from '../../src/tag';

export default () => {
  const [value, setValue] = useState(undefined);

  return (
    <Tag.VerticalCheckAllCheckableTagGroup
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
      // render={(origin, children) => {
      //   return (
      //     <div>
      //       <div>{children}</div>
      //       <div>{origin}</div>
      //     </div>
      //   );
      // }}
    />
  );
};
