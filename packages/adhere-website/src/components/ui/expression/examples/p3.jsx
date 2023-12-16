import React from 'react';

import { Expression } from '@baifendian/adhere';
import Sql from '@baifendian/adhere-ui-expression/es/operators/Sql';

export default () => (
  <div>
    <Expression operators={Sql} />
  </div>
);
