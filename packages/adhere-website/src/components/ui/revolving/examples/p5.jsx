import React from 'react';

import { Revolving } from '@baifendian/adhere';

export default () => (
  <Revolving direction="bottom" speed={1000 * 3} style={{ height: 50 }}>
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
);
