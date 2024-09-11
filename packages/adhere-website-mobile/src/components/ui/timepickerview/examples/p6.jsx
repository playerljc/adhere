import React, { useState } from 'react';

import { MobileTimePickerView } from '@baifendian/adhere';

export default () => {
  const [value, setValue] = useState();

  return (
    <MobileTimePickerView
      value={value}
      onChange={(_value) => {
        setValue(_value);
        // console.log(_value, _value.format('YYYY-MM-DD HH:mm:ss'));
      }}
    />
  );
};
