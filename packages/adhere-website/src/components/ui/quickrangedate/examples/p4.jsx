import React, { useState } from 'react';

import { QuickRangeDate } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState();

  return (
    <QuickRangeDate
      value={value}
      onChange={(value) => {
        console.log(value);
        setValue(value);
      }}
    />
  );
};
