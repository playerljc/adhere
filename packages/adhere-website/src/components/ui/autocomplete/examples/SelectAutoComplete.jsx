import React, { useState } from 'react';

import { AutoComplete } from '@baifendian/adhere';

import Book from '../data';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <AutoComplete
      placeholder="自动补全"
      value={value}
      mode="multiple"
      style={{ width: 600 }}
      loadData={(_kw) => {
        return new Promise((resolve) => {
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
        });
      }}
      options={options}
      onChange={(_value) => {
        setValue(_value);
      }}
    />
  );
};
