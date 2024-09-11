import type { CascaderProps } from 'antd';
import React, { memo } from 'react';

import type { DisplayNameInternal } from '../types';
import Cascader from './Cascader';
import CascaderMulti from './CascaderMulti';

const InternalCascaderShowParent = memo<CascaderProps>((props) => (
  <CascaderMulti {...props} showCheckedStrategy={Cascader.SHOW_PARENT} />
));

const CascaderShowParent = InternalCascaderShowParent as DisplayNameInternal<
  typeof InternalCascaderShowParent
>;
CascaderShowParent.displayName = 'CascaderShowParent';

export default CascaderShowParent;
