import React, { useState } from 'react';

import Transfer from '../../src/transfer';
import Book from '../mock/book';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([Book[0].id]);

  return (
    <Transfer.AutoCompleteTransferSelect
      placeholder="AutoCompleteTransferSelect"
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      defaultOptions={[
        {
          label: Book[0].label,
          value: Book[0].id,
        },
      ]}
      value={value}
      options={options}
      onChange={setValue}
      transferProps={{
        titles: ['可选', '已选'],
        showSearch: true,
      }}
      renderLoading={() => <div style={{ padding: 16 }}>加载中...</div>}
      loadData={(_kw) =>
        new Promise((resolve) => {
          if (!_kw) {
            setOptions([]);
            resolve();
            return;
          }

          setTimeout(() => {
            const result = [...Book]
              .filter((_book) => _book.t.indexOf(_kw) !== -1)
              .map((t) => ({
                label: t.t,
                value: t.id,
              }));

            setOptions(result);

            resolve();
          }, 500);
        })
      }
    />
  );
};
