import React, { useState } from 'react';

import { Selector } from '@baifendian/adhere-mobile-ui-anthoc';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    label: letter,
    value: letter,
    description: letter,
  };
});

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Selector.CheckAllSelector
      style={{
        '--border-radius': '100px',
        '--border': 'solid transparent 1px',
        '--checked-border': 'solid var(--adm-color-primary) 1px',
        '--padding': '8px 24px',
      }}
      showCheckMark={false}
      multiple
      columns={2}
      options={options}
      value={value}
      onChange={setValue}
      onCheckAllChange={setValue}
    />
  );
};
