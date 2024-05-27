import React, { useState } from 'react';

import { Checkbox, MultipleSelect } from '@baifendian/adhere-ui-anthoc';

import Book from '@/mock/book';

import styles from '../examples.less';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([]);

  return (
    <MultipleSelect.AutoCompleteCheckAllMultipleSelect
      className={styles.FieldWrapper}
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
    >
      {({ originNode, value, onChange, options }) => {
        // return originNode;
        return <Checkbox.Group value={value} onChange={onChange} options={options} />;
      }}
    </MultipleSelect.AutoCompleteCheckAllMultipleSelect>
  );
};
