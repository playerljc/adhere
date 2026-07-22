import React, { useState } from 'react';

import AutoComplete from '../../src/auto-complete';
import Space from '../../src/space';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    label: letter,
    value: `${97 + _index}`,
  };
});

export default () => {
  const [value, setValue] = useState({
    inputValue: '',
    selectValue: '',
  });

  return (
    <Space direction="vertical" size={12}>
      <AutoComplete.AutoCompleteSelectInput
        placeholder="AutoCompleteSelectInput（可输入可选择）"
        style={{ width: 280 }}
        value={value}
        options={options}
        onChange={setValue}
        allowClear
      />
      <div>
        inputValue: {value?.inputValue || '(空)'} / selectValue: {value?.selectValue || '(空)'}
      </div>
    </Space>
  );
};
