import type { CascaderProps } from 'antd';
import React, { memo } from 'react';

import type { DisplayNameInternal } from '../types';
import Cascader from './Cascader';
import CascaderMulti from './CascaderMulti';

const InternalCascaderShowChild = memo<CascaderProps>((props) => (
  <CascaderMulti {...props} showCheckedStrategy={Cascader.SHOW_CHILD} />
));

const CascaderShowChild = InternalCascaderShowChild as DisplayNameInternal<
  typeof InternalCascaderShowChild
>;
CascaderShowChild.displayName = 'CascaderShowChild';

export default CascaderShowChild;
