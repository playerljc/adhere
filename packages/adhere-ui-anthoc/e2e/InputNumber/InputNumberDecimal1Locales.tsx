import React, { useState } from 'react';

import InputNumberDecimal1 from '../../src/input-number-decimal1';
import Space from '../../src/space';

export default () => {
  const [us, setUs] = useState(1234.5);
  const [german, setGerman] = useState(1234.5);
  const [french, setFrench] = useState(1234.5);
  const [international, setInternational] = useState(1234.5);

  return (
    <Space direction="vertical" size={16}>
      <div>
        <div style={{ marginBottom: 8 }}>US</div>
        <InputNumberDecimal1.InputNumberDecimal1US
          style={{ width: 240 }}
          value={us}
          onChange={setUs}
        />
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>German</div>
        <InputNumberDecimal1.InputNumberDecimal1German
          style={{ width: 240 }}
          value={german}
          onChange={setGerman}
        />
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>French</div>
        <InputNumberDecimal1.InputNumberDecimal1French
          style={{ width: 240 }}
          value={french}
          onChange={setFrench}
        />
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>International</div>
        <InputNumberDecimal1.InputNumberDecimal1International
          style={{ width: 240 }}
          value={international}
          onChange={setInternational}
        />
      </div>
    </Space>
  );
};
