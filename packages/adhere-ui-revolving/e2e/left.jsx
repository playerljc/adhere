// import dayjs from 'dayjs';
import React from 'react';

import Revolving from '../src/index';

import '../src/index.less';

// console.log(dayjs.Ls.en.formats.L);

export default () => {
  return (
    <div>
      <div style={{ width: 200 }}>
        <Revolving
          direction="left"
          items={Array.from({ length: 10 }).map((_, index) => ({
            key: `${index + 1}`,
            children: <span>{index + 1}</span>,
          }))}
        ></Revolving>
      </div>
    </div>
  );
};
