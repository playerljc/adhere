import React, { useContext, useState } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { Checkbox } from '@baifendian/adhere-ui-anthoc';

import styles from '../Cascader/index.less';

export default () => {
  const [value, setValue] = useState([]);

  const { media } = useContext(ConfigProvider.Context);

  return (
    <Checkbox.CheckboxSelect
      placeholder="A-Z"
      className={styles.Wrapper}
      dropdownStyle={{ maxHeight: Util.pxToRem(300, media.designWidth, media), overflowY: 'auto' }}
      value={value}
      onChange={setValue}
      options={Array.from({ length: 26 }).map((t, _index) => {
        const letter = String.fromCharCode(97 + _index).toUpperCase();

        return {
          label: letter,
          value: letter,
        };
      })}
    />
  );
};
