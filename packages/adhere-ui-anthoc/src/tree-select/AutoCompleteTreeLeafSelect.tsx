import React, { memo } from 'react';

import { TreeAutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';

import { DisplayNameInternal } from '../types';
import AutoCompleteTreeSelect from './AutoCompleteTreeSelect';
import useTreeSelectLeaf from './useTreeSelectLeaf';

/**
 * AutoCompleteTreeLeafSelect
 * @param treeSelectProps
 * @param autoCompleteTreeSelect
 * @constructor
 */
const InternalAutoCompleteTreeLeafSelect = memo<TreeAutoCompleteProps>(
  ({ treeData, ...autoCompleteTreeSelectProps }) => {
    const targetTreeData = useTreeSelectLeaf(treeData);

    return <AutoCompleteTreeSelect {...autoCompleteTreeSelectProps} treeData={targetTreeData} />;
  },
);

const AutoCompleteTreeLeafSelect = InternalAutoCompleteTreeLeafSelect as DisplayNameInternal<
  typeof InternalAutoCompleteTreeLeafSelect
>;
AutoCompleteTreeLeafSelect.displayName = 'AutoCompleteTreeLeafSelect';

export default AutoCompleteTreeLeafSelect;
