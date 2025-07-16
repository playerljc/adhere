import { useUpdateEffect } from 'ahooks';
import { TreeSelect } from 'antd';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import uniqBy from 'lodash.uniqby';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Util from '@baifendian/adhere-util';

import type { TreeAutoCompleteProps, TreeTransformConfig } from './types';
import useCommon from './useCommon';

const { useTheme } = ConfigProvider;

/** 树形数据转换配置 */
const treeTransformConfig: TreeTransformConfig = {
  keyAttr: 'value',
  titleAttr: 'title',
  parentIdAttr: 'pId',
  rootParentId: 0,
};

/**
 * TreeAutoComplete 组件
 * 提供树形结构的自动完成功能，支持搜索、防抖、自定义渲染等特性
 *
 * @param props - 组件属性
 * @param props.classNameWrap - 外层容器类名
 * @param props.styleWrap - 外层容器样式
 * @param props.renderLoading - 自定义加载状态渲染函数
 * @param props.debounceTimeout - 防抖延迟时间
 * @param props.loadData - 数据加载函数
 * @param props.treeData - 树形数据
 * @param props.defaultTreeData - 默认树形数据
 * @param props.emptyContent - 空状态内容
 * @param props.children - 自定义下拉内容渲染函数
 * @param props.treeDataSimpleMode - 是否为简单模式
 * @param props.isUsePath - 是否使用路径模式
 * @param props.treeSelectProps - TreeSelect 组件的其他属性
 * @returns 渲染的组件
 *
 * @example
 * ```tsx
 * <TreeAutoComplete
 *   placeholder="请选择节点"
 *   loadData={async (keyword) => {
 *     const data = await fetchTreeData(keyword);
 *     setTreeData(data);
 *   }}
 *   treeData={treeData}
 *   onChange={(value) => console.log('选中:', value)}
 * />
 * ```
 */
const TreeAutoComplete = memo<TreeAutoCompleteProps>(
  ({
    classNameWrap,
    styleWrap,
    renderLoading,
    debounceTimeout,
    loadData,
    treeData,
    defaultTreeData,
    emptyContent,
    children,
    treeDataSimpleMode,
    isUsePath,
    ...treeSelectProps
  }) => {
    /** 外层容器引用 */
    const wrapperRef = useRef<HTMLDivElement>(null);

    /** 应用主题配置 */
    useTheme<HTMLDivElement>({
      elRef: wrapperRef,
      group: 'normal',
      displayName: 'AutoComplete',
    });

    /** 路径数据状态 */
    const [paths, setPaths] = useState<Record<string, any[]>>({});

    /** 选择变化开始时间戳，用于防抖处理 */
    const onSelectChangeStartTime = useRef<number>(0);

    /** 使用通用 Hook 获取共享逻辑 */
    const {
      defaultDebounceTimeout,
      selectorPrefix,
      fetchLoading,
      empty,
      fetching,
      open,
      setOpen,
      onClear,
      onInputMemo,
    } = useCommon({
      renderLoading,
      emptyContent,
      loadData,
    });

    /** 是否为多选模式 */
    const isMultiple = useMemo(() => {
      const isChecked =
        'treeCheckable' in treeSelectProps ? !!treeSelectProps.treeCheckable : false;
      return isChecked || ('multiple' in treeSelectProps ? !!treeSelectProps.multiple : false);
    }, [treeSelectProps.treeCheckable, treeSelectProps.multiple]);

    /** 是否为简单模式 */
    const targetTreeDataSimpleMode = useMemo(() => !!treeDataSimpleMode, [treeDataSimpleMode]);

    /** 是否使用路径模式 */
    const isUsePathTarget = useMemo(() => {
      if (isUsePath === undefined) return true;
      return isUsePath;
    }, [isUsePath]);

    /**
     * 扁平化的树形数据
     */
    const flatTreeData = useMemo<any[]>(() => {
      return targetTreeDataSimpleMode
        ? (treeData as any[])
        : Util.treeToArray(
            treeData as any[],
            {
              parentIdAttr: treeTransformConfig.parentIdAttr,
              rootParentId: treeTransformConfig.rootParentId,
            },
            treeTransformConfig.keyAttr,
          );
    }, [targetTreeDataSimpleMode, treeData]);

    /**
     * 扁平化的路径数据
     */
    const flatPathData = useMemo<any[]>(() => {
      return Object.keys(paths)
        .map((key) => paths[key])
        .flat();
    }, [paths]);

    /**
     * 最终的目标树形数据
     */
    const targetTreeData = useMemo<any[]>(() => {
      // treeData 模式
      if (!targetTreeDataSimpleMode) {
        const composeTreeData = isUsePathTarget
          ? [...(flatTreeData ?? []), ...(flatPathData ?? [])]
          : flatTreeData ?? [];

        let allFlatTreeData = composeTreeData.filter((t) => !!t);
        const allFlatTreeDataKeys = allFlatTreeData.map((t) => t[treeTransformConfig.keyAttr]);
        const distinctKeys = Array.from(new Set(allFlatTreeDataKeys));

        allFlatTreeData = distinctKeys
          .map((value) =>
            allFlatTreeData.find((option) => option[treeTransformConfig.keyAttr] === value),
          )
          .filter((item) => !!item);

        return Util.completionIncompleteFlatArr(
          composeTreeData,
          allFlatTreeData,
          treeTransformConfig,
        );
      }
      // flatTreeData 模式
      else {
        const composeTreeData = isUsePathTarget
          ? [...((treeData as any[]) ?? []), ...(flatPathData ?? [])]
          : (treeData as any[]) ?? [];

        let allFlatTreeData = composeTreeData.filter((t) => !!t);
        const allFlatTreeDataKeys = allFlatTreeData.map((t) => t[treeTransformConfig.keyAttr]);
        const distinctKeys = Array.from(new Set(allFlatTreeDataKeys));

        const filteredData = distinctKeys
          .map((value) =>
            allFlatTreeData.find((option) => option[treeTransformConfig.keyAttr] === value),
          )
          .filter((item) => !!item);

        return Util.treeToArray(
          Util.completionIncompleteFlatArr(composeTreeData, filteredData, treeTransformConfig),
          {
            parentIdAttr: treeTransformConfig.parentIdAttr,
            rootParentId: treeTransformConfig.rootParentId,
          },
          treeTransformConfig.keyAttr,
        );
      }
    }, [treeData, flatTreeData, isUsePathTarget, flatPathData, targetTreeDataSimpleMode]);

    /**
     * 目标扁平树形数据
     */
    const targetFlatTreeData = useMemo<any[]>(() => {
      return targetTreeDataSimpleMode
        ? targetTreeData
        : Util.treeToArray(
            targetTreeData,
            {
              parentIdAttr: treeTransformConfig.parentIdAttr,
              rootParentId: treeTransformConfig.rootParentId,
            },
            treeTransformConfig.keyAttr,
          );
    }, [targetTreeDataSimpleMode, targetTreeData]);

    /**
     * 根据值获取路径数据
     *
     * @param values - 选中的值
     * @returns 路径数据对象
     */
    const getPathsByValues = useCallback(
      (values: any): Record<string, any[]> => {
        const targetValues = Array.isArray(values) ? values : [values];

        return targetValues.reduce((result, id) => {
          const node = targetFlatTreeData.find((t) => t[treeTransformConfig.keyAttr] === id);

          if (!node) return result;

          const brotherNodes = targetFlatTreeData.filter(
            (t) =>
              t[treeTransformConfig.keyAttr] !== id &&
              t[treeTransformConfig.parentIdAttr] === node[treeTransformConfig.parentIdAttr],
          );

          result[id] = [
            ...Util.getAncestor(targetFlatTreeData, node, treeTransformConfig),
            ...brotherNodes,
            node,
          ];

          return result;
        }, {} as Record<string, any[]>);
      },
      [targetFlatTreeData],
    );

    /**
     * 所有树形数据
     */
    const allTreeData = useMemo(() => {
      let treeFlatData = targetTreeData ?? [];
      let defaultTreeFlatData = defaultTreeData ?? [];

      if (!targetTreeDataSimpleMode) {
        // 拉平
        treeFlatData = Util.treeToArray(
          treeFlatData,
          {
            parentIdAttr: treeTransformConfig.parentIdAttr,
            rootParentId: treeTransformConfig.rootParentId,
          },
          treeTransformConfig.keyAttr,
        );

        defaultTreeFlatData = Util.treeToArray(
          defaultTreeFlatData as any[],
          {
            parentIdAttr: treeTransformConfig.parentIdAttr,
            rootParentId: treeTransformConfig.rootParentId,
          },
          treeTransformConfig.keyAttr,
        );
      }

      const flatAllData = uniqBy(
        [...(defaultTreeFlatData ?? []), ...(treeFlatData ?? [])],
        treeTransformConfig.keyAttr,
      );

      if (!targetTreeDataSimpleMode) {
        // 转换成 treeData
        return Util.arrayToAntdTreeSelect(flatAllData, treeTransformConfig);
      }

      return flatAllData;
    }, [targetTreeDataSimpleMode, defaultTreeData, targetTreeData]);

    /**
     * 子级树形数据
     */
    const childrenTreeData = useMemo(() => {
      let treeFlatData = targetTreeData ?? [];
      let allTreeFlatData = allTreeData ?? [];

      if (!targetTreeDataSimpleMode) {
        // 拉平
        treeFlatData = Util.treeToArray(treeFlatData, treeTransformConfig);
        allTreeFlatData = Util.treeToArray(allTreeFlatData, treeTransformConfig);
      }

      const optionKeys = treeFlatData.map((nodeData) => nodeData[treeTransformConfig.keyAttr]);
      const flatTreeData = allTreeFlatData.filter((nodeData) =>
        optionKeys.includes(nodeData[treeTransformConfig.keyAttr]),
      );

      if (!targetTreeDataSimpleMode) {
        // 转换成 treeData
        return Util.arrayToAntdTreeSelect(flatTreeData, treeTransformConfig);
      }

      return flatTreeData;
    }, [targetTreeDataSimpleMode, targetTreeData, allTreeData]);

    /**
     * 选择变化处理函数
     * 从下方组件触发的选择变化事件
     *
     * @param values - 选中的值
     * @param label - 标签
     * @param extra - 额外信息
     */
    const onSelectChange = useCallback(
      (values: any, label: any, extra: any): void => {
        if (!extra.triggerNode) {
          setPaths({});
          treeSelectProps.onChange?.(values, label, extra);
          return;
        }

        setPaths(getPathsByValues(values));

        // 调用外部传入的 onChange 回调
        treeSelectProps.onChange?.(values, label, extra);

        if (isMultiple) {
          // 多选模式记录时间戳用于防抖
          onSelectChangeStartTime.current = Date.now();
        } else {
          // 单选模式关闭下拉框
          setOpen(false);
        }
      },
      [getPathsByValues, isMultiple, setOpen, treeSelectProps],
    );

    /**
     * 下拉内容渲染函数
     *
     * @param originNode - 原始下拉节点
     * @returns 渲染的下拉内容
     */
    const dropdownRender = useCallback(
      (originNode: React.ReactElement): React.ReactElement => {
        if (fetching) return fetchLoading;

        return !!childrenTreeData?.length
          ? children?.({
              originNode,
              treeDataSimpleMode: targetTreeDataSimpleMode,
              value: treeSelectProps.value,
              onChange: onSelectChange,
              treeData: childrenTreeData ?? [],
              loading: fetching,
            }) ?? originNode
          : empty;
      },
      [
        children,
        childrenTreeData,
        empty,
        fetching,
        fetchLoading,
        onSelectChange,
        targetTreeDataSimpleMode,
        treeSelectProps.value,
      ],
    );

    /**
     * 输入处理函数（带防抖）
     * 处理用户输入，触发搜索
     *
     * @param e - 输入事件对象
     */
    const onInput = useCallback(
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        const currentTime = Date.now();

        // 忽略复选框输入事件
        if (
          ['ant-checkbox-input'].some((className) => e.target.className.indexOf(className) !== -1)
        ) {
          return;
        }

        // 多选模式下的防抖处理
        if (
          isMultiple &&
          onSelectChangeStartTime.current !== 0 &&
          currentTime - onSelectChangeStartTime.current <= 400
        ) {
          onSelectChangeStartTime.current = 0;
          return;
        }

        onSelectChangeStartTime.current = 0;

        const keyword = e.target.value.trim();

        onInputMemo(keyword);
      }, debounceTimeout ?? defaultDebounceTimeout),
      [debounceTimeout, defaultDebounceTimeout, isMultiple, onInputMemo],
    );

    /**
     * 当 value 或 defaultValue 变化时更新路径
     */
    useUpdateEffect(() => {
      const pathsKeys = Object.keys(paths);
      const targetValue = treeSelectProps.value ?? treeSelectProps.defaultValue;

      // 不在 paths 里的 values，才需要进行路径设置
      const values = (Array.isArray(targetValue) ? targetValue : [targetValue]).filter(
        (value) => !pathsKeys.includes(value),
      );

      if (values.length) {
        setPaths({
          ...paths,
          ...getPathsByValues(values),
        });
      }
    }, [treeSelectProps.defaultValue, treeSelectProps.value, paths, getPathsByValues]);

    return (
      <div
        ref={wrapperRef}
        className={classNames(selectorPrefix, classNameWrap)}
        style={styleWrap ?? {}}
      >
        <TreeSelect
          showSearch
          allowClear
          filterTreeNode={false}
          open={open}
          treeData={allTreeData}
          // onSearch={onInput}
          // @ts-ignore
          onInput={onInput}
          onClear={onClear}
          popupRender={dropdownRender}
          onOpenChange={setOpen}
          treeCheckable={false}
          {...treeSelectProps}
          treeDataSimpleMode={targetTreeDataSimpleMode}
          onChange={onSelectChange}
        />
      </div>
    );
  },
);

/** 设置组件显示名称 */
TreeAutoComplete.displayName = 'TreeAutoComplete';

export default TreeAutoComplete;
