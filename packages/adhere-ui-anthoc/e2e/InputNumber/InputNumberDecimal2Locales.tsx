import React, { useState } from 'react';

import InputNumberDecimal2 from '../../src/input-number-decimal2';
import Space from '../../src/space';

export default () => {
  const [us, setUs] = useState(1234.56);
  const [german, setGerman] = useState(1234.56);
  const [french, setFrench] = useState(1234.56);
  const [international, setInternational] = useState(1234.56);

  return (
    <Space orientation="vertical" size={16}>
      <div>
        <div style={{ marginBottom: 8 }}>US</div>
        <InputNumberDecimal2.InputNumberDecimal2US
          style={{ width: 240 }}
          value={us}
          onChange={setUs}
        />
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>German</div>
        <InputNumberDecimal2.InputNumberDecimal2German
          style={{ width: 240 }}
          value={german}
          onChange={setGerman}
        />
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>French</div>
        <InputNumberDecimal2.InputNumberDecimal2French
          style={{ width: 240 }}
          value={french}
          onChange={setFrench}
        />
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>International</div>
        <InputNumberDecimal2.InputNumberDecimal2International
          style={{ width: 240 }}
          value={international}
          onChange={setInternational}
        />
      </div>
    </Space>
  );
};
