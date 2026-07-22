import React, { useState } from 'react';

import Transfer from '../../src/transfer';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Transfer.TransferSelect
      placeholder="TransferSelect"
      style={{ width: 410 }}
      dropdownStyle={{ maxHeight: 400, overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      transferProps={{
        titles: ['可选', '已选'],
        showSearch: true,
      }}
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
