import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';
import MultipleSelect from '../../src/multiple-select/index';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <MultipleSelect.CheckAllSelect
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
      // render={(origin, children) => {
      //   return (
      //     <div>
      //       <div>{children}</div>
      //       <div>{origin}</div>
      //     </div>
      //   );
      // }}
    >
      {({ originNode, value, onChange, options }) => {
        // return originNode;
        return <Checkbox.Group value={value} onChange={onChange} options={options} />;
      }}
    </MultipleSelect.CheckAllSelect>
  );
};
