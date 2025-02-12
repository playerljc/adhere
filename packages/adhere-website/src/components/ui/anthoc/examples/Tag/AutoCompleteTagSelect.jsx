import React, { useState } from 'react';

import { Tag } from '@baifendian/adhere-ui-anthoc';

import Book from '@/mock/book';

import styles from '../examples.less';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <Tag.AutoCompleteTagSelect
      placeholder="AutoCompleteTagSelect"
      mode="multiple"
      className={styles.FieldWrapper}
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
      // tagProps={{
      //   mode: 'multiple',
      // }}
    />
  );
};
