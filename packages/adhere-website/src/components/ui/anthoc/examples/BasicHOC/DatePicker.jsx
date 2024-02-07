import React from 'react';

import { DatePicker } from '@baifendian/adhere-ui-anthoc';

export default () => (
  <DatePicker
    style={{
      width: 200,
    }}
    showTime
    onChange={(value, dateString) => {
      console.log(value, dateString);
    }}
  />
);
