import { TreeSelect } from 'antd';
import React, { memo } from 'react';

import type { TreeAutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';

import type { DisplayNameInternal } from '../types';
import AutoCompleteTreeSelect from './AutoCompleteTreeSelect';

/**
 * AutoCompleteTreeCheckedShowAllSelect
 * @param props
 * @constructor
 */
const InternalAutoCompleteTreeCheckedShowAllSelect = memo<TreeAutoCompleteProps>((props) => (
  <AutoCompleteTreeSelect {...props} treeCheckable showCheckedStrategy={TreeSelect.SHOW_ALL} />
));

const AutoCompleteTreeCheckedShowAllSelect =
  InternalAutoCompleteTreeCheckedShowAllSelect as DisplayNameInternal<
    typeof InternalAutoCompleteTreeCheckedShowAllSelect
  >;
AutoCompleteTreeCheckedShowAllSelect.displayName = 'AutoCompleteTreeCheckedShowAllSelect';

export default AutoCompleteTreeCheckedShowAllSelect;
