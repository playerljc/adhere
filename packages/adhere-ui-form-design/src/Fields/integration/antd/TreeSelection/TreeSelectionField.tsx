import { Spin, Tree, type TreeProps } from 'antd';
import classNames from 'classnames';
import React, { type CSSProperties, useCallback, useMemo, useState } from 'react';

import {
  collectExpandedKeysForKeyword,
  filterTreeNodesByKeyword,
} from '../../../../utils/filterTreeNodesByKeyword';
import type { TreeDataNode } from '../../../../utils/treeDataSource';
import { resolveI18nText } from '../../../../utils';
import TreeSelectionSearchBar from './TreeSelectionSearchBar';
import {
  pickTreeSelectionTreeProps,
  TREE_SELECTION_FIELD_NAMES,
  type TreeSelectionFieldConfig,
} from './resolveTreeSelectionFieldProps';

import './index.less';

const selectorPrefix = 'adhere-ui-fd-tree-selection-field';

export type TreeSelectionCheckedKeys =
  | React.Key[]
  | {
      checked: React.Key[];
      halfChecked: React.Key[];
    };

export type TreeSelectionFieldProps = TreeSelectionFieldConfig & {
  value?: TreeSelectionCheckedKeys;
  onChange?: (value: TreeSelectionCheckedKeys) => void;
  treeData?: TreeDataNode[];
  loading?: boolean;
  lang?: string;
  style?: CSSProperties;
  className?: string;
  actions?: Record<string, (...args: any[]) => any>;
};

const TreeSelectionField: React.FC<TreeSelectionFieldProps> = ({
  value,
  onChange,
  treeData = [],
  loading = false,
  lang = 'zh_CN',
  style,
  className,
  actions = {},
  showSearch = true,
  searchPlaceholder,
  searchAllowClear = true,
  contentMaxHeight = 320,
  checkable = true,
  autoExpandParent: autoExpandParentProp = true,
  defaultExpandAll = false,
  disabled,
  ...restConfig
}) => {
  const [appliedKeyword, setAppliedKeyword] = useState('');
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(autoExpandParentProp);

  const isSearchActive = !!appliedKeyword.trim();

  const handleSearch = useCallback(
    (keyword: string) => {
      setAppliedKeyword(keyword);
      if (keyword) {
        const keys = collectExpandedKeysForKeyword(
          treeData,
          keyword,
          TREE_SELECTION_FIELD_NAMES,
        );
        setExpandedKeys(keys);
        setAutoExpandParent(true);
      }
    },
    [treeData],
  );

  const handleClearSearch = useCallback(() => {
    setAppliedKeyword('');
  }, []);

  const displayTreeData = useMemo(() => {
    if (!showSearch) return treeData;
    return filterTreeNodesByKeyword(treeData, appliedKeyword, TREE_SELECTION_FIELD_NAMES);
  }, [treeData, appliedKeyword, showSearch]);

  const resolvedSearchPlaceholder = useMemo(
    () => resolveI18nText(searchPlaceholder, lang) as string,
    [searchPlaceholder, lang],
  );

  const treeProps = useMemo(
    () =>
      pickTreeSelectionTreeProps({
        checkable,
        autoExpandParent: autoExpandParentProp,
        defaultExpandAll,
        disabled,
        ...restConfig,
      }),
    [checkable, autoExpandParentProp, defaultExpandAll, disabled, restConfig],
  );

  const expandedTreeProps = useMemo(() => {
    if (isSearchActive) {
      return { expandedKeys, autoExpandParent };
    }
    if (expandedKeys.length > 0) {
      return { expandedKeys, autoExpandParent };
    }
    return {};
  }, [isSearchActive, expandedKeys, autoExpandParent]);

  const handleExpand: TreeProps['onExpand'] = (keys, info) => {
    setExpandedKeys(keys);
    setAutoExpandParent(false);
    actions.onExpand?.({ expandedKeys: keys, ...info });
  };

  const handleCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    onChange?.(checkedKeys as TreeSelectionCheckedKeys);
    actions.onCheck?.({ checkedKeys, ...info });
  };

  const handleSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    actions.onSelect?.({ selectedKeys, ...info });
  };

  const rootStyle = useMemo<CSSProperties>(() => {
    const next: CSSProperties = { ...(style ?? {}) };
    if (contentMaxHeight != null && contentMaxHeight > 0) {
      (next as Record<string, string>)['--tree-selection-content-max-height'] =
        `${contentMaxHeight}px`;
    }
    return next;
  }, [style, contentMaxHeight]);

  return (
    <div className={classNames(selectorPrefix, className)} style={rootStyle}>
      {showSearch && (
        <TreeSelectionSearchBar
          placeholder={resolvedSearchPlaceholder || undefined}
          allowClear={searchAllowClear}
          disabled={!!disabled}
          onSearch={handleSearch}
          onClear={handleClearSearch}
        />
      )}
      <div className={`${selectorPrefix}-body`}>
        <Spin spinning={loading}>
          <Tree
            {...treeProps}
            treeData={displayTreeData as TreeProps['treeData']}
            fieldNames={TREE_SELECTION_FIELD_NAMES}
            checkedKeys={value}
            {...expandedTreeProps}
            onExpand={handleExpand}
            onCheck={handleCheck}
            onSelect={handleSelect}
            onDoubleClick={(event, node) => {
              actions.onDoubleClick?.({ event, node });
            }}
            onDragStart={(info) => {
              actions.onDragStart?.(info);
            }}
            onDragEnter={(info) => {
              actions.onDragEnter?.(info);
            }}
            onDragLeave={(info) => {
              actions.onDragLeave?.(info);
            }}
            onDragOver={(info) => {
              actions.onDragOver?.(info);
            }}
            onDragEnd={(info) => {
              actions.onDragEnd?.(info);
            }}
            onDrop={(info) => {
              actions.onDrop?.(info);
            }}
            onLoad={(loadedKeys, info) => {
              actions.onLoad?.({ loadedKeys, ...info });
            }}
            onRightClick={(info) => {
              actions.onRightClick?.(info);
            }}
          />
        </Spin>
      </div>
    </div>
  );
};

export default TreeSelectionField;
