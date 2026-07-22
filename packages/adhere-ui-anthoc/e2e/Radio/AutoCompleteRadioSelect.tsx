import React, { useState } from 'react';

import Radio from '../../src/radio';
import Book from '../mock/book';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState(Book[0].id);

  return (
    <Radio.AutoCompleteRadioSelect
      placeholder="AutoCompleteRadioSelect"
      defaultOptions={[
        {
          label: Book[0].label,
          value: Book[0].id,
        },
      ]}
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      options={options}
      onChange={setValue}
      radioProps={{}}
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
