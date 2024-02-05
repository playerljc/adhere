import React, { useState } from 'react';

import Tag from '../../src/tag';
import Book from '../mock/book';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <Tag.AutoCompleteCheckAllTagSelect
      placeholder="AutoCompleteCheckAllTagSelect"
      style={{ width: 600 }}
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
                children: t.t,
              }));

            setOptions(result);

            resolve();
          }, 500);
        })
      }
      // render={(origin, children) => {
      //   return (
      //     <div>
      //       <div>{children}</div>
      //       <div>{origin}</div>
      //     </div>
      //   );
      // }}
    />
  );
};
