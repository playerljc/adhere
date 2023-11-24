import React, { memo } from 'react';

import type { CascaderTreeSelectProps, DisplayNameInternal } from '../types';
import Cascader from './CascaderTreeSelect';

const InternalCascaderMulti = memo<CascaderTreeSelectProps>((props) => (
  // @ts-ignore
  <Cascader {...props} multiple maxTagCount="responsive" />
));

const CascaderMulti = InternalCascaderMulti as DisplayNameInternal<typeof InternalCascaderMulti>;
CascaderMulti.displayName = 'CascaderMulti';

export default CascaderMulti;
