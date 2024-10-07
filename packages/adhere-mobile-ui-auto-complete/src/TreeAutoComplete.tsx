import React, { memo, useMemo } from 'react';

import Tree from '@baifendian/adhere-mobile-ui-tree';
import type { TreeSelectProps } from '@baifendian/adhere-mobile-ui-tree/es/types';
import Util from '@baifendian/adhere-util';

import AutoComplete from './AutoComplete';
import type { TreeAutoCompleteProps } from './types';

/**
 * TreeAutoComplete
 * @description searchDataSource是带有children数据结构
 */
const TreeAutoComplete = memo<TreeAutoCompleteProps>(
  ({ treeSelectProps, ...autoCompleteProps }) => {
    // 将带有children的数据结构转化成flat数据结构
    const autoCompleteSearchDataSource = useMemo(() => {
      if (!autoCompleteProps.searchDataSource) return [];
      if (!autoCompleteProps.searchDataSource.length) return [];

      if (!!treeSelectProps?.treeDataSimpleMode) {
        return autoCompleteProps.searchDataSource;
      }

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
