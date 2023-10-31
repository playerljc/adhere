import React, { useState } from 'react';

import List from '../../src/list';
import Book from '../mock/book';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <List.AutoCompleteListSelect
      mode="multiple"
      placeholder="AutoCompleteListSelect"
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      options={options}
      onChange={setValue}
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
      listProps={{
        itemLayout: 'horizontal',
        renderItem: (item) => (
          <List.Item>
            <List.Item.Meta title={item.title} description={item.label} />
          </List.Item>
        ),
      }}
    />
  );
};
