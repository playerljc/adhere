import { TreeSelect } from 'antd';
import React, { memo, useEffect, useMemo } from 'react';

import Util from '@baifendian/adhere-util';

import TreeDropdownRenderSelect from '../tree-select/DropdownRenderSelect';
import type { DisplayNameInternal, TreeTablePagingSelectProps } from '../types';
import CheckboxPagingTreeTable from './CheckboxPagingTreeTable';
import RadioPagingTreeTable from './RadioPagingTreeTable';
import usePagingTreeRenderProps from './usePagingTreeRenderProps';

const InternalTreeTablePagingSelect = memo<TreeTablePagingSelectProps>(
  ({
    pagingProps,
    tablePagingProps,
    treeDataSimpleModeConfig,
    checkStrictly,
    defaultOptions,
    ...props
  }) => {
    const targetCheckStrictly = useMemo(() => {
      if (checkStrictly === undefined) return true;

      return checkStrictly;
    }, [checkStrictly]);

    const showCheckedStrategy = useMemo(() => {
      if (targetCheckStrictly) return TreeSelect.SHOW_CHILD;

      return TreeSelect.SHOW_ALL;
    }, [targetCheckStrictly]);

    const targetTreeDataSimpleModeConfig = useMemo(
      () => ({
        keyAttr: treeDataSimpleModeConfig?.keyAttr ?? 'value',
        titleAttr: treeDataSimpleModeConfig?.titleAttr ?? 'title',
        rootParentId: treeDataSimpleModeConfig?.rootParentId ?? 0,
        parentIdAttr: treeDataSimpleModeConfig?.parentIdAttr ?? 'pId',
      }),
      [treeDataSimpleModeConfig],
    );

    const {
      isMultiple,
      isTreeDataSimpleMode,
      treeData,
      defaultCurrentPage,
      defaultPageSize,
      setPaging,
      renderProps,
      fetchData,
    } = usePagingTreeRenderProps({
      tablePagingProps,
      multiple: props.multiple,
      treeDataSimpleMode: props.treeDataSimpleMode,
      ...pagingProps,
    });

    const treeCheckable = useMemo(() => {
      return isMultiple ? !targetCheckStrictly : false;
    }, [isMultiple, targetCheckStrictly]);

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <TreeDropdownRenderSelect
        showCheckedStrategy={showCheckedStrategy}
        treeCheckable={treeCheckable}
        treeData={treeData}
        onClear={() => {
          setPaging({
            page: defaultCurrentPage,
            limit: defaultPageSize,
          });
        }}
        {...props}
      >
        {({ originNode, ...rest }) => {
          const { treeData: _omitTreeData, ...tablePropsRest } = rest;

          const _treeData = isTreeDataSimpleMode
            ? Util.arrayToAntdTreeSelect(_omitTreeData ?? [], targetTreeDataSimpleModeConfig)
            : _omitTreeData;

          const options = (_treeData ?? []).slice(0, defaultPageSize);

          const tableProps = renderProps({
            options,
            ...tablePropsRest,
          });

          return (
            <>
              {isMultiple && (
                <CheckboxPagingTreeTable checkStrictly={targetCheckStrictly} {...tableProps} />
              )}
              {!isMultiple && <RadioPagingTreeTable {...tableProps} />}
            </>
          );
        }}
      </TreeDropdownRenderSelect>
    );
  },
);

const TreeTablePagingSelect = InternalTreeTablePagingSelect as DisplayNameInternal<
  typeof InternalTreeTablePagingSelect
>;
TreeTablePagingSelect.displayName = 'TreeTablePagingSelect';

export default TreeTablePagingSelect;
