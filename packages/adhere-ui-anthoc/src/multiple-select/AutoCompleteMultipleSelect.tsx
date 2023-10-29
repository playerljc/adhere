import React from 'react';
import type { FC } from 'react';

import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';

import AutoCompleteSelect from '../select/AutoCompleteSelect';

/**
 * AutoCompleteMultipleSelect
 * @param props
 * @constructor
 */
const AutoCompleteMultipleSelect: FC<AutoCompleteProps> = (props) => (
  <AutoCompleteSelect {...props} mode="multiple" />
);

export default AutoCompleteMultipleSelect;
