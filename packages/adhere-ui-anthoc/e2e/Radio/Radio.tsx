import React from 'react';

import Radio from '../../src/radio';

// export default () => <Radio>男</Radio>;

export default () => (
  <Radio.Group
    options={[
      {
        label: '男',
        value: 2,
      },
      {
        label: '女',
        value: 1,
      },
    ]}
  />
);
