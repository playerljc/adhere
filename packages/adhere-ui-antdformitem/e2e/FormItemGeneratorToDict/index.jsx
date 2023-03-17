import React from 'react';

import { Space } from '@baifendian/adhere';

import Dropdown from './dropdown';
import Menu from './menu';
import Tag from './tag';

export default () => {
  return (
    <Space.Group direction="vertical">
      <Tag />
      <Menu />
      <Dropdown />
    </Space.Group>
  );
};
