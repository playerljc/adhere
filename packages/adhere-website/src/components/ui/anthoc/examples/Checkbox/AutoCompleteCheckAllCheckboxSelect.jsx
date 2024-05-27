import React, { useContext, useState } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { Checkbox } from '@baifendian/adhere-ui-anthoc';

import Book from '@/mock/book';

import styles from '../examples.less';

export default () => {
  const [options, setOptions] = useState([]);

  const [value, setValue] = useState([]);

  const { media } = useContext(ConfigProvider.Context);

  return (
    <Checkbox.AutoCompleteCheckAllCheckboxSelect
      placeholder="AutoCompleteCheckAllCheckboxSelect111"
      className={styles.FieldWrapper}
      dropdownStyle={{ maxHeight: Util.pxToRem(300, media.designWidth, media), overflow: 'auto' }}
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
    />
  );
};
