import { TreeSelect } from 'antd';
import React, { memo } from 'react';

import type { TreeAutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';

import type { DisplayNameInternal } from '../types';
import AutoCompleteTreeSelect from './AutoCompleteTreeSelect';

/**
 * AutoCompleteTreeCheckedShowChildSelect
 * @param props
 * @constructor
 */
const InternalAutoCompleteTreeCheckedShowChildSelect = memo<TreeAutoCompleteProps>((props) => (
  <AutoCompleteTreeSelect {...props} treeCheckable showCheckedStrategy={TreeSelect.SHOW_CHILD} />
));

const AutoCompleteTreeCheckedShowChildSelect =
  InternalAutoCompleteTreeCheckedShowChildSelect as DisplayNameInternal<
    typeof InternalAutoCompleteTreeCheckedShowChildSelect
  >;
AutoCompleteTreeCheckedShowChildSelect.displayName = 'AutoCompleteTreeCheckedShowChildSelect';

export default AutoCompleteTreeCheckedShowChildSelect;
