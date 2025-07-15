import React, { memo, useMemo } from 'react';

import Tree from '@baifendian/adhere-mobile-ui-tree';
import type { TreeSelectProps, TreeDataItem } from '@baifendian/adhere-mobile-ui-tree/es/types';
import Util from '@baifendian/adhere-util';

import AutoComplete from './AutoComplete';
import type { TreeAutoCompleteProps, DataRecord } from './types';

/**
 * 树形自动完成组件
 * 
 * @description 将带有children的树形数据结构转换为扁平结构，支持树形数据的自动完成功能
 * 
 * @param props - 组件属性
 * @param props.treeSelectProps - 树选择组件的属性配置
 * @param props.searchDataSource - 搜索数据源，支持带有children的树形结构
 * @param props.autoCompleteProps - 自动完成组件的其他属性
 * 
 * @returns 树形自动完成组件实例
 * 
 * @example
 * ```tsx
 * <TreeAutoComplete
 *   searchDataSource={treeData}
 *   treeSelectProps={{
 *     treeDataSimpleMode: true
 *   }}
 *   onChange={handleChange}
 * />
 * ```
 */
const TreeAutoComplete = memo<TreeAutoCompleteProps>(
  ({ treeSelectProps, ...autoCompleteProps }) => {
    // 将带有children的数据结构转化成flat数据结构
    const autoCompleteSearchDataSource = useMemo((): DataRecord[] => {
      const { searchDataSource } = autoCompleteProps;
      
      if (!searchDataSource) return [];
      if (!searchDataSource.length) return [];

      // 如果使用简单模式，直接返回原始数据
      if (treeSelectProps?.treeDataSimpleMode) {
        return searchDataSource;
      }

      // 将树形结构转换为扁平数组
      return Util.treeToArray(
        searchDataSource as any,
        {
          parentIdAttr: 'pId',
          rootParentId: 0,
        },
        'key',
      );
    }, [autoCompleteProps.searchDataSource, treeSelectProps?.treeDataSimpleMode]);

    return (
      <AutoComplete {...(autoCompleteProps ?? {})} searchDataSource={autoCompleteSearchDataSource}>
        {({ value, onChange }) => {
          const searchDataSource = autoCompleteProps.searchDataSource as TreeDataItem[] | undefined;

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
