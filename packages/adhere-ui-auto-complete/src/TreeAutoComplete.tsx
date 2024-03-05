import { TreeSelect } from 'antd';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Util from '@baifendian/adhere-util';

import { TreeAutoCompleteProps } from './types';
import useCommon from './useCommon';

/**
 * TreeAutoComplete
 * @param classNameWrap
 * @param styleWrap
 * @param renderLoading
 * @param debounceTimeout
 * @param treeData
 * @param onLoadData
 * @param emptyContent
 * @param children
 * @param treeSelectProps
 * @constructor
 */
const TreeAutoComplete = memo<TreeAutoCompleteProps>(
  ({
    classNameWrap,
    styleWrap,
    children,
    debounceTimeout,
    renderLoading,
    emptyContent,
    treeData,
    onLoadData,
    ...treeSelectProps
  }) => {
    // 是否多选
    const isMultiple: boolean = !!treeSelectProps?.multiple;

    // 是否是简单格式
    const isTreeDataSimpleMode: boolean = !!treeSelectProps.treeDataSimpleMode;

    // 主键属性
    const keyAttr: string =
      isTreeDataSimpleMode && typeof treeSelectProps.treeDataSimpleMode === 'object'
        ? (treeSelectProps.treeDataSimpleMode?.id as string) ?? 'value'
        : 'value';
    // parentId属性
    const parentIdAttr: string =
      isTreeDataSimpleMode && typeof treeSelectProps.treeDataSimpleMode === 'object'
        ? (treeSelectProps.treeDataSimpleMode?.pId as string) ?? 'pid'
        : 'pid';
    // root的parentId的值
    const rootParentId: string | number =
      isTreeDataSimpleMode && typeof treeSelectProps.treeDataSimpleMode === 'object'
        ? (treeSelectProps.treeDataSimpleMode?.rootPId as string | number) ?? -1
        : -1;

    const onSelectChangeStartTime = useRef<number>(0);

    // 已选择数据路径
    const [paths, setPaths] = useState({});

    const {
      defaultDebounceTimeout,
      fetching,
      fetchLoading,
      onInputMemo,
      onClear,
      empty,
      open,
      setOpen,
      selectorPrefix,
    } = useCommon({
      renderLoading,
      emptyContent,
      loadData: onLoadData,
    });

    /**
     * onDropdownRender
     * @description 自定义下拉框内容
     * @param {*} _originNode
     * @param {*} _props
     * @returns
     */
    function onDropdownRender(_originNode) {
      if (fetching) return fetchLoading;

      return treeSelectProps?.dropdownRender?.(_originNode) ?? !!targetTreeData?.length
        ? children?.({
            originNode: _originNode,
            value: treeSelectProps.value,
            onChange: (_value, _label, _extra) => onTreeSelectChange(_value, _label, _extra),
            treeData: targetTreeData ?? [],
            loading: fetching,
          }) ?? _originNode
        : empty;
    }

    /**
     * onTreeSelectClear
     * @description 清空
     */
    function onTreeSelectClear() {
      setPaths({});

      onClear();

      treeSelectProps?.onClear?.();
    }

    /**
     * getPathsByValue
     * @description 根据选中值获取路径
     * @param {*} _value
     * @returns
     */
    function getPathsByValue(_value) {
      const pathsResult = {};

      function getAncestorConcatCurrent(val) {
        const flat = isTreeDataSimpleMode
          ? targetTreeData ?? []
          : Util.treeToArray(
              targetTreeData ?? [],
              {
                parentIdAttr,
                rootParentId,
              },
              keyAttr,
            );

        const currentData = flat.find((item) => item[keyAttr] === val);

        return Util.getAncestor(flat, currentData, {
          keyAttr,
          parentIdAttr,
          rootParentId,
        }).concat([currentData]);
      }

      if (Array.isArray(_value)) {
        for (let i = 0; i < _value.length; i++) {
          if (paths[_value[i]]) {
            pathsResult[_value[i]] = paths[_value[i]];
          } else {
            pathsResult[_value[i]] = getAncestorConcatCurrent(_value[i]);
          }
        }
      } else {
        pathsResult[_value] = getAncestorConcatCurrent(_value);
      }

      return pathsResult;
    }

    /**
     * onTreeSelectChange
     * @description 选中树节点
     * @param {*} _value
     * @param {*} _label
     * @param {*} _extra
     */
    function onTreeSelectChange(_value, _label, _extra) {
      if (!_value || _value.length === 0) {
        setPaths({});
        // @ts-ignore
        treeSelectProps?.onChange?.(_value, _label, _extra);
        return;
      }

      setPaths(getPathsByValue(_value));
      // @ts-ignore
      treeSelectProps?.onChange?.(_value, _label, _extra);

      if (isMultiple) {
        onSelectChangeStartTime.current = Date.now();
      } else {
        // 单选
        setOpen(false);
      }
    }

    /**
     * onSearch
     * @description 文本框值变化时的回调
     */
    const onSearch = useCallback(
      debounce((_value) => {
        const currentTime = Date.now();

        if (
          onSelectChangeStartTime.current !== 0 &&
          currentTime - onSelectChangeStartTime.current <=
            (debounceTimeout ?? defaultDebounceTimeout)
        ) {
          onSelectChangeStartTime.current = 0;
          return;
        }

        onSelectChangeStartTime.current = 0;

        const kw = _value.trim();

        onInputMemo(kw);

        treeSelectProps?.onSearch?.(_value);
      }, debounceTimeout ?? defaultDebounceTimeout),
      [debounceTimeout],
    );

    // 总数据
    const allFlatTreeData = useMemo(() => {
      let flat = isTreeDataSimpleMode
        ? treeData ?? []
        : Util.treeToArray(
            (treeData as any[]) ?? [],
            {
              parentIdAttr,
              rootParentId,
            },
            keyAttr,
          );

      for (let key in paths) {
        if (paths[key]) {
          flat = flat.concat(paths[key]);
        }
      }

      return flat;
    }, [treeData, paths]);

    // 处理后数据
    const targetTreeData = useMemo(() => {
      let result: any[] = [];

      if (allFlatTreeData.length) {
        for (let i = 0; i < allFlatTreeData.length; i++) {
          let index = result.findIndex((val) => val?.[keyAttr] === allFlatTreeData?.[i]?.[keyAttr]);
          if (index === -1) {
            result.push(allFlatTreeData?.[i]);
          }
        }
      }

      if (result.length && !isTreeDataSimpleMode) {
        result = Util.arrayToAntdTree(result, {
          // 主键属性
          keyAttr: keyAttr,
          // title属性
          titleAttr: 'title',
          // parentId属性
          parentIdAttr,
          // root的parentId的值
          rootParentId,
        });
      }

      return result;
    }, [allFlatTreeData]);

    // 根据默认值设置路径
    useEffect(() => {
      const treeSelectValue = treeSelectProps.value || treeSelectProps.defaultValue;

      if (!treeSelectValue || treeSelectValue.length === 0) return;

      let currentValue;

      if (isMultiple) {
        currentValue = Array.isArray(treeSelectValue) ? treeSelectValue : [treeSelectValue];
        if (currentValue.every((val) => Object.keys(paths).includes(val))) return;
      } else {
        currentValue = Array.isArray(treeSelectValue) ? treeSelectValue[0] : treeSelectValue;
        if (Object.keys(paths).includes(currentValue)) return;
      }
      setPaths(getPathsByValue(currentValue));
    }, [treeSelectProps.defaultValue, treeSelectProps.value]);

    return (
      <div className={classNames(selectorPrefix, classNameWrap ?? '')} style={styleWrap ?? {}}>
        <TreeSelect
          allowClear
          showSearch
          treeDefaultExpandAll
          filterTreeNode={() => {
            return true;
          }}
          open={open}
          treeData={targetTreeData}
          onDropdownVisibleChange={setOpen}
          {...treeSelectProps}
          onClear={onTreeSelectClear}
          onSearch={onSearch}
          dropdownRender={onDropdownRender}
          onChange={onTreeSelectChange}
          treeCheckable={false}
        />
      </div>
    );
  },
);

export default TreeAutoComplete;
