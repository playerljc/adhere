import React, { useState } from 'react';

import { Checkbox, Select } from '@baifendian/adhere-ui-anthoc';

import styles from '../Cascader/index.less';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Select.DropdownRenderSelect
      placeholder="Select"
      mode="multiple"
      value={value}
      onChange={setValue}
      className={styles.Wrapper}
      options={[
        {
          label: '男',
          value: '2',
        },
        {
          label: '女',
          value: '1',
        },
      ]}
    >
      {({ originNode, value, onChange, options }) => {
        return <Checkbox.Group value={value} onChange={onChange} options={options} />;
      }}
    </Select.DropdownRenderSelect>
  );
};
