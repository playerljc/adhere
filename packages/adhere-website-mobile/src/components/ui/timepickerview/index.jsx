import React, { useState } from 'react';

import { MobileTimePickerView } from '@baifendian/adhere';

import DemoBlock from '@/lib/DemoBlock';

export default () => {
  const [value, setValue] = useState();

  return (
    <DemoBlock>
      <DemoBlock.Item title="HH:mm:ss">
        <MobileTimePickerView format="HH:mm:ss" />
      </DemoBlock.Item>

      <DemoBlock.Item title="HH:mm">
        <MobileTimePickerView format="HH:mm" />
      </DemoBlock.Item>

      <DemoBlock.Item title="HH">
        <MobileTimePickerView format="HH" />
      </DemoBlock.Item>

      <DemoBlock.Item title="mm:ss">
        <MobileTimePickerView format="mm:ss" />
      </DemoBlock.Item>

      <DemoBlock.Item title="ss">
        <MobileTimePickerView format="ss" />
      </DemoBlock.Item>

      <DemoBlock.Item title="onChange">
        <MobileTimePickerView
          value={value}
          onChange={(_value) => {
            setValue(_value);
            console.log(_value, _value.format('YYYY-MM-DD HH:mm:ss'));
          }}
        />
      </DemoBlock.Item>
    </DemoBlock>
  );
};
