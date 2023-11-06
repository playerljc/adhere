import type { TableProps } from 'antd';
import React from 'react';

import { Table } from '@baifendian/adhere-ui-anthoc';
import type {
  AutoCompleteTablePagingSelectProps,
  AutoCompleteTableSelectProps,
  TablePagingProps,
  TablePagingSelectProps,
  TableSelectProps,
} from '@baifendian/adhere-ui-anthoc/es/types';

import { setItem } from '../ItemFactory';
import { useAutoCompleteDict, useDict, useDynamicDict, usePaging } from '../hooks';

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

      return <Table.TablePaging {...props} {...pagingProps} />;
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

      return <Table.TablePaging {...props} {...pagingProps} mode="multiple" />;
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

      return <Table.TablePagingSelect {...props} {...pagingProps} />;
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

      return <Table.TablePagingSelect {...props} {...pagingProps} mode="multiple" />;
    },
);

/**
 * AutoCompleteTableStandard
 */
setItem<AutoCompleteTableSelectProps, AutoCompleteTableSelectProps['options']>(
  'AutoCompleteTable',
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
 * AutoCompleteTableMulti
 */
setItem<AutoCompleteTableSelectProps, AutoCompleteTableSelectProps['options']>(
  'AutoCompleteTable',
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
 * AutoCompleteTablePaging
 */
setItem<AutoCompleteTablePagingSelectProps, AutoCompleteTablePagingSelectProps['options']>(
  'AutoCompleteTable',
  'Paging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompleteDict<AutoCompleteTablePagingSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <Table.AutoCompleteTablePagingSelect {...props} {...pagingProps} />;
    },
);

/**
 * AutoCompleteTableMultiPaging
 */
setItem<AutoCompleteTablePagingSelectProps, AutoCompleteTablePagingSelectProps['options']>(
  'AutoCompleteTable',
  'MultiPaging',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const loadData = useAutoCompleteDict<AutoCompleteTablePagingSelectProps['options']>({
        dictName,
        cascadeParams,
        onDataSourceChange,
      });

      const pagingProps = {
        ...(props.pagingProps ?? {}),
        loadData,
      };

      return <Table.AutoCompleteTablePagingSelect {...props} {...pagingProps} mode="multiple" />;
    },
);
