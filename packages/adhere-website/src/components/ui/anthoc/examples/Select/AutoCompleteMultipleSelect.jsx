import React, { useState } from 'react';

import { MultipleSelect } from '@baifendian/adhere-ui-anthoc';

import Book from '@/mock/book';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <MultipleSelect.AutoCompleteMultipleSelect
      style={{ width: 600 }}
      placeholder="AutoCompleteMultipleSelect"
      value={value}
      options={options}
      onChange={setValue}
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
