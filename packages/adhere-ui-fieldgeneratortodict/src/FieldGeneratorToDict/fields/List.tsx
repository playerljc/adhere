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

import type { SuspenseComponentProps } from '../../types';
import {
  useAutoCompleteDict,
  useAutoCompletePaging,
  useDict,
  useDynamicDict,
  usePaging,
} from '../Hooks';
import { setItem } from '../ItemFactory';
import Suspense from '../Suspense';

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
 * ListSuspenseStandard
 */
setItem<SuspenseComponentProps<ListProps<any>>, ListProps<any>['dataSource']>(
  'List',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const dataSource = useDict<ListProps<any>['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={dataSource} emptyComponent={<List />}>
          <List {...props} dataSource={dataSource} />
        </Suspense>
      );
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
 * ListDynamicSuspenseStandard
 */
setItem<SuspenseComponentProps<ListProps<any>>, ListProps<any>['dataSource']>(
  'ListDynamic',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const dataSource = useDynamicDict<ListProps<any>['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={dataSource} emptyComponent={<List />}>
          <List {...props} dataSource={dataSource} />
        </Suspense>
      );
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

      return <List.ListPaging {...props} pagingProps={pagingProps} isSuspenseAsync={false} />;
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

      return (
        <List.ListPaging
          {...props}
          pagingProps={pagingProps}
          mode="multiple"
          isSuspenseAsync={false}
        />
      );
    },
);

/**
 * ListPaginationSuspenseStandard
 */
setItem<ListPagingProps<any>, ListPagingProps<any>['listPagingProps']['options']>(
  'ListPagination',
  'SuspenseStandard',
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

      return <List.ListPaging {...props} pagingProps={pagingProps} isSuspenseAsync />;
    },
);

/**
 * ListPaginationSuspenseMulti
 */
setItem<ListPagingProps<any>, ListPagingProps<any>['listPagingProps']['options']>(
  'ListPagination',
  'SuspenseMulti',
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

      return (
        <List.ListPaging {...props} pagingProps={pagingProps} mode="multiple" isSuspenseAsync />
      );
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

      return <List.ListPagingSelect {...props} pagingProps={pagingProps} />;
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

      return <List.ListPagingSelect {...props} pagingProps={pagingProps} mode="multiple" />;
    },
);

/**
 * ListACStandard
 */
setItem<AutoCompleteListSelectProps, AutoCompleteListSelectProps['options']>(
  'ListAC',
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
 * ListACMulti
 */
setItem<AutoCompleteListSelectProps, AutoCompleteListSelectProps['options']>(
  'ListAC',
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
 * ListACCheckAll
 */
setItem<AutoCompleteCheckAllListSelectProps, AutoCompleteCheckAllListSelectProps['options']>(
  'ListAC',
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
 * ListACPaging
 */
setItem<AutoCompleteListPagingSelectProps, AutoCompleteListPagingSelectProps['options']>(
  'ListAC',
  'Paging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompletePaging<AutoCompleteListPagingSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <List.AutoCompleteListPagingSelect {...props} pagingProps={pagingProps} />;
    },
);

/**
 * ListACMultiPaging
 */
setItem<AutoCompleteListPagingSelectProps, AutoCompleteListPagingSelectProps['options']>(
  'ListAC',
  'MultiPaging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompletePaging<AutoCompleteListPagingSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return (
        <List.AutoCompleteListPagingSelect {...props} pagingProps={pagingProps} mode="multiple" />
      );
    },
);
