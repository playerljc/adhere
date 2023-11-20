import React from 'react';

import { Radio } from '@baifendian/adhere-ui-anthoc';

export default () => (
  <Radio.ButtonRadio
    options={Array.from({ length: 26 }).map((t, _index) => {
      const letter = String.fromCharCode(97 + _index).toUpperCase();

      return {
        label: letter,
        value: letter,
      };
    })}
  />
);
