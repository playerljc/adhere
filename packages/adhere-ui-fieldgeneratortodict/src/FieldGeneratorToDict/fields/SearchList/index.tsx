import React from 'react';

import { setItem } from '../../ItemFactory';
import { createSearchListSelect, standardSearchListClassFactory } from './Util';

/**
 * SearchListStandard
 */
setItem('SearchList', 'Standard', (dictName) => (params) => {
  const SearchList = standardSearchListClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchList {...props} />;
});

/**
 * SearchListSingleSelect
 */
setItem('SearchList', 'SingleSelect', (dictName) => (params) => {
  return createSearchListSelect({
    dictName,
    params,
    selectionMode: 'single',
  });
});

/**
 * SearchListMultipleSelect
 */
setItem('SearchList', 'MultipleSelect', (dictName) => (params) => {
  return createSearchListSelect({
    dictName,
    params,
    selectionMode: 'multiple',
  });
});
