import React, { useState } from 'react';

import AutoComplete from '../src/index';
import Book from './data';

import '../src/index.less';

export default () => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(undefined);

  return (
    <AutoComplete
      placeholder="请输入关键字"
      value={value}
      style={{ width: 600 }}
      options={options}
      onChange={setValue}
      loadData={(_kw) => {
        return new Promise((resolve) => {
          if (!_kw) {
            setOptions([]);
            resolve();
            return;
          }

          setTimeout(() => {
            setOptions(
              Book.filter((_book) => _book.t.indexOf(_kw) !== -1).map((t) => ({
                label: t.t,
                value: t.id,
              })),
            );
            resolve();
          }, 500);
        });
      }}
    />
  );
};
