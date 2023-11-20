import React, { useState } from 'react';

import { Checkbox, Select } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Select.DropdownRenderSelect
      placeholder="Select"
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
