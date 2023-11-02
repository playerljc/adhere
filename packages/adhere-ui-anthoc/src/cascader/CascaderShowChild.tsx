import type { CascaderProps } from 'antd';
import React from 'react';
import type { FC } from 'react';

import Cascader from './Cascader';
import CascaderMulti from './CascaderMulti';

const CascaderShowChild: FC<CascaderProps> = (props) => (
  <CascaderMulti {...props} showCheckedStrategy={Cascader.SHOW_CHILD} />
);

export default CascaderShowChild;
