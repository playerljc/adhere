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
      dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
      value={value}
      options={options}
      onChange={setValue}
      tagProps={{}}
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
                children: t.t,
              }));

            setOptions(result);

            resolve();
          }, 500);
        })
      }
      render={(checkAllOrigin, childrenOrigin) => {
        return (
          <div>
            <div style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
              {checkAllOrigin}
            </div>
            <div style={{ padding: 12 }}>{childrenOrigin}</div>
          </div>
        );
      }}
    />
  );
};
