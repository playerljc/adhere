import React from 'react';

import { Selector } from '@baifendian/adhere-mobile-ui-anthoc';
import {
  AutoCompletePagingSelectorProps,
  AutoCompleteSelectorProps,
  CheckAllSelectorProps,
  FilterCheckAllSelectorProps,
  FilterPagingSelectorProps,
  FilterSelectorProps,
  PagingSelectorProps,
  SelectorProps,
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
 * MobileSelectorStandard
 */
setItem<SelectorProps, SelectorProps['options']>(
  'MobileSelector',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<SelectorProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Selector {...props} options={options} />;
    },
);

/**
 * MobileSelectorCheckAll
 */
setItem<CheckAllSelectorProps, CheckAllSelectorProps['options']>(
  'MobileSelector',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckAllSelectorProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Selector.CheckAllSelector {...props} options={options} />;
    },
);

/**
 * MobileSelectorFilter
 */
setItem<FilterSelectorProps, FilterSelectorProps['options']>(
  'MobileSelector',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterSelectorProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Selector.FilterSelector {...props} options={options} />;
    },
);

/**
 * MobileSelectorFilterCheckAll
 */
setItem<FilterCheckAllSelectorProps, FilterCheckAllSelectorProps['options']>(
  'MobileSelector',
  'FilterCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterCheckAllSelectorProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Selector.FilterCheckAllSelector {...props} options={options} />;
    },
);

// -----------------------
/**
 * MobileSelectorDynamicStandard
 */
setItem<SelectorProps, SelectorProps['options']>(
  'MobileSelectorDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<SelectorProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Selector {...props} options={options} />;
    },
);

/**
 * MobileSelectorDynamicCheckAll
 */
setItem<CheckAllSelectorProps, CheckAllSelectorProps['options']>(
  'MobileSelectorDynamic',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckAllSelectorProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Selector.CheckAllSelector {...props} options={options} />;
    },
);

/**
 * MobileSelectorDynamicFilter
 */
setItem<FilterSelectorProps, FilterSelectorProps['options']>(
  'MobileSelectorDynamic',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterSelectorProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Selector.FilterSelector {...props} options={options} />;
    },
);

/**
 * MobileSelectorDynamicFilterCheckAll
 */
setItem<FilterCheckAllSelectorProps, FilterCheckAllSelectorProps['options']>(
  'MobileSelectorDynamic',
  'FilterCheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterCheckAllSelectorProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Selector.FilterCheckAllSelector {...props} options={options} />;
    },
);

// -----------------------
/**
 * MobileSelectorPaginationStandard
 */
setItem<PagingSelectorProps, PagingSelectorProps['pagingProps']['options']>(
  'MobileSelectorPagination',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const onLoad = usePaging<PagingSelectorProps['pagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        onLoad,
      };

      return <Selector.PagingSelector {...props} pagingProps={pagingProps} />;
    },
);

/**
 * MobileSelectorPaginationFilter
 */
setItem<FilterPagingSelectorProps, FilterPagingSelectorProps['pagingProps']['options']>(
  'MobileSelectorPagination',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterPagingSelectorProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Selector.FilterPagingSelector {...props} options={options} />;
    },
);

/**
 * MobileSelectorPaginationDynamicFilter
 */
setItem<FilterPagingSelectorProps, FilterPagingSelectorProps['pagingProps']['options']>(
  'MobileSelectorPaginationDynamic',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterPagingSelectorProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Selector.FilterPagingSelector {...props} options={options} />;
    },
);

// -----------------------
/**
 * MobileSelectorACStandard
 */
setItem<AutoCompleteSelectorProps, AutoCompleteSelectorProps['searchDataSource']>(
  'MobileSelectorAC',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<
        AutoCompleteSelectorProps['searchDataSource']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Selector.AutoCompleteSelector {...props} searchDataSource={options} loadData={loadData} />
      );
    },
);

/**
 * MobileSelectorACPaging
 */
setItem<AutoCompletePagingSelectorProps, AutoCompletePagingSelectorProps['searchDataSource']>(
  'MobileSelectorAC',
  'Paging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompletePaging<AutoCompletePagingSelectorProps['searchDataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Selector.AutoCompletePagingSelector {...props} loadData={loadData} />;
    },
);
