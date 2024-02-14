import React from 'react';

import { Selector } from '../../src/index';

import '../../src/index.less';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    label: letter,
    value: letter,
    description: letter,
  };
});

export default () => {
  return (
    <Selector
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
    />
  );
};
