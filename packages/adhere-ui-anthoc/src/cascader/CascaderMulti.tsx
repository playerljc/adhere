import React from 'react';
import type { FC } from 'react';

import type { CascaderTreeSelectProps } from '../types';
import Cascader from './CascaderTreeSelect';

const CascaderMulti: FC<CascaderTreeSelectProps> = (props) => (
  // @ts-ignore
  <Cascader {...props} multiple maxTagCount="responsive" />
);

export default CascaderMulti;
