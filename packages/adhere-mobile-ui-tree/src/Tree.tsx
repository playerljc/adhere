import { ErrorBlock, SearchBar } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useContext, useMemo, useState } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Hooks from '@baifendian/adhere-ui-hooks';
import Space from '@baifendian/adhere-ui-space';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import {
  DEFAULT_CHECKBOX_GAP,
  DEFAULT_CHECKBOX_WIDTH,
  DEFAULT_CHECKSTRICTLY,
  DEFAULT_FILTER_KEY,
  DEFAULT_ICON_GAP,
  DEFAULT_INDENT,
  DEFAULT_MULTIPLE,
  DEFAULT_ROW_GAP,
  DEFAULT_SHOW_SEARCH,
  DEFAULT_SIZE,
  DEFAULT_TITLE_GAP,
  DEFAULT_TREE_CHECKABLE,
  DEFAULT_TREE_UTIL_CONFIG,
} from './Constant';
import TreeContext from './TreeContext';
import TreeNode from './TreeNode';
import TreeNodeContext from './TreeNodeContext';
import TreeSelect from './TreeSelect';
import type { TreeComponent, TreeProps } from './types';
import useChecked from './useChecked';
import useUtil from './useUtil';

const selectorPrefix = 'adhere-mobile-ui-tree';

const { usePropToState } = Hooks;

/**
 * Tree
 * @description Tree
 */
const InternalTree = memo<TreeProps>(
  ({
    className,
    style,
    treeData,
    expandAll,
    expandedKeys,
    selectedKeys,
    switcherIcon,
    titleRender,
    icon,
    renderEmpty,
    size,
    checkable,
    checkedKeys,
    multiple,
    checkStrictly,

    loadData,
    loadedKeys,

    showSearch,
    filterKey,

    // 行距(如果指定行距则size不起作用)
    rowGap: globalRowGap,
    // checkbox的宽度(默认是20px)
    checkboxWidth,
    // checkbox的间距
    checkboxGap,
    // title元素的间距
    titleGap,
    // icon的间距
    iconGap,
    // 缩进
    indent,

    onSelect,
    onExpand,
    onCheck,
  }) => {
    const { media } = useContext(ConfigProvider.Context);

    const { omitDisabledKeys, getValueWithUnit } = useUtil();

    const { getDefaultCheckedKeysWithCheckStrictly, existsCheckableNodeInParentChildren } =
      useChecked();

    // Tree的密度
    const targetSize = useMemo(() => size ?? DEFAULT_SIZE, [size]);

    // 整个Tree是否是可勾选的Tree
    const targetCheckable = useMemo<boolean>(() => {
      if (Util.isEmpty(checkable)) return DEFAULT_TREE_CHECKABLE;

      return checkable as boolean;
    }, [checkable]);

    // 是否可以选中多个节点
    const targetMultiple = useMemo<boolean>(() => {
      if (Util.isEmpty(multiple)) return DEFAULT_MULTIPLE;

      return multiple as boolean;
    }, [multiple]);

    // checkbox是否受控
    const targetCheckStrictly = useMemo<boolean>(() => {
      if (Util.isEmpty(checkStrictly)) return DEFAULT_CHECKSTRICTLY;

      return checkStrictly as boolean;
    }, [checkStrictly]);

    // 是否进行了查询
    const [isSearching, setIsSearching] = useState(false);
    // 查询的关键字
    const [kw, setKw] = useState<string>('');

    // 是否可以进行搜索
    const targetShowSearch = useMemo(() => {
      if (Util.isEmpty(showSearch)) return DEFAULT_SHOW_SEARCH;

      return showSearch as boolean;
    }, [showSearch]);

    // 搜索的key
    const targetFilterKey = useMemo(() => {
      if (Util.isEmpty(filterKey)) return DEFAULT_FILTER_KEY;

      return filterKey as string;
    }, [filterKey]);

    // Tree的数据
    const targetTreeData = useMemo(() => {
      const _treeData = treeData ?? [];

      if (!isSearching) return _treeData;

      if (!kw) return _treeData;

      // @ts-ignore
      return Util.filterTree(_treeData, kw, {
        ...DEFAULT_TREE_UTIL_CONFIG,
        filterAttr: targetFilterKey,
        titleAttr: targetFilterKey,
      });
    }, [kw, isSearching, treeData]);

    // 展开的keys
    const defaultExpandedKeys = useMemo(() => expandedKeys ?? [], [expandedKeys]);
    const [targetExpandedKeys, setTargetExpandedKeys] = usePropToState(defaultExpandedKeys);

    // 选择的keys
    const defaultSelectedKeys = useMemo(
      // 排除不可用的节点keys
      () => omitDisabledKeys(targetTreeData, selectedKeys ?? []),
      [selectedKeys],
    );
    const [targetSelectedKeys, setTargetSelectedKeys] = usePropToState(defaultSelectedKeys);

    // 勾选的keys
    const defaultCheckedKeys = useMemo(() => {
      const _defaultCheckedKeys = omitDisabledKeys(targetTreeData, checkedKeys ?? []);

      // 如果是受控
      if (targetCheckStrictly) {
        return getDefaultCheckedKeysWithCheckStrictly(targetTreeData, _defaultCheckedKeys);
      }

      return _defaultCheckedKeys;
    }, [checkedKeys, targetCheckStrictly]);
    const [targetCheckedKeys, setTargetCheckedKeys] = usePropToState(defaultCheckedKeys);

    // 异步加载的keys
    const defaultLoadedKeys = useMemo(
      // 排除不可用的节点keys
      () => omitDisabledKeys(targetTreeData, loadedKeys ?? []),
      [loadedKeys],
    );
    const [targetLoadedKeys, setTargetLoadedKeys] = usePropToState(defaultLoadedKeys);

    const targetCheckboxWidth = useMemo(
      () => getValueWithUnit(checkboxWidth ?? DEFAULT_CHECKBOX_WIDTH, media) as string,
      [checkboxWidth, media],
    );

    const targetCheckboxGap = useMemo(
      () => getValueWithUnit(checkboxGap ?? DEFAULT_CHECKBOX_GAP, media) as string,
      [checkboxGap, media],
    );

    const targetTitleGap = useMemo(
      () => getValueWithUnit(titleGap ?? DEFAULT_TITLE_GAP, media) as string,
      [titleGap, media],
    );

    const targetIconGap = useMemo(
      () => getValueWithUnit(iconGap ?? DEFAULT_ICON_GAP, media) as string,
      [iconGap, media],
    );

    const targetIndent = useMemo(
      () => getValueWithUnit(indent ?? DEFAULT_INDENT, media) as string,
      [indent, media],
    );

    // 行的间距
    const rowGap = useMemo(
      () =>
        globalRowGap ??
        new Map([
          ['small', 5],
          ['middle', 15],
          ['large', 25],
        ]).get(targetSize),
      [targetSize, globalRowGap],
    );

    // children elements
    const treeChildrenElements = useMemo(
      () =>
        targetTreeData.map((_treeNodeData) => (
          <TreeNodeContext.Provider
            value={{
              existsCheckableNodeInParentChildren: () =>
                existsCheckableNodeInParentChildren(_treeNodeData.children),
            }}
          >
            <TreeNode level={0} id={_treeNodeData.key} {..._treeNodeData} />
          </TreeNodeContext.Provider>
        )),
      [targetTreeData, switcherIcon, titleRender],
    );

    // 是否为空
    const isEmpty = useMemo(() => !treeChildrenElements.length, [treeChildrenElements]);

    // contextProvider
    const contextProviderValue = useMemo(
      () => ({
        expandedKeys: () => targetExpandedKeys,
        selectedKeys: () => targetSelectedKeys,
        checkedKeys: () => targetCheckedKeys,
        loadedKeys: () => targetLoadedKeys,
        setSelectedKeys: setTargetSelectedKeys,
        setExpandedKeys: setTargetExpandedKeys,
        setCheckedKeys: setTargetCheckedKeys,
        setLoadedKeys: setTargetLoadedKeys,
        loadData,
        size: () => targetSize,
        rowGap: () => rowGap ?? DEFAULT_ROW_GAP,
        multiple: () => targetMultiple,
        checkable: () => targetCheckable,
        treeData: () => treeData,
        checkStrictly: () => targetCheckStrictly,
        icon,
        checkboxWidth: () => targetCheckboxWidth,
        checkboxGap: () => targetCheckboxGap,
        titleGap: () => targetTitleGap,
        iconGap: () => targetIconGap,
        indent: () => targetIndent,
        titleRender,
        switcherIcon,
        onSelect,
        onExpand,
        onCheck,
      }),
      [
        targetExpandedKeys,
        targetSelectedKeys,
        targetCheckedKeys,
        targetLoadedKeys,
        rowGap,
        targetSize,
        targetMultiple,
        targetCheckable,
        treeData,
        loadData,
        checkStrictly,
        icon,
        targetCheckboxWidth,
        targetCheckboxGap,
        targetTitleGap,
        targetIconGap,
        targetIndent,
        titleRender,
        switcherIcon,
        onSelect,
        onExpand,
        onCheck,
      ],
    );

    const treeElement = (
      <TreeContext.Provider value={contextProviderValue}>
        <ul className={classNames(selectorPrefix, className)} style={style ?? {}}>
          <Space.Group direction="vertical" size={rowGap}>
            {isEmpty && <li>{renderEmpty?.() ?? <ErrorBlock status="empty" />}</li>}
            {!isEmpty && treeChildrenElements}
          </Space.Group>
        </ul>
      </TreeContext.Provider>
    );

    function onSearch() {
      setIsSearching(true);
    }

    function onClear() {
      setKw('');
      setIsSearching(false);
    }

    return (
      <>
        {targetShowSearch && (
          <div className={classNames(`${selectorPrefix}-wrapper`)}>
            <div className={classNames(`${selectorPrefix}-search`)}>
              <SearchBar
                placeholder={Intl.v('请输入')}
                showCancelButton
                value={kw}
                onChange={setKw}
                onSearch={onSearch}
                onClear={onClear}
              />
            </div>

            <div className={classNames(`${selectorPrefix}-body`)}>{treeElement}</div>
          </div>
        )}

        {!targetShowSearch && treeElement}
      </>
    );
  },
);

const Tree = InternalTree as TreeComponent;

Tree.TreeSelect = TreeSelect;

Tree.displayName = 'Tree';

export default Tree;
