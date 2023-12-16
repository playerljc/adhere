import React from 'react';

import { Expression } from '@baifendian/adhere';
import Math from '@baifendian/adhere-ui-expression/es/operators/Math';

export default () => (
  <div>
    <Expression operators={Math} />
  </div>
);
