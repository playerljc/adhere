import React from 'react';

import { Revolving } from '@baifendian/adhere';

export default () => (
  <Revolving
    direction="bottom"
    delay={1000 * 3}
    styleWrapper={{ height: 50 }}
    items={Array.from({ length: 10 }).map((_, _index) => ({
      key: `${_index + 1}`,
      children: <span>Slide {_index + 1}</span>,
    }))}
  />
);
