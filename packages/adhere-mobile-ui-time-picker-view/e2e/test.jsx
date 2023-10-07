import React, { useState } from 'react';

import MobileTimePickerView from '../src';

export default () => {
  const [value, setValue] = useState();

  return (
    <div>
      <MobileTimePickerView format="HH:mm:ss" />

      <MobileTimePickerView format="HH:mm" />

      <MobileTimePickerView format="HH" />

      <MobileTimePickerView format="mm:ss" />

      <MobileTimePickerView format="ss" />

      <MobileTimePickerView
        value={value}
        onChange={(_value) => {
          setValue(_value);
          console.log(_value, _value.format('YYYY-MM-DD HH:mm:ss'));
        }}
      />
    </div>
  );
};
