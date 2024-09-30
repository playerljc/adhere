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
    treeDataSimpleMode = false,
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
        const node = targetFlatTreeData.find((t) => t.value === _id);

        result[_id] = [...Util.getAncestor(targetFlatTreeData, node, treeTransformConfig), node];

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
        treeDataSimpleMode
          ? treeData
          : Util.treeToArray(
              treeData as any[],
              {
                parentIdAttr: treeTransformConfig.parentIdAttr,
                rootParentId: treeTransformConfig.rootParentId,
              },
              treeTransformConfig.keyAttr,
            ),
      [treeData],
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
      if (!treeDataSimpleMode) {
        let _allFlatTreeData = [...(flatTreeData ?? []), ...(flatPathData ?? [])].filter(
          (t) => !!t,
        );

        const allFlatTreeDataKeys = _allFlatTreeData.map(({ value }) => value);

        const distinctKeys = Array.from(new Set(allFlatTreeDataKeys));

        _allFlatTreeData = distinctKeys.map((_value) =>
          _allFlatTreeData.find((_option) => _option.value === _value),
        );

        return Util.completionIncompleteFlatArr(
          [...(flatTreeData ?? []), ...(flatPathData ?? [])],
          _allFlatTreeData,
          treeTransformConfig,
        );
      }
      // flatTreeData
      else {
        let _allFlatTreeData = [...(treeData ?? []), ...(flatPathData ?? [])].filter((t) => !!t);

        const allFlatTreeDataKeys = _allFlatTreeData.map(({ value }) => value);

        const distinctKeys = Array.from(new Set(allFlatTreeDataKeys));

        return Util.treeToArray(
          Util.completionIncompleteFlatArr(
            [...(treeData ?? []), ...(flatPathData ?? [])],
            distinctKeys.map((_value) =>
              _allFlatTreeData.find((_option) => _option.value === _value),
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
    }, [treeData, flatTreeData, paths, treeSelectProps.value]);

    const targetFlatTreeData = useMemo(() => {
      return !!treeDataSimpleMode
        ? targetTreeData
        : Util.treeToArray(
            targetTreeData,
            {
              parentIdAttr: treeTransformConfig.parentIdAttr,
              rootParentId: treeTransformConfig.rootParentId,
            },
            treeTransformConfig.keyAttr,
          );
    }, [treeDataSimpleMode, targetTreeData]);

    const allTreeData = useMemo(() => {
      let _treeFlatData = targetTreeData ?? [];
      let _defaultTreeFlatData = defaultTreeData ?? [];

      if (!treeDataSimpleMode) {
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

      if (!treeDataSimpleMode) {
        // 转换成treeData
        return Util.arrayToAntdTreeSelect(flatAllData, treeTransformConfig);
      }

      return flatAllData;
    }, [treeDataSimpleMode, defaultTreeData, targetTreeData]);

    const childrenTreeData = useMemo(() => {
      let _treeFlatData = targetTreeData ?? [];
      let _allTreeFlatData = allTreeData ?? [];

      if (!treeDataSimpleMode) {
        // 拉平
        _treeFlatData = Util.treeToArray(_treeFlatData, treeTransformConfig);
        _allTreeFlatData = Util.treeToArray(_allTreeFlatData, treeTransformConfig);
      }

      const optionKeys = _treeFlatData.map((nodeData) => nodeData[treeTransformConfig.keyAttr]);
      const flatTreeData = _allTreeFlatData.filter((nodeData) =>
        optionKeys.includes(nodeData[treeTransformConfig.keyAttr]),
      );

      if (!treeDataSimpleMode) {
        // 转换成treeData
        return Util.arrayToAntdTreeSelect(flatTreeData, treeTransformConfig);
      }

      return flatTreeData;
    }, [treeDataSimpleMode, targetTreeData, allTreeData]);

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
    }, [treeSelectProps.defaultValue, treeSelectProps.value, paths, targetFlatTreeData]);

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
          dropdownRender={(originNode) => {
            if (fetching) return fetchLoading;

            return !!childrenTreeData?.length
              ? children?.({
                  originNode,
                  treeDataSimpleMode,
                  value: treeSelectProps.value,
                  onChange: (...params) => onSelectChange(...params),
                  treeData: childrenTreeData ?? [],
                  loading: fetching,
                }) ?? originNode
              : empty;
          }}
          onDropdownVisibleChange={setOpen}
          {...treeSelectProps}
          treeCheckable={false}
          treeDataSimpleMode={!!treeDataSimpleMode}
          onChange={(...params) => onSelectChange(...params)}
        />
      </div>
    );
  },
);

TreeAutoComplete.displayName = 'TreeAutoComplete';

export default TreeAutoComplete;
