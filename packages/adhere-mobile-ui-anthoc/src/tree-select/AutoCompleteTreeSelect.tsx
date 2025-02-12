import React, { memo } from 'react';

import AutoComplete from '@baifendian/adhere-mobile-ui-auto-complete';
import type { TreeAutoCompleteProps } from '@baifendian/adhere-mobile-ui-auto-complete/es/types';

import type { DisplayNameInternal } from '../types';

/**
 * AutoCompleteTreeSelect
 * @param props
 * @constructor
 */
const InternalAutoCompleteTreeSelect = memo<TreeAutoCompleteProps>((props) => (
  <AutoComplete.TreeAutoComplete {...props} />
));

const AutoCompleteTreeSelect = InternalAutoCompleteTreeSelect as DisplayNameInternal<
  typeof InternalAutoCompleteTreeSelect
>;
AutoCompleteTreeSelect.displayName = 'AutoCompleteTreeSelect';

export default AutoCompleteTreeSelect;
