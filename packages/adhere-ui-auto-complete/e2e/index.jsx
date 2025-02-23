import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import TableTest from './Table';
import TablePaginMultiple from './TablePaginMultiple';
import TablePaginRadio from './TablePaginRadio';
import TableTreeTest from './TableTreeTest';
import Test from './Test.jsx';
import TreeTest from './TreeTest';

e2e.PC({
  children: <TableTreeTest />,
});
