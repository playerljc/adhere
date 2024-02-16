import React from 'react';

import AutoComplete from '@baifendian/adhere-mobile-ui-auto-complete';

import type { UseAutoComplete } from './types';

const useAutoComplete: UseAutoComplete = (autoCompleteProps, children) => (
  <AutoComplete {...autoCompleteProps}>{(params) => children?.(params)}</AutoComplete>
);

export default useAutoComplete;
