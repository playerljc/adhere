import React from 'react';

import { Radio } from '@baifendian/adhere-mobile-ui-anthoc';
import {
  AutoCompletePagingRadioProps,
  AutoCompleteRadioProps,
  FilterPagingRadioProps,
  FilterRadioProps,
  PagingRadioProps,
  RadioGroupProps,
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
 * MobileRadioStandard
 */
setItem<RadioGroupProps, RadioGroupProps['options']>(
  'MobileRadio',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<RadioGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.RadioGroup {...props} options={options} />;
    },
);

/**
 * MobileRadioFilter
 */
setItem<FilterRadioProps, FilterRadioProps['options']>(
  'MobileRadio',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterRadioProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.FilterRadio {...props} options={options} />;
    },
);

// -----------------------
/**
 * MobileRadioDynamicStandard
 */
setItem<RadioGroupProps, RadioGroupProps['options']>(
  'MobileRadioDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<RadioGroupProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.RadioGroup {...props} options={options} />;
    },
);

/**
 * MobileRadioDynamicFilter
 */
setItem<FilterRadioProps, FilterRadioProps['options']>(
  'MobileRadioDynamic',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterRadioProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.FilterRadio {...props} options={options} />;
    },
);

// -----------------------
/**
 * MobileRadioPaginationStandard
 */
setItem<PagingRadioProps, PagingRadioProps['pagingProps']['options']>(
  'MobileRadioPagination',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const onLoad = usePaging<PagingRadioProps['pagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        onLoad,
      };

      return <Radio.PagingRadio {...props} pagingProps={pagingProps} />;
    },
);

/**
 * MobileRadioPaginationFilter
 */
setItem<FilterPagingRadioProps, FilterPagingRadioProps['pagingProps']['options']>(
  'MobileRadioPagination',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<FilterPagingRadioProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.FilterPagingRadio {...props} options={options} />;
    },
);

/**
 * MobileRadioPaginationDynamicFilter
 */
setItem<FilterPagingRadioProps, FilterPagingRadioProps['pagingProps']['options']>(
  'MobileRadioPaginationDynamic',
  'Filter',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<FilterPagingRadioProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.FilterPagingRadio {...props} options={options} />;
    },
);

// -----------------------
/**
 * MobileRadioACStandard
 */
setItem<AutoCompleteRadioProps, AutoCompleteRadioProps['searchDataSource']>(
  'MobileRadioAC',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<AutoCompleteRadioProps['searchDataSource']>(
        {
          dictName,
          cascadeParams,
          onDataSourceChange,
        },
      );

      return <Radio.AutoCompleteRadio {...props} searchDataSource={options} loadData={loadData} />;
    },
);

/**
 * MobileRadioACPaging
 */
setItem<AutoCompletePagingRadioProps, AutoCompletePagingRadioProps['searchDataSource']>(
  'MobileRadioAC',
  'Paging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompletePaging<AutoCompletePagingRadioProps['searchDataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Radio.AutoCompletePagingRadio {...props} loadData={loadData} />;
    },
);
