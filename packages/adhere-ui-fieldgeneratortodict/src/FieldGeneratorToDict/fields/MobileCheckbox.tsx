import React from 'react';

import { Checkbox } from '@baifendian/adhere-mobile-ui-anthoc';
import {
  AutoCompleteCheckboxProps,
  AutoCompletePagingCheckboxProps,
  CheckAllCheckboxProps,
  CheckboxGroupProps,
  FilterCheckAllCheckboxProps,
  FilterCheckboxProps,
  FilterPagingCheckboxProps,
  PagingCheckboxProps,
} from '@baifendian/adhere-mobile-ui-anthoc/src/types';

import {
  useAutoCompleteDict,
  useAutoCompletePaging,
  useDict,
  useDynamicDict,
  usePaging,
} from '../Hooks';
import { setItem } from '../ItemFactory';

/**
 * MobileCheckboxStandard
 */
setItem<CheckboxGroupProps, CheckboxGroupProps['options']>(
  'MobileCheckbox',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckboxGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CheckboxGroup {...props} options={options} />;
    },
);

/**
 * MobileCheckboxCheckAll
 */
setItem<CheckAllCheckboxProps, CheckAllCheckboxProps['options']>(
  'MobileCheckbox',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CheckAllCheckbox {...props} options={options} />;
    },
);

/**
 * MobileCheckboxFilter
 */
setItem<FilterCheckboxProps, FilterCheckboxProps['options']>(
  'MobileCheckbox',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.FilterCheckbox {...props} options={options} />;
    },
);

/**
 * MobileCheckboxFilterCheckAll
 */
setItem<FilterCheckAllCheckboxProps, FilterCheckAllCheckboxProps['options']>(
  'MobileCheckbox',
  'FilterCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.FilterCheckAllCheckbox {...props} options={options} />;
    },
);

// -----------------------
/**
 * MobileCheckboxDynamicStandard
 */
setItem<CheckboxGroupProps, CheckboxGroupProps['options']>(
  'MobileCheckboxDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckboxGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CheckboxGroup {...props} options={options} />;
    },
);

/**
 * MobileCheckboxDynamicCheckAll
 */
setItem<CheckAllCheckboxProps, CheckAllCheckboxProps['options']>(
  'MobileCheckboxDynamic',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.CheckAllCheckbox {...props} options={options} />;
    },
);

/**
 * MobileCheckboxDynamicFilter
 */
setItem<FilterCheckboxProps, FilterCheckboxProps['options']>(
  'MobileCheckboxDynamic',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.FilterCheckbox {...props} options={options} />;
    },
);

/**
 * MobileCheckboxDynamicFilterCheckAll
 */
setItem<FilterCheckAllCheckboxProps, FilterCheckAllCheckboxProps['options']>(
  'MobileCheckboxDynamic',
  'FilterCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterCheckAllCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.FilterCheckAllCheckbox {...props} options={options} />;
    },
);

// -----------------------
/**
 * MobileCheckboxPaginationStandard
 */
setItem<PagingCheckboxProps, PagingCheckboxProps['pagingProps']['options']>(
  'MobileCheckboxPagination',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const onLoad = usePaging<PagingCheckboxProps['pagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        onLoad,
      };

      return <Checkbox.PagingCheckbox {...props} pagingProps={pagingProps} />;
    },
);

/**
 * MobileCheckboxPaginationFilter
 */
setItem<FilterPagingCheckboxProps, FilterPagingCheckboxProps['pagingProps']['options']>(
  'MobileCheckboxPagination',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterPagingCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.FilterPagingCheckbox {...props} options={options} />;
    },
);

/**
 * MobileCheckboxPaginationDynamicFilter
 */
setItem<FilterPagingCheckboxProps, FilterPagingCheckboxProps['pagingProps']['options']>(
  'MobileCheckboxPaginationDynamic',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterPagingCheckboxProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.FilterPagingCheckbox {...props} options={options} />;
    },
);

// -----------------------
/**
 * MobileCheckboxACStandard
 */
setItem<AutoCompleteCheckboxProps, AutoCompleteCheckboxProps['searchDataSource']>(
  'MobileCheckboxAC',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<
        AutoCompleteCheckboxProps['searchDataSource']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Checkbox.AutoCompleteCheckbox {...props} searchDataSource={options} loadData={loadData} />
      );
    },
);

/**
 * MobileCheckboxACPaging
 */
setItem<AutoCompletePagingCheckboxProps, AutoCompletePagingCheckboxProps['searchDataSource']>(
  'MobileCheckboxAC',
  'Paging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompletePaging<AutoCompletePagingCheckboxProps['searchDataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Checkbox.AutoCompletePagingCheckbox {...props} loadData={loadData} />;
    },
);
