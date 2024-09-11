import type { TableProps } from 'antd';
import React from 'react';

import { Table } from '@baifendian/adhere-ui-anthoc';
import type {
  AutoCompleteTablePagingSelectProps,
  AutoCompleteTableSelectProps,
  AutoCompleteTreeTablePagingSelectProps,
  AutoCompleteTreeTableSelectProps,
  TablePagingProps,
  TablePagingSelectProps,
  TableSelectProps,
} from '@baifendian/adhere-ui-anthoc/es/types';

import type { SuspenseComponentProps } from '../../types';
import {
  useAutoCompleteDict,
  useAutoCompletePaging,
  useDict,
  useDynamicDict,
  usePaging,
  useTreeAutoCompleteDict,
} from '../Hooks';
import { setItem } from '../ItemFactory';
import Suspense from '../Suspense';

/**
 * TableStandard
 */
setItem<TableProps<any>, TableProps<any>['dataSource']>(
  'Table',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDict<TableProps<any>['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Table {...props} dataSource={dataSource} />;
    },
);

/**
 * TableSuspenseStandard
 */
setItem<SuspenseComponentProps<TableProps<any>>, TableProps<any>['dataSource']>(
  'Table',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const dataSource = useDict<TableProps<any>['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={dataSource} emptyComponent={<Table />}>
          <Table {...props} dataSource={dataSource} />
        </Suspense>
      );
    },
);

/**
 * TableSelect
 */
setItem<TableSelectProps, TableSelectProps['options']>(
  'Table',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<TableSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Table.TableSelect {...props} options={options} />;
    },
);

/**
 * TableMultiSelect
 */
setItem<TableSelectProps, TableSelectProps['options']>(
  'Table',
  'MultiSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDict<TableSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Table.TableSelect {...props} mode="multiple" options={options} />;
    },
);

/**
 * TableDynamicStandard
 */
setItem<TableProps<any>, TableProps<any>['dataSource']>(
  'TableDynamic',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const dataSource = useDynamicDict<TableProps<any>['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Table {...props} dataSource={dataSource} />;
    },
);

/**
 * TableDynamicSuspenseStandard
 */
setItem<SuspenseComponentProps<TableProps<any>>, TableProps<any>['dataSource']>(
  'TableDynamic',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, suspenseProps, ...props }) => {
      const dataSource = useDynamicDict<TableProps<any>['dataSource']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Suspense {...(suspenseProps ?? {})} data={dataSource} emptyComponent={<Table />}>
          <Table {...props} dataSource={dataSource} />
        </Suspense>
      );
    },
);

/**
 * TableDynamicSelect
 */
setItem<TableSelectProps, TableSelectProps['options']>(
  'TableDynamic',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<TableSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Table.TableSelect {...props} options={options} />;
    },
);

/**
 * TableDynamicMultiSelect
 */
setItem<TableSelectProps, TableSelectProps['options']>(
  'TableDynamic',
  'MultiSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const options = useDynamicDict<TableSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Table.TableSelect {...props} mode="multiple" options={options} />;
    },
);

/**
 * TablePaginationStandard
 */
setItem<TablePagingProps<any>, TablePagingProps<any>['tablePagingProps']['options']>(
  'TablePagination',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = usePaging<TablePagingProps<any>['tablePagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <Table.TablePaging {...props} pagingProps={pagingProps} isSuspenseAsync={false} />;
    },
);

/**
 * TablePaginationMulti
 */
setItem<TablePagingProps<any>, TablePagingProps<any>['tablePagingProps']['options']>(
  'TablePagination',
  'Multi',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = usePaging<TablePagingProps<any>['tablePagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return (
        <Table.TablePaging
          {...props}
          pagingProps={pagingProps}
          isSuspenseAsync={false}
          mode="multiple"
        />
      );
    },
);

/**
 * TablePaginationSuspenseStandard
 */
setItem<TablePagingProps<any>, TablePagingProps<any>['tablePagingProps']['options']>(
  'TablePagination',
  'SuspenseStandard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = usePaging<TablePagingProps<any>['tablePagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <Table.TablePaging {...props} pagingProps={pagingProps} />;
    },
);

/**
 * TablePaginationSuspenseMulti
 */
setItem<TablePagingProps<any>, TablePagingProps<any>['tablePagingProps']['options']>(
  'TablePagination',
  'SuspenseMulti',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = usePaging<TablePagingProps<any>['tablePagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <Table.TablePaging {...props} pagingProps={pagingProps} mode="multiple" />;
    },
);

/**
 * TablePaginationSelect
 */
setItem<TablePagingSelectProps<any>, TablePagingSelectProps<any>['tablePagingProps']['options']>(
  'TablePagination',
  'Select',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = usePaging<TablePagingSelectProps<any>['tablePagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <Table.TablePagingSelect {...props} pagingProps={pagingProps} />;
    },
);

/**
 * TablePaginationMultiSelect
 */
setItem<TablePagingSelectProps<any>, TablePagingSelectProps<any>['tablePagingProps']['options']>(
  'TablePagination',
  'MultiSelect',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = usePaging<TablePagingSelectProps<any>['tablePagingProps']['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <Table.TablePagingSelect {...props} pagingProps={pagingProps} mode="multiple" />;
    },
);

/**
 * TableACStandard
 */
setItem<AutoCompleteTableSelectProps, AutoCompleteTableSelectProps['options']>(
  'TableAC',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<AutoCompleteTableSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return <Table.AutoCompleteTableSelect {...props} options={options} loadData={loadData} />;
    },
);

/**
 * TableACMulti
 */
setItem<AutoCompleteTableSelectProps, AutoCompleteTableSelectProps['options']>(
  'TableAC',
  'Multi',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { options, loadData } = useAutoCompleteDict<AutoCompleteTableSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Table.AutoCompleteTableSelect
          {...props}
          mode="multiple"
          options={options}
          loadData={loadData}
        />
      );
    },
);

/**
 * TableACPaging
 */
setItem<AutoCompleteTablePagingSelectProps, AutoCompleteTablePagingSelectProps['options']>(
  'TableAC',
  'Paging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompletePaging<AutoCompleteTablePagingSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <Table.AutoCompleteTablePagingSelect {...props} pagingProps={pagingProps} />;
    },
);

/**
 * TableACMultiPaging
 */
setItem<AutoCompleteTablePagingSelectProps, AutoCompleteTablePagingSelectProps['options']>(
  'TableAC',
  'MultiPaging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompletePaging<AutoCompleteTablePagingSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return (
        <Table.AutoCompleteTablePagingSelect {...props} pagingProps={pagingProps} mode="multiple" />
      );
    },
);

///////////////////////////////////////////////////////////////////////////////////////////

/**
 * TableTreeACStandard
 */
setItem<AutoCompleteTreeTableSelectProps, AutoCompleteTreeTableSelectProps['treeData']>(
  'TableTreeAC',
  'Standard',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { treeData, loadData } = useTreeAutoCompleteDict<
        AutoCompleteTreeTableSelectProps['treeData']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Table.AutoCompleteTreeTableSelect {...props} treeData={treeData} loadData={loadData} />
      );
    },
);

/**
 * TableTreeACMulti
 */
setItem<AutoCompleteTreeTableSelectProps, AutoCompleteTreeTableSelectProps['treeData']>(
  'TableTreeAC',
  'Multi',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const { treeData, loadData } = useTreeAutoCompleteDict<
        AutoCompleteTreeTableSelectProps['treeData']
      >({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      return (
        <Table.AutoCompleteTreeTableSelect
          {...props}
          multiple
          treeData={treeData}
          loadData={loadData}
        />
      );
    },
);

/**
 * TableTreeACPaging
 */
setItem<AutoCompleteTreeTablePagingSelectProps, AutoCompleteTreeTablePagingSelectProps['treeData']>(
  'TableTreeAC',
  'Paging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompletePaging<AutoCompleteTreeTablePagingSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <Table.AutoCompleteTreeTablePagingSelect {...props} pagingProps={pagingProps} />;
    },
);

/**
 * TableTreeACMultiPaging
 */
setItem<AutoCompleteTreeTablePagingSelectProps, AutoCompleteTreeTablePagingSelectProps['treeData']>(
  'TableTreeAC',
  'MultiPaging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompletePaging<AutoCompleteTreeTablePagingSelectProps['treeData']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return (
        <Table.AutoCompleteTreeTablePagingSelect {...props} pagingProps={pagingProps} multiple />
      );
    },
);
