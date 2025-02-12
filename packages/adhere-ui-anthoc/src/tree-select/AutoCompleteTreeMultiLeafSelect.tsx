import React, { memo } from 'react';

import { TreeAutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';

import { DisplayNameInternal } from '../types';
import AutoCompleteTreeMultiSelect from './AutoCompleteTreeMultiSelect';
import useTreeSelectLeaf from './useTreeSelectLeaf';

/**
 * AutoCompleteTreeMultiLeafSelect
 * @param treeSelectProps
 * @param autoCompleteTreeSelect
 * @constructor
 */
const InternalAutoCompleteTreeMultiLeafSelect = memo<TreeAutoCompleteProps>(
  ({ treeData, ...autoCompleteTreeSelectProps }) => {
    const targetTreeData = useTreeSelectLeaf(treeData);

    return (
      <AutoCompleteTreeMultiSelect {...autoCompleteTreeSelectProps} treeData={targetTreeData} />
    );
  },
);

const AutoCompleteTreeMultiLeafSelect =
  InternalAutoCompleteTreeMultiLeafSelect as DisplayNameInternal<
    typeof InternalAutoCompleteTreeMultiLeafSelect
  >;
AutoCompleteTreeMultiLeafSelect.displayName = 'AutoCompleteTreeMultiLeafSelect';

export default AutoCompleteTreeMultiLeafSelect;
