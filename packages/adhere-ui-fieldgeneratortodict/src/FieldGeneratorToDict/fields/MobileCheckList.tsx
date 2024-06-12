import React from 'react';

import { CheckList } from '@baifendian/adhere-mobile-ui-anthoc';
import {
  AutoCompleteCheckListProps,
  AutoCompleteCheckboxCheckListProps,
  AutoCompletePagingCheckListProps,
  AutoCompletePagingCheckboxCheckListProps,
  CheckAllCheckListProps,
  CheckListProps,
  CheckboxCheckAllCheckListProps,
  FilterCheckAllCheckListProps,
  FilterCheckListProps,
  FilterCheckboxCheckAllCheckListProps,
  FilterCheckboxCheckListProps,
  FilterPagingCheckListProps,
  FilterPagingCheckboxCheckListProps,
  PagingCheckListProps,
  PagingCheckboxCheckListProps,
} from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import { CheckboxCheckListProps } from '@baifendian/adhere-mobile-ui-anthoc/src/types';

import {
  useAutoCompleteDict,
  useAutoCompletePaging,
  useDict,
  useDynamicDict,
  usePaging,
} from '../Hooks';
import { setItem } from '../ItemFactory';

/**
 * MobileCheckListStandard
 */
setItem<CheckListProps, CheckListProps['options']>(
  'MobileCheckList',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckListCheckAll
 */
setItem<CheckAllCheckListProps, CheckAllCheckListProps['options']>(
  'MobileCheckList',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckAllCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.CheckAllCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckListFilter
 */
setItem<FilterCheckListProps, FilterCheckListProps['options']>(
  'MobileCheckList',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.FilterCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckListFilterCheckAll
 */
setItem<FilterCheckAllCheckListProps, FilterCheckAllCheckListProps['options']>(
  'MobileCheckList',
  'FilterCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterCheckAllCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.FilterCheckAllCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckListDynamicStandard
 */
setItem<CheckListProps, CheckListProps['options']>(
  'MobileCheckListDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckListDynamicCheckAll
 */
setItem<CheckAllCheckListProps, CheckAllCheckListProps['options']>(
  'MobileCheckListDynamic',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckAllCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.CheckAllCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckListDynamicFilter
 */
setItem<FilterCheckListProps, FilterCheckListProps['options']>(
  'MobileCheckListDynamic',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.FilterCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckListDynamicFilterCheckAll
 */
setItem<FilterCheckAllCheckListProps, FilterCheckAllCheckListProps['options']>(
  'MobileCheckListDynamic',
  'FilterCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterCheckAllCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.FilterCheckAllCheckList {...props} options={options} />;
    },
);
// -------------------------------------------------------------------
/**
 * MobileCheckboxCheckListStandard
 */
setItem<CheckboxCheckListProps, CheckboxCheckListProps['options']>(
  'MobileCheckboxCheckList',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckboxCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.CheckboxCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckboxCheckListCheckAll
 */
setItem<CheckboxCheckAllCheckListProps, CheckboxCheckAllCheckListProps['options']>(
  'MobileCheckboxCheckList',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckAllCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.CheckboxCheckAllCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckboxCheckListFilter
 */
setItem<FilterCheckboxCheckListProps, FilterCheckboxCheckListProps['options']>(
  'MobileCheckboxCheckList',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterCheckboxCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.FilterCheckboxCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckboxCheckListFilterCheckAll
 */
setItem<FilterCheckboxCheckAllCheckListProps, FilterCheckboxCheckAllCheckListProps['options']>(
  'MobileCheckboxCheckList',
  'FilterCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterCheckboxCheckAllCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.FilterCheckboxCheckAllCheckList {...props} options={options} />;
    },
);

// -------------------------------
/**
 * MobileCheckboxCheckListDynamicStandard
 */
setItem<CheckboxCheckListProps, CheckboxCheckListProps['options']>(
  'MobileCheckboxCheckListDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckboxCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.CheckboxCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckboxCheckListDynamicCheckAll
 */
setItem<CheckboxCheckAllCheckListProps, CheckboxCheckAllCheckListProps['options']>(
  'MobileCheckboxCheckListDynamic',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckAllCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.CheckboxCheckAllCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckboxCheckListDynamicFilter
 */
setItem<FilterCheckboxCheckListProps, FilterCheckboxCheckListProps['options']>(
  'MobileCheckboxCheckListDynamic',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterCheckboxCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.FilterCheckboxCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckboxCheckListDynamicFilterCheckAll
 */
setItem<FilterCheckboxCheckAllCheckListProps, FilterCheckboxCheckAllCheckListProps['options']>(
  'MobileCheckboxCheckListDynamic',
  'FilterCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterCheckboxCheckAllCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.FilterCheckboxCheckAllCheckList {...props} options={options} />;
    },
);

// ---------------------
/**
 * MobileCheckListPaginationStandard
 */
setItem<PagingCheckListProps, PagingCheckListProps['pagingProps']['options']>(
  'MobileCheckListPagination',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const onLoad = usePaging<PagingCheckListProps['pagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        onLoad,
      };

      return <CheckList.PagingCheckList {...props} pagingProps={pagingProps} />;
    },
);

/**
 * MobileCheckListPaginationFilter
 */
setItem<FilterPagingCheckListProps, FilterPagingCheckListProps['pagingProps']['options']>(
  'MobileCheckListPagination',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.FilterPagingCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckListPaginationDynamicFilter
 */
setItem<FilterPagingCheckListProps, FilterPagingCheckListProps['pagingProps']['options']>(
  'MobileCheckListPaginationDynamic',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.FilterPagingCheckList {...props} options={options} />;
    },
);

// ---------------------
/**
 * MobileCheckboxCheckListPaginationStandard
 */
setItem<PagingCheckboxCheckListProps, PagingCheckboxCheckListProps['pagingProps']['options']>(
  'MobileCheckboxCheckListPagination',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const onLoad = usePaging<PagingCheckboxCheckListProps['pagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        onLoad,
      };

      return <CheckList.PagingCheckboxCheckList {...props} pagingProps={pagingProps} />;
    },
);

/**
 * MobileCheckboxCheckListPaginationFilter
 */
setItem<
  FilterPagingCheckboxCheckListProps,
  FilterPagingCheckboxCheckListProps['pagingProps']['options']
>(
  'MobileCheckboxCheckListPagination',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.FilterPagingCheckboxCheckList {...props} options={options} />;
    },
);

/**
 * MobileCheckboxCheckListPaginationDynamicFilter
 */
setItem<
  FilterPagingCheckboxCheckListProps,
  FilterPagingCheckboxCheckListProps['pagingProps']['options']
>(
  'MobileCheckboxCheckListPaginationDynamic',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterCheckListProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.FilterPagingCheckboxCheckList {...props} options={options} />;
    },
);

// ----------------------
/**
 * MobileCheckListACStandard
 */
setItem<AutoCompleteCheckListProps, AutoCompleteCheckListProps['searchDataSource']>(
  'MobileCheckListAC',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<
        AutoCompleteCheckListProps['searchDataSource']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <CheckList.AutoCompleteCheckList
          {...props}
          searchDataSource={options}
          loadData={loadData}
        />
      );
    },
);

/**
 * MobileCheckListACPaging
 */
setItem<AutoCompletePagingCheckListProps, AutoCompletePagingCheckListProps['searchDataSource']>(
  'MobileCheckListAC',
  'Paging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompletePaging<AutoCompleteCheckListProps['searchDataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.AutoCompletePagingCheckList {...props} loadData={loadData} />;
    },
);

// ----------------------
/**
 * MobileCheckboxCheckListACStandard
 */
setItem<AutoCompleteCheckboxCheckListProps, AutoCompleteCheckboxCheckListProps['searchDataSource']>(
  'MobileCheckboxCheckListAC',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<
        AutoCompleteCheckboxCheckListProps['searchDataSource']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <CheckList.AutoCompleteCheckboxCheckList
          {...props}
          searchDataSource={options}
          loadData={loadData}
        />
      );
    },
);

/**
 * MobileCheckboxCheckListACPaging
 */
setItem<
  AutoCompletePagingCheckboxCheckListProps,
  AutoCompletePagingCheckboxCheckListProps['searchDataSource']
>(
  'MobileCheckboxCheckListAC',
  'Paging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompletePaging<
        AutoCompletePagingCheckboxCheckListProps['searchDataSource']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <CheckList.AutoCompletePagingCheckboxCheckList {...props} loadData={loadData} />;
    },
);
