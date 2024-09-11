import React, { memo } from 'react';

import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';

import AutoCompleteSelect from '../select/AutoCompleteSelect';
import type { DisplayNameInternal } from '../types';

/**
 * AutoCompleteMultipleSelect
 * @param props
 * @constructor
 */
const InternalAutoCompleteMultipleSelect = memo<AutoCompleteProps>((props) => (
  <AutoCompleteSelect {...props} mode="multiple" />
));

const AutoCompleteMultipleSelect = InternalAutoCompleteMultipleSelect as DisplayNameInternal<
  typeof InternalAutoCompleteMultipleSelect
>;
AutoCompleteMultipleSelect.displayName = 'AutoCompleteMultipleSelect';

export default AutoCompleteMultipleSelect;
