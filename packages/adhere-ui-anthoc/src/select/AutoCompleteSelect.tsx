import React from 'react';
import type { FC } from 'react';

import AutoComplete from '@baifendian/adhere-ui-auto-complete';
import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';

/**
 * AutoCompleteSelect
 * @param props
 * @constructor
 */
const AutoCompleteSelect: FC<AutoCompleteProps> = (props) => <AutoComplete {...props} />;

export default AutoCompleteSelect;
