import React, { memo, useMemo } from 'react';

import { TreeAutoCompleteProps } from '@baifendian/adhere-mobile-ui-auto-complete/es/types';

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
  ({ treeSelectProps, ...autoCompleteTreeSelectProps }) => {
    const { treeData = [] } = treeSelectProps ?? {};

    const targetTreeData = useTreeSelectLeaf(treeData);

    const targetTreeSelectProps = useMemo(
      () => ({
        ...(treeSelectProps ?? {}),
        treeData: targetTreeData,
      }),
      [targetTreeData, treeSelectProps],
    );

    return (
      <AutoCompleteTreeSelect
        {...(autoCompleteTreeSelectProps ?? {})}
        treeSelectProps={targetTreeSelectProps}
      />
    );
  },
);

const AutoCompleteTreeLeafSelect = InternalAutoCompleteTreeLeafSelect as DisplayNameInternal<
  typeof InternalAutoCompleteTreeLeafSelect
>;
AutoCompleteTreeLeafSelect.displayName = 'AutoCompleteTreeLeafSelect';

export default AutoCompleteTreeLeafSelect;
