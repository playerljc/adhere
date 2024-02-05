import React, { useState } from 'react';

import { Checkbox, MultipleSelect } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <MultipleSelect.CheckAllSelect
      placeholder="Select"
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
      render={(checkAllOrigin, children) => (
        <div style={{ display: 'flex' }}>
          <div style={{ flexShrink: 0, marginRight: 10, alignSelf: 'flex-start' }}>
            {checkAllOrigin}
          </div>
          <div style={{ flex: '1', minWidth: 0 }}>{children}</div>
        </div>
      )}
    >
      {({ originNode, value, onChange, options }) => {
        return <Checkbox.Group value={value} onChange={onChange} options={options} />;
      }}
    </MultipleSelect.CheckAllSelect>
  );
};
