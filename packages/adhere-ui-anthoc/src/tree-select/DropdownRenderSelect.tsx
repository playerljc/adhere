import { useUpdateEffect } from 'ahooks';
import React, { type ReactElement, memo, useCallback, useMemo, useRef, useState } from 'react';

import Util from '@baifendian/adhere-util';

import Empty from '../empty';
import type { DisplayNameInternal, TreeDropdownRenderSelectProps } from '../types';
import TreeSelect from './TreeSelect';

const treeTransformConfig = {
  keyAttr: 'value',
  titleAttr: 'title',
  parentIdAttr: 'pId',
  rootParentId: 0,
};

const InternalDropdownRenderSelect = memo<TreeDropdownRenderSelectProps>(
  ({ children, emptyContent, shouldRenderEmptyData = false, isUsePath, ...props }) => {
    const currentOriginNode = useRef<ReactElement>();

    const dropdownRenderElement = useRef<ReactElement>();

    function getPathsByValues(_values) {
      const _targetValues = Array.isArray(_values) ? _values : [_values];

      return _targetValues.reduce((result, _id) => {
        const node = targetFlatTreeData.find((t) => t[treeTransformConfig.keyAttr] === _id);

        // 如果是根节点
        if (node[treeTransformConfig.parentIdAttr] === treeTransformConfig.rootParentId) {
          result[_id] = [node];
        } else {
          const brotherNodes = targetFlatTreeData.filter(
            (t) =>
              t[treeTransformConfig.keyAttr] !== _id &&
              t[treeTransformConfig.parentIdAttr] === node[treeTransformConfig.parentIdAttr],
          );

          // 不是根节点 祖先 + 当前的节点 + 兄弟
          result[_id] = [
            ...Util.getAncestor(targetFlatTreeData, node, treeTransformConfig),
            ...brotherNodes,
            node,
          ];
        }

        return result;
      }, {});
    }

    function onSelectChange(_values, label, extra) {
      if (!extra.triggerNode) {
        setPaths({});
        props.onChange?.(_values, label, extra);
        return;
      }

      setPaths(getPathsByValues(_values));

      // @ts-ignore
      props.onChange?.(_values);
    }

    const [paths, setPaths] = useState<object>({});

    const isUsePathTarget = useMemo(() => {
      if (isUsePath === undefined) return true;
      return isUsePath;
    }, [isUsePath]);

    const targetTreeDataSimpleMode = useMemo(
      () => !!props.treeDataSimpleMode,
      [props.treeDataSimpleMode],
    );

    const flatTreeData = useMemo(
      () =>
        targetTreeDataSimpleMode
          ? props.treeData
          : Util.treeToArray(
              props.treeData as any[],
              {
                parentIdAttr: treeTransformConfig.parentIdAttr,
                rootParentId: treeTransformConfig.rootParentId,
              },
              treeTransformConfig.keyAttr,
            ),
      [targetTreeDataSimpleMode, props.treeData],
    );

    const flatPathData = useMemo(
      () =>
        Object.keys(paths)
          .map((_k) => paths[_k])
          .flat(),
      [paths],
    );

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
          ? [...(props.treeData ?? []), ...(flatPathData ?? [])]
          : props.treeData ?? [];

        let _allFlatTreeData = composeTreeData.filter((t) => !!t);

        const allFlatTreeDataKeys = _allFlatTreeData.map((t) => t[treeTransformConfig.keyAttr]);

        const distinctKeys = Array.from(new Set(allFlatTreeDataKeys));

        return Util.treeToArray(
          Util.completionIncompleteFlatArr(
            composeTreeData,
            distinctKeys.map((_value) =>
              _allFlatTreeData.find((_option) => _option[[treeTransformConfig.keyAttr]] === _value),
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
    }, [props.treeData, flatTreeData, isUsePathTarget, flatPathData, targetTreeDataSimpleMode]);

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

    const onDropdownRender = useCallback(
      (_originNode) => {
        currentOriginNode.current = _originNode;

        const renderChildrenParams = {
          originNode: _originNode,
          value: props.value,
          onChange: props.onChange,
          treeData: targetTreeData,
        };

        if (shouldRenderEmptyData) {
          return children?.(renderChildrenParams) ?? _originNode;
        }

        dropdownRenderElement.current = !!props.treeData?.length
          ? children?.(renderChildrenParams) ?? _originNode
          : emptyContent ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

        return dropdownRenderElement.current;
      },
      [children, emptyContent, props.treeData, props.value, props.onChange, targetTreeData],
    );

    useUpdateEffect(() => {
      const pathsKeys = Object.keys(paths);

      const targetValue = props.value ?? props.defaultValue;

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
    }, [props.defaultValue, props.value, paths]);

    return (
      <TreeSelect
        popupRender={onDropdownRender}
        {...props}
        treeData={targetTreeData}
        // @ts-ignore
        onChange={(...params) => onSelectChange(...params)}
      />
    );
  },
);

const DropdownRenderSelect = InternalDropdownRenderSelect as DisplayNameInternal<
  typeof InternalDropdownRenderSelect
>;
DropdownRenderSelect.displayName = 'DropdownRenderSelect';

export default DropdownRenderSelect;
