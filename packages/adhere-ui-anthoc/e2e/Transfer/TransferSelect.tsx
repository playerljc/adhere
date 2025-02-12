import React, { useState } from 'react';

import Transfer from '../../src/transfer';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Transfer.TransferSelect
      placeholder="A-Z"
      style={{ width: 410 }}
      value={value}
      onChange={setValue}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          label: letter,
          value: letter,
        };
      })}
    />
  );
};
