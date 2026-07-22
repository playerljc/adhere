import React, { useState } from 'react';

import Space from '../../src/space';
import Tag from '../../src/tag';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    value: letter,
    label: letter,
    children: letter,
  };
});

export default () => {
  const [multipleValue, setMultipleValue] = useState(['A', 'B']);
  const [singleValue, setSingleValue] = useState('A');

  return (
    <Space direction="vertical" size={24}>
      <div>
        <div style={{ marginBottom: 8 }}>mode=multiple</div>
        <Tag.VerticalCheckableTagGroup
          mode="multiple"
          value={multipleValue}
          onChange={setMultipleValue}
          options={options}
        />
      </div>

      <div>
        <div style={{ marginBottom: 8 }}>mode=single</div>
        <Tag.VerticalCheckableTagGroup
          mode="single"
          value={singleValue}
          onChange={setSingleValue}
          options={options}
        />
      </div>
    </Space>
  );
};
