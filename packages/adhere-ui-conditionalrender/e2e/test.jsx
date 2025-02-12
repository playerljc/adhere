import React from 'react';

import ConditionalRender from '../src/index';

export default () => {
  return (
    <ConditionalRender conditional>
      <div>success</div>
    </ConditionalRender>
  );
};
