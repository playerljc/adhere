import React, { useState } from 'react';

import { Tag } from '@baifendian/adhere-ui-anthoc';

import styles from '../Cascader/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Tag.TagSelect
      mode="multiple"
      className={styles.Wrapper}
      placeholder="A-Z"
      value={value}
      onChange={(v) => {
        setValue(v);
      }}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          value: letter,
          label: letter,
          children: letter,
        };
      })}
    />
  );
};
