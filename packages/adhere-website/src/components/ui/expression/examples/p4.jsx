import React from 'react';

import { Expression } from '@baifendian/adhere';

export default () => (
  <div>
    <Expression
      operators={[
        { label: '===', value: '===', type: 'binary' },
        { label: '++', value: '++', type: 'binary' },
        { label: '--', value: '--', type: 'binary' },
        { label: '&#43;', value: '&#43;', type: 'binary' },
        { label: '+=', value: '+=', type: 'binary' },
        { label: '[]', value: '[]', type: 'brackets' },
        { label: '{}', value: '{}', type: 'brackets' },
      ]}
    />
  </div>
);
