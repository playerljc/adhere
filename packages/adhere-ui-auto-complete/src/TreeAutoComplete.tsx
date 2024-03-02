// import { useUpdateEffect } from 'ahooks';
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
    // defaultTreeData,
    emptyContent,
    children,
    treeDataSimpleMode,
    ...treeSelectProps
  }) => {
    const [paths, setPaths] = useState<object>(
      /*defaultTreeData
        ? {
            [defaultTreeData.key]: defaultTreeData.value,
          }
        :*/ {},
    );

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

      setPaths(() => {
        const _targetValues = Array.isArray(_values) ? _values : [_values];

        return _targetValues.reduce((result, _id) => {
          const node = targetFlatTreeData.find((t) => t.value === _id);

          result[_id] = [...Util.getAncestor(targetFlatTreeData, node, treeTransformConfig), node];

          return result;
        }, {});
      });

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

    // const flatDefaultTreeData = useMemo(
    //   () =>
    //     Util.treeToArray(
    //       (defaultTreeData?.value ?? []) as any[],
    //       {
    //         parentIdAttr: treeTransformConfig.parentIdAttr,
    //         rootParentId: treeTransformConfig.rootParentId,
    //       },
    //       treeTransformConfig.keyAttr,
    //     ),
    //   [defaultTreeData],
    // );

    // const flatDefaultTreeDataFilter = useMemo(() => {
    //   if (!treeDataSimpleMode) {
    //     return flatDefaultTreeData.filter((t) =>
    //       (isMultiple ? treeSelectProps.value : [treeSelectProps.value]).includes(t.value),
    //     );
    //   } else {
    //     return (defaultTreeData?.value ?? []).filter((t) =>
    //       (isMultiple ? treeSelectProps.value : [treeSelectProps.value]).includes(t.value),
    //     );
    //   }
    // }, [treeDataSimpleMode, defaultTreeData, treeSelectProps.value, flatDefaultTreeData]);

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
      /*
       *  if(正常) {
       *    treeData需要拉平
       *    defaultTreeData获取拉平后的路径，且在props.value中
       *
       *    treeData + defaultTreeData 去重
       *
       *    转换成正常
       *  } else {
       *     defaultTreeData过滤出在props.value中
       *
       *     treeData + defaultTreeData 去重
       *  }
       * */
      // treeData
      if (!treeDataSimpleMode) {
        let _allFlatTreeData = [
          // 查出来的结果
          ...(flatTreeData ?? []),
          // 初始化的结果
          // ...(flatDefaultTreeDataFilter ?? []),
          // 选择的结果
          ...(flatPathData ?? []),
        ];

        const allFlatTreeDataKeys = _allFlatTreeData.map(({ value }) => value);

        const distinctKeys = Array.from(new Set(allFlatTreeDataKeys));

        _allFlatTreeData = distinctKeys.map((_value) =>
          _allFlatTreeData.find((_option) => _option.value === _value),
        );

        return Util.completionIncompleteFlatArr(
          [...(flatTreeData ?? []), /*...(flatDefaultTreeData ?? []),*/ ...(flatPathData ?? [])],
          _allFlatTreeData,
          treeTransformConfig,
        );
      }
      // flatTreeData
      else {
        let _allFlatTreeData = [
          ...(treeData ?? []),
          // ...(flatDefaultTreeDataFilter ?? []),
          ...(flatPathData ?? []),
        ];

        const allFlatTreeDataKeys = _allFlatTreeData.map(({ value }) => value);

        const distinctKeys = Array.from(new Set(allFlatTreeDataKeys));

        return Util.treeToArray(
          Util.completionIncompleteFlatArr(
            [...(treeData ?? []), /*...(defaultTreeData?.value ?? []),*/ ...(flatPathData ?? [])],
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
    }, [
      treeData,
      // defaultTreeData,
      // flatDefaultTreeDataFilter,
      // flatDefaultTreeData,
      flatTreeData,
      paths,
      treeSelectProps.value,
    ]);

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

    // const targetTreeData = useMemo<any[]>(() => {
    //   if (!treeDataSimpleMode) {
    //     return treeData;
    //   } else {
    //     return flatTreeData;
    //   }
    // }, [treeDataSimpleMode, treeData, flatTreeData]);

    // useUpdateEffect(() => {
    //   setPaths(
    //     defaultTreeData
    //       ? {
    //           [defaultTreeData.key]: defaultTreeData.value,
    //         }
    //       : {},
    //   );
    // }, [defaultTreeData]);

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
