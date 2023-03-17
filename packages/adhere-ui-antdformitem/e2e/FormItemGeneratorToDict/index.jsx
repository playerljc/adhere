import React from 'react';

import { Space } from '@baifendian/adhere';

import Menu from './menu';
import Tag from './tag';

export default () => {
  return (
    <Space.Group direction="vertical">
      <Tag />
      <Menu />
    </Space.Group>
  );
};
