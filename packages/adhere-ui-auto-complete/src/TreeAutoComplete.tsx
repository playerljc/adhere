import { useUpdateEffect } from 'ahooks';
import { TreeSelect } from 'antd';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
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
    emptyContent,
    children,
    treeDataSimpleMode,
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
        let _allFlatTreeData = [...(flatTreeData ?? []), ...(flatPathData ?? [])];

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
        let _allFlatTreeData = [...(treeData ?? []), ...(flatPathData ?? [])];

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

    useUpdateEffect(() => {
      const pathsKeys = Object.keys(paths);

      // 不在paths里的values，才需要进行路径设置
      const values = (
        Array.isArray(treeSelectProps.value) ? treeSelectProps.value : [treeSelectProps.value]
      ).filter((_value) => !pathsKeys.includes(_value));

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
          treeData={targetTreeData}
          // onSearch={onInput}
          // @ts-ignore
          onInput={onInput}
          onClear={onClear}
          dropdownRender={(originNode) => {
            if (fetching) return fetchLoading;

            return !!targetTreeData?.length
              ? children?.({
                  originNode,
                  treeDataSimpleMode,
                  value: treeSelectProps.value,
                  onChange: (...params) => onSelectChange(...params),
                  treeData: targetTreeData ?? [],
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
