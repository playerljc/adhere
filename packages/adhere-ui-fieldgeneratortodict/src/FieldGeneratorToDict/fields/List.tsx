import type { ListProps } from 'antd';
import React from 'react';

import { List } from '@baifendian/adhere-ui-anthoc';
import {
  AutoCompleteCheckAllListSelectProps,
  AutoCompleteListPagingSelectProps,
  AutoCompleteListSelectProps,
  CheckAllListSelectProps,
  ListPagingProps,
  ListPagingSelectProps,
  ListSelectProps,
} from '@baifendian/adhere-ui-anthoc/es/types';

import { setItem } from '../ItemFactory';
import { useAutoCompleteDict, useDict, useDynamicDict, usePaging } from '../hooks';

/**
 * ListStandard
 */
setItem<ListProps<any>, ListProps<any>['dataSource']>(
  'List',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<ListProps<any>['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <List {...props} dataSource={dataSource} />;
    },
);

/**
 * ListSelect
 */
setItem<ListSelectProps, ListSelectProps['options']>(
  'List',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<ListSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <List.ListSelect {...props} options={options} />;
    },
);

/**
 * ListMultiSelect
 */
setItem<ListSelectProps, ListSelectProps['options']>(
  'List',
  'MultiSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<ListSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <List.ListSelect {...props} mode="multiple" options={options} />;
    },
);

/**
 * ListCheckAllSelect
 */
setItem<CheckAllListSelectProps, CheckAllListSelectProps['options']>(
  'List',
  'CheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<CheckAllListSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <List.CheckAllListSelect {...props} options={options} />;
    },
);

/**
 * ListDynamicStandard
 */
setItem<ListProps<any>, ListProps<any>['dataSource']>(
  'ListDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<ListProps<any>['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <List {...props} dataSource={dataSource} />;
    },
);

/**
 * ListDynamicSelect
 */
setItem<ListSelectProps, ListSelectProps['options']>(
  'ListDynamic',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<ListSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <List.ListSelect {...props} options={options} />;
    },
);

/**
 * ListDynamicMultiSelect
 */
setItem<ListSelectProps, ListSelectProps['options']>(
  'ListDynamic',
  'MultiSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<ListSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <List.ListSelect {...props} mode="multiple" options={options} />;
    },
);

/**
 * ListDynamicCheckAllSelect
 */
setItem<CheckAllListSelectProps, CheckAllListSelectProps['options']>(
  'ListDynamic',
  'CheckAllSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<CheckAllListSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <List.CheckAllListSelect {...props} options={options} />;
    },
);

/**
 * ListPaginationStandard
 */
setItem<ListPagingProps<any>, ListPagingProps<any>['listPagingProps']['options']>(
  'ListPagination',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = usePaging<ListPagingProps<any>['listPagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <List.ListPaging {...props} {...pagingProps} />;
    },
);

/**
 * ListPaginationMulti
 */
setItem<ListPagingProps<any>, ListPagingProps<any>['listPagingProps']['options']>(
  'ListPagination',
  'Multi',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = usePaging<ListPagingProps<any>['listPagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <List.ListPaging {...props} {...pagingProps} mode="multiple" />;
    },
);

/**
 * ListPaginationSelect
 */
setItem<ListPagingSelectProps<any>, ListPagingSelectProps<any>['listPagingProps']['options']>(
  'ListPagination',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = usePaging<ListPagingSelectProps<any>['listPagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <List.ListPagingSelect {...props} {...pagingProps} />;
    },
);

/**
 * ListPaginationMultiSelect
 */
setItem<ListPagingSelectProps<any>, ListPagingSelectProps<any>['listPagingProps']['options']>(
  'ListPagination',
  'MultiSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = usePaging<ListPagingSelectProps<any>['listPagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <List.ListPagingSelect {...props} {...pagingProps} mode="multiple" />;
    },
);

/**
 * AutoCompleteListStandard
 */
setItem<AutoCompleteListSelectProps, AutoCompleteListSelectProps['options']>(
  'AutoCompleteList',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<AutoCompleteListSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <List.AutoCompleteListSelect {...props} options={options} loadData={loadData} />;
    },
);

/**
 * AutoCompleteListMulti
 */
setItem<AutoCompleteListSelectProps, AutoCompleteListSelectProps['options']>(
  'AutoCompleteList',
  'Multi',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<AutoCompleteListSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <List.AutoCompleteListSelect
          {...props}
          mode="multiple"
          options={options}
          loadData={loadData}
        />
      );
    },
);

/**
 * AutoCompleteListCheckAll
 */
setItem<AutoCompleteCheckAllListSelectProps, AutoCompleteCheckAllListSelectProps['options']>(
  'AutoCompleteList',
  'CheckAll',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<
        AutoCompleteCheckAllListSelectProps['options']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <List.AutoCompleteCheckAllListSelect {...props} options={options} loadData={loadData} />
      );
    },
);

/**
 * AutoCompleteListPaging
 */
setItem<AutoCompleteListPagingSelectProps, AutoCompleteListPagingSelectProps['options']>(
  'AutoCompleteList',
  'Paging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompleteDict<AutoCompleteListPagingSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <List.AutoCompleteListPagingSelect {...props} {...pagingProps} />;
    },
);

/**
 * AutoCompleteListMultiPaging
 */
setItem<AutoCompleteListPagingSelectProps, AutoCompleteListPagingSelectProps['options']>(
  'AutoCompleteList',
  'MultiPaging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompleteDict<AutoCompleteListPagingSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <List.AutoCompleteListPagingSelect {...props} {...pagingProps} mode="multiple" />;
    },
);
