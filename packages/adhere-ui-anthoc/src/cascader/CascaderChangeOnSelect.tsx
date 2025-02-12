import type { CascaderProps } from 'antd';
import React, { memo } from 'react';

import type { DisplayNameInternal } from '../types';
import Cascader from './CascaderTreeSelect';

const InternalCascaderChangeOnSelect = memo<CascaderProps>((props) => (
  <Cascader {...props} changeOnSelect />
));

const CascaderChangeOnSelect = InternalCascaderChangeOnSelect as DisplayNameInternal<
  typeof InternalCascaderChangeOnSelect
>;
CascaderChangeOnSelect.displayName = 'CascaderChangeOnSelect';

export default CascaderChangeOnSelect;
