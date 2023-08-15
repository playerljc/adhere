// import dayjs from 'dayjs';
import React from 'react';

import Revolving from '../src/index';

import '../src/index.less';

// console.log(dayjs.Ls.en.formats.L);

export default () => {
  return (
    <div>
      <div style={{ width: 200 }}>
        <Revolving direction="left">
          <Revolving.Item>Slide 1</Revolving.Item>
          <Revolving.Item>Slide 2</Revolving.Item>
          <Revolving.Item>Slide 3</Revolving.Item>
          <Revolving.Item>Slide 4</Revolving.Item>
          <Revolving.Item>Slide 5</Revolving.Item>
          <Revolving.Item>Slide 6</Revolving.Item>
          <Revolving.Item>Slide 7</Revolving.Item>
          <Revolving.Item>Slide 8</Revolving.Item>
          <Revolving.Item>Slide 9</Revolving.Item>
          <Revolving.Item>Slide 10</Revolving.Item>
        </Revolving>
      </div>
    </div>
  );
};
