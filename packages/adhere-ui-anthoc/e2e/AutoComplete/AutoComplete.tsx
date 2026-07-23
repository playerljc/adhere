import React, { useState } from 'react';

import AutoComplete from '../../src/auto-complete';
import Space from '../../src/space';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    label: letter,
    value: letter,
  };
});

export default () => {
  const [value, setValue] = useState('');

  return (
    <Space orientation="vertical" size={12}>
      <AutoComplete
        value={value}
        options={options}
        style={{ width: 200 }}
        placeholder="AutoComplete"
        onChange={setValue}
        onSelect={(v) => {
          setValue(v);
        }}
      />
      <div>当前 value: {value || '(空)'}</div>
    </Space>
  );
};
