import React, { useState } from 'react';

import { Steps } from '../../src';

const description = 'This is a description.';

export default () => {
  const [current, setCurrent] = useState(1);

  return (
    <div style={{ padding: 24 }}>
      <Steps
        current={current}
        onChange={setCurrent}
        items={[
          {
            title: 'Finished',
            description,
          },
          {
            title: 'In Progress',
            description,
            subTitle: 'Left 00:00:08',
          },
          {
            title: 'Waiting',
            description,
          },
        ]}
      />
    </div>
  );
};
