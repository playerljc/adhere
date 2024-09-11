import React, { memo } from 'react';

import AutoComplete from '@baifendian/adhere-ui-auto-complete';
import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';

import type { DisplayNameInternal } from '../types';

/**
 * AutoCompleteSelect
 * @param props
 * @constructor
 */
const InternalAutoCompleteSelect = memo<AutoCompleteProps>((props) => <AutoComplete {...props} />);

const AutoCompleteSelect = InternalAutoCompleteSelect as DisplayNameInternal<
  typeof InternalAutoCompleteSelect
>;
AutoCompleteSelect.displayName = 'AutoCompleteSelect';

export default AutoCompleteSelect;
