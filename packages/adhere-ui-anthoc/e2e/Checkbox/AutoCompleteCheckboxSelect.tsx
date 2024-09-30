import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import { ArrayEntityValueHOC } from '../../src/index';
import Book from '../mock/book';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([
    // 默认值
    Book[0].id,
  ]);

  return (
    <Checkbox.AutoCompleteCheckboxSelect
      placeholder="AutoCompleteCheckboxSelect"
      // 用来做初始化的options
      defaultOptions={[Book[0]]}
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      options={options}
      onChange={function (val) {
        debugger;
        setValue(val);
      }}
      loadData={(_kw) =>
        new Promise((resolve) => {
          console.log('_kw', _kw);

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
