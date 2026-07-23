import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import AutoComplete from './AutoComplete';
import AutoCompleteMultiple from './AutoCompleteMultiple';
import TableMultiple from './TableMultiple';
import TablePaginMultiple from './TablePaginMultiple';
import TablePaginRadio from './TablePaginRadio';
import TreeAutoComplete from './TreeAutoComplete';
import TreeTableMultiple from './TreeTableMultiple';

e2e.PC({
  children: <AutoComplete />,
});
