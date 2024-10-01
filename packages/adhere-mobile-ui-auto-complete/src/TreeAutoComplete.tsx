import React, { memo, useMemo } from 'react';

import Tree from '@baifendian/adhere-mobile-ui-tree';
import type { TreeSelectProps } from '@baifendian/adhere-mobile-ui-tree/es/types';
import Util from '@baifendian/adhere-util';

import AutoComplete from './AutoComplete';
import type { TreeAutoCompleteProps } from './types';

const TreeAutoComplete = memo<TreeAutoCompleteProps>(
  ({ treeSelectProps, ...autoCompleteProps }) => {
    const autoCompleteSearchDataSource = useMemo(() => {
      if (!autoCompleteProps.searchDataSource) return [];
      if (!autoCompleteProps.searchDataSource.length) return [];

      return Util.treeToArray(
        autoCompleteProps.searchDataSource,
        {
          parentIdAttr: 'pId',
          rootParentId: 0,
        },
        'key',
      );
    }, [autoCompleteProps.searchDataSource]);

    return (
      <AutoComplete {...(autoCompleteProps ?? {})} searchDataSource={autoCompleteSearchDataSource}>
        {({ value, onChange }) => {
          const searchDataSource = autoCompleteProps.searchDataSource;

          return (
            <Tree.TreeSelect
              {...(treeSelectProps ?? {})}
              value={value as TreeSelectProps['value']}
              treeData={searchDataSource}
              onChange={onChange}
            />
          );
        }}
      </AutoComplete>
    );
  },
);

TreeAutoComplete.displayName = 'TreeAutoComplete';

export default TreeAutoComplete;
