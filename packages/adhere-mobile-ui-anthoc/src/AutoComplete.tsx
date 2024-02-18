import React from 'react';
import type { FC } from 'react';

import AdhereAutoComplete from '@baifendian/adhere-mobile-ui-auto-complete';

import type { AutoCompleteProps } from './types';

const AutoComplete: FC<AutoCompleteProps> = ({ autoCompleteProps, children }) => (
  <AdhereAutoComplete {...autoCompleteProps}>{(params) => children?.(params)}</AdhereAutoComplete>
);

export default AutoComplete;
