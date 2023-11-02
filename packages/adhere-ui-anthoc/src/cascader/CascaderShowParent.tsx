import type { CascaderProps } from 'antd';
import React from 'react';
import type { FC } from 'react';

import Cascader from './Cascader';
import CascaderMulti from './CascaderMulti';

const CascaderShowParent: FC<CascaderProps> = (props) => (
  <CascaderMulti {...props} showCheckedStrategy={Cascader.SHOW_PARENT} />
);

export default CascaderShowParent;
