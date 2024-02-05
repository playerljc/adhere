import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';

export default () => {
  const [value, setValue] = useState([]);

  return (
    <Checkbox.HorizontalCheckAllCheckbox
      value={value}
      onChange={setValue}
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
    />
  );
};
