import uniqBy from 'lodash.uniqby';
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
  ({ pagingProps, tablePagingProps, treeDataSimpleModeConfig, defaultTreeData, ...props }) => {
    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);

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

    // const allTreeData = useMemo(() => {
    //   let _treeFlatData = treeData ?? [];
    //   let _defaultTreeFlatData = defaultTreeData ?? [];
    //
    //   if (!props.treeDataSimpleMode) {
    //     // 拉平
    //     _treeFlatData = Util.treeToArray(
    //       _treeFlatData,
    //       {
    //         parentIdAttr: targetTreeDataSimpleModeConfig.parentIdAttr,
    //         rootParentId: targetTreeDataSimpleModeConfig.rootParentId,
    //       },
    //       targetTreeDataSimpleModeConfig.keyAttr,
    //     );
    //     _defaultTreeFlatData = Util.treeToArray(
    //       _defaultTreeFlatData,
    //       {
    //         parentIdAttr: targetTreeDataSimpleModeConfig.parentIdAttr,
    //         rootParentId: targetTreeDataSimpleModeConfig.rootParentId,
    //       },
    //       targetTreeDataSimpleModeConfig.keyAttr,
    //     );
    //   }
    //
    //   const flatAllData = uniqBy(
    //     [...(_defaultTreeFlatData ?? []), ...(_treeFlatData ?? [])],
    //     targetTreeDataSimpleModeConfig.keyAttr,
    //   );
    //
    //   if (!props.treeDataSimpleMode) {
    //     // 转换成treeData
    //     return Util.arrayToAntdTreeSelect(flatAllData, targetTreeDataSimpleModeConfig);
    //   }
    //
    //   return flatAllData;
    // }, [defaultTreeData, treeData]);

    // const targetTreeData = useMemo(() => {
    //   let _treeFlatData = treeData ?? [];
    //   let _allTreeFlatData = allTreeData ?? [];
    //
    //   if (!props.treeDataSimpleMode) {
    //     // 拉平
    //     _treeFlatData = Util.treeToArray(_treeFlatData, targetTreeDataSimpleModeConfig);
    //     _allTreeFlatData = Util.treeToArray(_allTreeFlatData, targetTreeDataSimpleModeConfig);
    //   }
    //
    //   const optionKeys = _treeFlatData.map(
    //     (nodeData) => nodeData[targetTreeDataSimpleModeConfig.keyAttr],
    //   );
    //   const flatTreeData = _allTreeFlatData.filter((nodeData) =>
    //     optionKeys.includes(nodeData[targetTreeDataSimpleModeConfig.keyAttr]),
    //   );
    //
    //   if (!props.treeDataSimpleMode) {
    //     // 转换成treeData
    //     return Util.arrayToAntdTreeSelect(flatTreeData, targetTreeDataSimpleModeConfig);
    //   }
    //
    //   return flatTreeData;
    // }, [treeData, allTreeData]);

    return (
      <Component
        {...props}
        treeData={treeData}
        defaultTreeData={defaultTreeData}
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

          const options = isTreeDataSimpleMode
            ? Util.arrayToAntdTreeSelect(_omitTreeData ?? [], targetTreeDataSimpleModeConfig)
            : _omitTreeData;

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
