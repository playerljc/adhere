import { useLatest, useUpdateEffect } from 'ahooks';
import { ErrorBlock, SearchBar } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useContext, useMemo, useRef, useState } from 'react';

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
import { TreeDataSimpleModeFromObject } from './types';
import useChecked from './useChecked';
import useUtil from './useUtil';

const selectorPrefix = 'adhere-mobile-ui-tree';

const { useTheme } = ConfigProvider;

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
    treeDataSimpleMode,
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
    const wrapperRef = useRef<HTMLElement | undefined>(undefined);

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'mobile',
      displayName: 'Tree',
    });

    const { media } = useContext(ConfigProvider.Context);

    const { omitDisabledKeys, getValueWithUnit, checkTreeDataSimpleModeFromObject, getParentKeys } =
      useUtil();

    const { getDefaultCheckedKeysWithCheckStrictly, existsCheckableNodeInParentChildren } =
      useChecked();

    // 是否使用简单数据
    const targetTreeDataSimpleMode = useMemo(() => {
      if (Util.isBoolean(treeDataSimpleMode) || Util.isObject(treeDataSimpleMode)) {
        return treeDataSimpleMode;
      }

      return false;
    }, [treeDataSimpleMode]);

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

    // 转换后的完整数据(未经过搜索过滤)
    // keys 相关的计算都必须基于它，不能基于搜索过滤后的数据，否则勾选状态会被搜索污染
    const convertedTreeData = useMemo(() => {
      let _targetTreeData = treeData ?? [];

      if (Util.isBoolean(targetTreeDataSimpleMode)) {
        if (targetTreeDataSimpleMode as boolean) {
          // @ts-ignore
          _targetTreeData = Util.arrayToAntdTreeSelect(_targetTreeData, DEFAULT_TREE_UTIL_CONFIG);
        }
      } else if (
        Util.isObject(targetTreeDataSimpleMode) &&
        checkTreeDataSimpleModeFromObject(targetTreeDataSimpleMode as TreeDataSimpleModeFromObject)
      ) {
        _targetTreeData = Util.arrayToAntdTreeSelect(
          // @ts-ignore
          _targetTreeData,
          targetTreeDataSimpleMode as TreeDataSimpleModeFromObject,
        );
      }

      return _targetTreeData ?? [];
    }, [treeData, targetTreeDataSimpleMode]);

    // Tree渲染用的数据(搜索时是过滤后的数据)
    const targetTreeData = useMemo(() => {
      if (!isSearching || !kw) {
        return convertedTreeData;
      }

      // @ts-ignore
      return Util.filterTree(convertedTreeData, kw, {
        ...DEFAULT_TREE_UTIL_CONFIG,
        filterAttr: targetFilterKey,
        titleAttr: targetFilterKey,
      });
    }, [kw, isSearching, convertedTreeData, targetFilterKey]);
    // const [targetTreeData, setTargetTreeData] = usePropToState(defaultTreeData);

    // 用序列化结果做依赖，避免父组件传入内联数组字面量(如 expandedKeys={[]})时
    // 每次渲染都触发 usePropToState 重置内部状态
    const expandedKeysSignature = JSON.stringify(expandedKeys ?? []);
    const selectedKeysSignature = JSON.stringify(selectedKeys ?? []);
    const checkedKeysSignature = JSON.stringify(checkedKeys ?? []);
    const loadedKeysSignature = JSON.stringify(loadedKeys ?? []);

    // expandAll: 展开全部有children的节点
    const expandAllKeys = useMemo(
      () => (expandAll ? getParentKeys(convertedTreeData) : null),
      [expandAll, convertedTreeData],
    );

    // 展开的keys(显式传入的 expandedKeys 优先于 expandAll)
    const defaultExpandedKeys = useMemo(
      () => expandedKeys ?? expandAllKeys ?? [],
      [expandedKeysSignature, expandAllKeys],
    );
    const [targetExpandedKeys, setTargetExpandedKeys] = usePropToState(defaultExpandedKeys);

    // 选择的keys
    const defaultSelectedKeys = useMemo(
      // 排除不可用的节点keys
      () => omitDisabledKeys(convertedTreeData, selectedKeys ?? []),
      [selectedKeysSignature],
    );
    const [targetSelectedKeys, setTargetSelectedKeys] = usePropToState(defaultSelectedKeys);

    // 勾选的keys
    const defaultCheckedKeys = useMemo(() => {
      const _defaultCheckedKeys = omitDisabledKeys(convertedTreeData, checkedKeys ?? []).filter(
        (t) => !!t,
      );

      // 如果是级联模式
      if (targetCheckStrictly) {
        return getDefaultCheckedKeysWithCheckStrictly(convertedTreeData, _defaultCheckedKeys);
      }

      return _defaultCheckedKeys;
    }, [checkedKeysSignature, targetCheckStrictly]);
    const [targetCheckedKeys, setTargetCheckedKeys] = usePropToState(defaultCheckedKeys);
    const latestCheckedKeysRef = useLatest(targetCheckedKeys);
    useUpdateEffect(() => {
      const _defaultCheckedKeys = omitDisabledKeys(
        convertedTreeData,
        latestCheckedKeysRef.current ?? [],
      ).filter((t) => !!t);

      // 如果是级联模式
      if (targetCheckStrictly) {
        setTargetCheckedKeys(
          getDefaultCheckedKeysWithCheckStrictly(convertedTreeData, _defaultCheckedKeys),
        );
      } else {
        setTargetCheckedKeys(_defaultCheckedKeys);
      }
    }, [convertedTreeData, targetCheckStrictly]);

    // 异步加载的keys
    const defaultLoadedKeys = useMemo(
      // 排除不可用的节点keys
      () => omitDisabledKeys(convertedTreeData, loadedKeys ?? []).filter((t) => !!t),
      [loadedKeysSignature],
    );
    const [targetLoadedKeys, setTargetLoadedKeys] = usePropToState(defaultLoadedKeys);
    const latestLoadedKeysRef = useLatest(targetLoadedKeys);
    useUpdateEffect(() => {
      setTargetLoadedKeys(
        omitDisabledKeys(convertedTreeData, latestLoadedKeysRef.current ?? []).filter((t) => !!t),
      );
    }, [convertedTreeData]);

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
        targetTreeData.map((_treeNodeData) => {
          const nodeKey = _treeNodeData[DEFAULT_TREE_UTIL_CONFIG.keyAttr];

          // key不能通过spread传入JSX(React 19会警告)，单独取出
          const { key: _key, ...restTreeNodeData } = _treeNodeData as Record<string, any>;

          return (
            <TreeNodeContext.Provider
              key={nodeKey}
              value={{
                // 语义是"兄弟节点中是否存在可勾选的"，根节点的兄弟就是根节点列表本身
                existsCheckableNodeInParentChildren: () =>
                  existsCheckableNodeInParentChildren(targetTreeData as any),
              }}
            >
              <TreeNode level={0} id={nodeKey} {...restTreeNodeData} />
            </TreeNodeContext.Provider>
          );
        }),
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
        // setTreeData: setTargetTreeData,
        loadData,
        size: () => targetSize,
        rowGap: () => rowGap ?? DEFAULT_ROW_GAP,
        multiple: () => targetMultiple,
        checkable: () => targetCheckable,
        // 直接复用已经转换好的数据，避免每次调用都重新执行arrayToAntdTreeSelect
        treeData: () => convertedTreeData,
        checkStrictly: () => targetCheckStrictly,
        teeDataSimpleMode: () => targetTreeDataSimpleMode,
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
        convertedTreeData,
        targetTreeDataSimpleMode,
        loadData,
        targetCheckStrictly,
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
        <ul
          // @ts-ignore
          ref={wrapperRef}
          className={classNames(selectorPrefix, className)}
          style={style ?? {}}
        >
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
                placeholder={Intl.get('please_enter')}
                showCancelButton
                value={kw}
                onChange={setKw}
                onSearch={onSearch}
                onClear={onClear}
                onCancel={onClear}
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
