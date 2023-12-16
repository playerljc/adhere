import React from 'react';

import { SubmitButton } from '@baifendian/adhere-ui-anthoc';

export default () => (
  <SubmitButton
    style={{
      width: 200,
    }}
    type="primary"
    onClick={() => new Promise((resolve) => setTimeout(resolve, 3000))}
  >
    提交
  </SubmitButton>
);
