import React, { memo, useMemo } from 'react';

import Util from '@baifendian/adhere-util';

import AutoCompleteTreeMultiSelect from '../tree-select/AutoCompleteTreeMultiSelect';
import AutoCompleteTreeSelect from '../tree-select/AutoCompleteTreeSelect';
import type { AutoCompleteTreeTablePagingSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import CheckboxPagingTreeTable from './CheckboxPagingTreeTable';
import RadioPagingTreeTable from './RadioPagingTreeTable';
import usePagingTreeRenderProps from './usePagingTreeRenderProps';

/**
 * AutoCompleteTreeTablePagingSelect
 * @param loadData
 * @param tablePagingProps
 * @param props
 * @constructor
 */
const InternalAutoCompleteTreeTablePagingSelect = memo<AutoCompleteTreeTablePagingSelectProps>(
  ({ pagingProps, tablePagingProps, treeDataSimpleModeConfig, ...props }) => {
    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);

    const {
      isMultiple,
      isTreeDataSimpleMode,
      treeData,
      setInputValue,
      defaultCurrentPage,
      defaultPageSize,
      setPaging,
      setKw,
      renderProps,
    } = usePagingTreeRenderProps({
      tablePagingProps,
      multiple: props.multiple,
      treeDataSimpleMode: props.treeDataSimpleMode,
      ...pagingProps,
    });

    const Component = useMemo(
      () => (isMultiple ? AutoCompleteTreeMultiSelect : AutoCompleteTreeSelect),
      [isMultiple],
    );

    console.log('treeData1', treeData);

    return (
      <Component
        {...props}
        treeData={treeData}
        onSearch={setInputValue}
        onClear={() => {
          setPaging({
            page: defaultCurrentPage,
            limit: defaultPageSize,
          });
        }}
        loadData={(_kw) => {
          setKw(_kw);
          setPaging({
            page: defaultCurrentPage,
            limit: defaultPageSize,
          });

          return new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 300);
          });
        }}
      >
        {({ originNode, loading, ...rest }) => {
          const { treeData: _omitTreeData, ...tablePropsRest } = rest;

          console.log('treeData2', _omitTreeData);

          const options = isTreeDataSimpleMode
            ? Util.arrayToAntdTreeSelect(treeData ?? [], {
                keyAttr: treeDataSimpleModeConfig?.keyAttr ?? 'value',
                titleAttr: treeDataSimpleModeConfig?.titleAttr ?? 'title',
                rootParentId: treeDataSimpleModeConfig?.rootParentId ?? 0,
                parentIdAttr: treeDataSimpleModeConfig?.parentIdAttr ?? 'pId',
              })
            : treeData;

          const tableProps = renderProps({
            options,
            ...tablePropsRest,
          });

          return (
            <>
              {loading && fetchLoading}
              {!loading && isMultiple && <CheckboxPagingTreeTable {...tableProps} />}
              {!loading && !isMultiple && <RadioPagingTreeTable {...tableProps} />}
            </>
          );
        }}
      </Component>
    );
  },
);

const AutoCompleteTreeTablePagingSelect =
  InternalAutoCompleteTreeTablePagingSelect as DisplayNameInternal<
    typeof InternalAutoCompleteTreeTablePagingSelect
  >;
AutoCompleteTreeTablePagingSelect.displayName = 'AutoCompleteTreeTablePagingSelect';

export default AutoCompleteTreeTablePagingSelect;
