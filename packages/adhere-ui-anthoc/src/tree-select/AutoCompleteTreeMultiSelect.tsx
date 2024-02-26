import React, { memo } from 'react';

import type { TreeAutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';

import type { DisplayNameInternal } from '../types';
import AutoCompleteTreeSelect from './AutoCompleteTreeSelect';

/**
 * AutoCompleteTreeMultiSelect
 * @param props
 * @constructor
 */
const InternalAutoCompleteTreeMultiSelect = memo<TreeAutoCompleteProps>((props) => (
  <AutoCompleteTreeSelect {...props} multiple />
));

const AutoCompleteTreeMultiSelect = InternalAutoCompleteTreeMultiSelect as DisplayNameInternal<
  typeof InternalAutoCompleteTreeMultiSelect
>;
AutoCompleteTreeMultiSelect.displayName = 'AutoCompleteTreeMultiSelect';

export default AutoCompleteTreeMultiSelect;
