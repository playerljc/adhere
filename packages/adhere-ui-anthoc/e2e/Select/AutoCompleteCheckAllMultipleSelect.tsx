import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import Select from '../../src/multiple-select';
import Book from '../mock/book';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <Select.AutoCompleteCheckAllMultipleSelect
      style={{ width: 600 }}
      placeholder="AutoCompleteCheckAllMultipleSelect"
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
      // render={(origin, children) => {
      //   return (
      //     <div>
      //       <div>{children}</div>
      //       <div>{origin}</div>
      //     </div>
      //   );
      // }}
    >
      {({ originNode, value, onChange, options }) => {
        // return originNode;
        return <Checkbox.Group value={value} onChange={onChange} options={options} />;
      }}
    </Select.AutoCompleteCheckAllMultipleSelect>
  );
};
