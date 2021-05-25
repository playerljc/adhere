import React from 'react';

import Playground from '@/lib/Playground';

export default () => (
  <Playground
    mode="code"
    scope={{ React }}
    codeText={`
  import React from 'react';
    `}
  >
    <div>3D</div>
  </Playground>
);
