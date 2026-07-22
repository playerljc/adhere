import React, { useState } from 'react';

import List from '../../src/list';
import Book from '../mock/book';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <List.AutoCompleteCheckAllListSelect
      placeholder="AutoCompleteCheckAllListSelect"
      style={{ width: 600 }}
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      options={options}
      onChange={setValue}
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
                title: t.t,
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
            <List.Item.Meta title={item.title ?? item.label} description={item.label} />
          </List.Item>
        ),
      }}
    />
  );
};
