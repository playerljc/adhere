import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import Select from '../../src/select/index';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Select.DropdownRenderSelect
      mode="multiple"
      value={value}
      onChange={setValue}
      style={{ width: 200 }}
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
