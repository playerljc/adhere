import { TreeSelect } from 'antd';
import React, { memo } from 'react';

import type { TreeAutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';

import type { DisplayNameInternal } from '../types';
import AutoCompleteTreeSelect from './AutoCompleteTreeSelect';

/**
 * AutoCompleteTreeCheckedShowParentSelect
 * @param props
 * @constructor
 */
const InternalAutoCompleteTreeCheckedShowParentSelect = memo<TreeAutoCompleteProps>((props) => (
  <AutoCompleteTreeSelect {...props} treeCheckable showCheckedStrategy={TreeSelect.SHOW_PARENT} />
));

const AutoCompleteTreeCheckedShowParentSelect =
  InternalAutoCompleteTreeCheckedShowParentSelect as DisplayNameInternal<
    typeof InternalAutoCompleteTreeCheckedShowParentSelect
  >;
AutoCompleteTreeCheckedShowParentSelect.displayName = 'AutoCompleteTreeCheckedShowParentSelect';

export default AutoCompleteTreeCheckedShowParentSelect;
