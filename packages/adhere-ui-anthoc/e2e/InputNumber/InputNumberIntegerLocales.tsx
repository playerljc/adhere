import React, { useState } from 'react';

import InputNumberInteger from '../../src/input-number-integer';
import Space from '../../src/space';

export default () => {
  const [us, setUs] = useState(1234567);
  const [german, setGerman] = useState(1234567);
  const [french, setFrench] = useState(1234567);
  const [international, setInternational] = useState(1234567);

  return (
    <Space orientation="vertical" size={16}>
      <div>
        <div style={{ marginBottom: 8 }}>US</div>
        <InputNumberInteger.InputNumberIntegerUS
          style={{ width: 240 }}
          value={us}
          onChange={setUs}
        />
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>German</div>
        <InputNumberInteger.InputNumberIntegerGerman
          style={{ width: 240 }}
          value={german}
          onChange={setGerman}
        />
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>French</div>
        <InputNumberInteger.InputNumberIntegerFrench
          style={{ width: 240 }}
          value={french}
          onChange={setFrench}
        />
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>International</div>
        <InputNumberInteger.InputNumberIntegerInternational
          style={{ width: 240 }}
          value={international}
          onChange={setInternational}
        />
      </div>
    </Space>
  );
};
