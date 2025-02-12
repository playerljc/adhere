import React from 'react';

import Revolving from '../src/index';

import '../src/index.less';

export default () => {
  return (
    <div>
      <div style={{ width: 200 }}>
        <Revolving
          direction="right"
          items={Array.from({ length: 10 }).map((_, index) => ({
            key: `${index + 1}`,
            children: <span>{index + 1}</span>,
          }))}
        ></Revolving>
      </div>
    </div>
  );
};
