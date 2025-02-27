import { useUpdateEffect } from 'ahooks';
import { TreeSelect } from 'antd';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import uniqBy from 'lodash.uniqby';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import Util from '@baifendian/adhere-util';

import type { TreeAutoCompleteProps } from './types';
import useCommon from './useCommon';

const treeTransformConfig = {
  keyAttr: 'value',
  titleAttr: 'title',
  parentIdAttr: 'pId',
  rootParentId: 0,
};

/**
 * TreeAutoComplete
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
    const [paths, setPaths] = useState<object>({});

    const onSelectChangeStartTime = useRef<number>(0);

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

    function getPathsByValues(_values) {
      const _targetValues = Array.isArray(_values) ? _values : [_values];

      return _targetValues.reduce((result, _id) => {
        const node = targetFlatTreeData.find((t) => t[treeTransformConfig.keyAttr] === _id);

        const brotherNodes = targetFlatTreeData.filter(
          (t) =>
            t[treeTransformConfig.keyAttr] !== _id &&
            t[treeTransformConfig.parentIdAttr] === node[treeTransformConfig.parentIdAttr],
        );

        result[_id] = [
          ...Util.getAncestor(targetFlatTreeData, node, treeTransformConfig),
          ...brotherNodes,
          node,
        ];

        return result;
      }, {});
    }

    /**
     * onSelectChange
     * @description 从下方组件触发的
     * @param _values
     * @param label
     * @param extra
     */
    function onSelectChange(_values, label, extra) {
      if (!extra.triggerNode) {
        setPaths({});
        treeSelectProps.onChange?.(_values, label, extra);
        return;
      }

      setPaths(getPathsByValues(_values));

      // @ts-ignore
      treeSelectProps.onChange?.(_values);

      if (isMultiple) {
        onSelectChangeStartTime.current = Date.now();
      } else {
        // 单选
        setOpen(false);
      }
    }

    function dropdownRender(originNode) {
      if (fetching) return fetchLoading;

      return !!childrenTreeData?.length
        ? children?.({
            originNode,
            treeDataSimpleMode: targetTreeDataSimpleMode,
            value: treeSelectProps.value,
            onChange: (...params) => onSelectChange(...params),
            treeData: childrenTreeData ?? [],
            loading: fetching,
          }) ?? originNode
        : empty;
    }

    const isUsePathTarget = useMemo(() => {
      if (isUsePath === undefined) return true;
      return isUsePath;
    }, [isUsePath]);

    const targetTreeDataSimpleMode = useMemo(() => !!treeDataSimpleMode, [treeDataSimpleMode]);

    const onInput = useCallback(
      debounce((e) => {
        const currentTime = Date.now();

        if (
          ['ant-checkbox-input'].some((className) => e.target.className.indexOf(className) !== -1)
        ) {
          return;
        }

        if (
          isMultiple &&
          onSelectChangeStartTime.current !== 0 &&
          currentTime - onSelectChangeStartTime.current <= 400
        ) {
          onSelectChangeStartTime.current = 0;
          return;
        }

        onSelectChangeStartTime.current = 0;

        const _kw = e.target.value.trim();

        onInputMemo(_kw);
      }, debounceTimeout ?? defaultDebounceTimeout),
      [debounceTimeout],
    );

    const isChecked = useMemo(
      () => ('treeCheckable' in treeSelectProps ? !!treeSelectProps.treeCheckable : false),
      [treeSelectProps.treeCheckable],
    );

    const isMultiple = useMemo(() => {
      return isChecked || ('multiple' in treeSelectProps ? !!treeSelectProps.multiple : false);
    }, [isChecked, treeSelectProps.multiple]);

    const flatTreeData = useMemo(
      () =>
        targetTreeDataSimpleMode
          ? treeData
          : Util.treeToArray(
              treeData as any[],
              {
                parentIdAttr: treeTransformConfig.parentIdAttr,
                rootParentId: treeTransformConfig.rootParentId,
              },
              treeTransformConfig.keyAttr,
            ),
      [targetTreeDataSimpleMode, treeData],
    );

    const flatPathData = useMemo(
      () =>
        Object.keys(paths)
          .map((_k) => paths[_k])
          .flat(),
      [paths],
    );

    /**
     * allTreeData
     * @description 最终的数据
     */
    const targetTreeData = useMemo<any[]>(() => {
      // treeData
      if (!targetTreeDataSimpleMode) {
        const composeTreeData = isUsePathTarget
          ? [...(flatTreeData ?? []), ...(flatPathData ?? [])]
          : flatTreeData ?? [];

        let _allFlatTreeData = composeTreeData.filter((t) => !!t);

        const allFlatTreeDataKeys = _allFlatTreeData.map((t) => t[treeTransformConfig.keyAttr]);

        const distinctKeys = Array.from(new Set(allFlatTreeDataKeys));

        _allFlatTreeData = distinctKeys.map((_value) =>
          _allFlatTreeData.find((_option) => _option[treeTransformConfig.keyAttr] === _value),
        );

        return Util.completionIncompleteFlatArr(
          composeTreeData,
          _allFlatTreeData,
          treeTransformConfig,
        );
      }
      // flatTreeData
      else {
        const composeTreeData = isUsePathTarget
          ? [...(treeData ?? []), ...(flatPathData ?? [])]
          : treeData ?? [];

        let _allFlatTreeData = composeTreeData.filter((t) => !!t);

        const allFlatTreeDataKeys = _allFlatTreeData.map((t) => t[treeTransformConfig.keyAttr]);

        const distinctKeys = Array.from(new Set(allFlatTreeDataKeys));

        return Util.treeToArray(
          Util.completionIncompleteFlatArr(
            composeTreeData,
            distinctKeys.map((_value) =>
              _allFlatTreeData.find((_option) => _option[treeTransformConfig.keyAttr] === _value),
            ),
            treeTransformConfig,
          ),
          {
            parentIdAttr: treeTransformConfig.parentIdAttr,
            rootParentId: treeTransformConfig.rootParentId,
          },
          treeTransformConfig.keyAttr,
        );
      }
    }, [treeData, flatTreeData, isUsePathTarget, flatPathData, targetTreeDataSimpleMode]);

    const targetFlatTreeData = useMemo(() => {
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

    const allTreeData = useMemo(() => {
      let _treeFlatData = targetTreeData ?? [];
      let _defaultTreeFlatData = defaultTreeData ?? [];

      if (!targetTreeDataSimpleMode) {
        // 拉平
        _treeFlatData = Util.treeToArray(
          _treeFlatData,
          {
            parentIdAttr: treeTransformConfig.parentIdAttr,
            rootParentId: treeTransformConfig.rootParentId,
          },
          treeTransformConfig.keyAttr,
        );

        _defaultTreeFlatData = Util.treeToArray(
          // @ts-ignore
          _defaultTreeFlatData,
          {
            parentIdAttr: treeTransformConfig.parentIdAttr,
            rootParentId: treeTransformConfig.rootParentId,
          },
          treeTransformConfig.keyAttr,
        );
      }

      const flatAllData = uniqBy(
        [...(_defaultTreeFlatData ?? []), ...(_treeFlatData ?? [])],
        treeTransformConfig.keyAttr,
      );

      if (!targetTreeDataSimpleMode) {
        // 转换成treeData
        return Util.arrayToAntdTreeSelect(flatAllData, treeTransformConfig);
      }

      return flatAllData;
    }, [targetTreeDataSimpleMode, defaultTreeData, targetTreeData]);

    const childrenTreeData = useMemo(() => {
      let _treeFlatData = targetTreeData ?? [];
      let _allTreeFlatData = allTreeData ?? [];

      if (!targetTreeDataSimpleMode) {
        // 拉平
        _treeFlatData = Util.treeToArray(_treeFlatData, treeTransformConfig);
        _allTreeFlatData = Util.treeToArray(_allTreeFlatData, treeTransformConfig);
      }

      const optionKeys = _treeFlatData.map((nodeData) => nodeData[treeTransformConfig.keyAttr]);
      const flatTreeData = _allTreeFlatData.filter((nodeData) =>
        optionKeys.includes(nodeData[treeTransformConfig.keyAttr]),
      );

      if (!targetTreeDataSimpleMode) {
        // 转换成treeData
        return Util.arrayToAntdTreeSelect(flatTreeData, treeTransformConfig);
      }

      return flatTreeData;
    }, [targetTreeDataSimpleMode, targetTreeData, allTreeData]);

    useUpdateEffect(() => {
      const pathsKeys = Object.keys(paths);

      const targetValue = treeSelectProps.value ?? treeSelectProps.defaultValue;

      // 不在paths里的values，才需要进行路径设置
      const values = (Array.isArray(targetValue) ? targetValue : [targetValue]).filter(
        (_value) => !pathsKeys.includes(_value),
      );

      if (values.length) {
        setPaths({
          ...paths,
          ...getPathsByValues(values),
        });
      }
    }, [treeSelectProps.defaultValue, treeSelectProps.value, paths]);

    return (
      <div className={classNames(selectorPrefix, classNameWrap ?? '')} style={styleWrap ?? {}}>
        <TreeSelect
          showSearch
          allowClear
          // @ts-ignore
          // filterOption={false}
          filterTreeNode={false}
          open={open}
          treeData={allTreeData}
          // onSearch={onInput}
          // @ts-ignore
          onInput={onInput}
          onClear={onClear}
          dropdownRender={dropdownRender}
          onDropdownVisibleChange={setOpen}
          treeCheckable={false}
          {...treeSelectProps}
          treeDataSimpleMode={targetTreeDataSimpleMode}
          onChange={(...params) => onSelectChange(...params)}
        />
      </div>
    );
  },
);

TreeAutoComplete.displayName = 'TreeAutoComplete';

export default TreeAutoComplete;
