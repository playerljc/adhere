import { Table, type TableProps } from 'antd';
import classNames from 'classnames';
import React, { type CSSProperties, useCallback, useMemo, useState } from 'react';

import { filterTableRowsByKeyword } from '../../../../utils/filterTableRowsByKeyword';
import type { TableDataRow } from '../../../../utils/tableDataSource';
import { resolveI18nText } from '../../../../utils';
import TableSelectionSearchBar from './TableSelectionSearchBar';
import {
  pickTableSelectionTableProps,
  resolveMobileScrollX,
  type TableSelectionFieldConfig,
} from './resolveTableSelectionFieldProps';

import './index.less';

const selectorPrefix = 'adhere-ui-fd-table-selection-field';

export type TableSelectionFieldProps = TableSelectionFieldConfig & {
  value?: React.Key[];
  onChange?: (value: React.Key[]) => void;
  dataSource?: TableDataRow[];
  isMobile?: boolean;
  lang?: string;
  style?: CSSProperties;
  className?: string;
  actions?: Record<string, (...args: any[]) => any>;
};

const TableSelectionField: React.FC<TableSelectionFieldProps> = ({
  value,
  onChange,
  dataSource = [],
  isMobile = false,
  lang = 'zh_CN',
  style,
  className,
  actions = {},
  showSearch = true,
  searchPlaceholder,
  searchAllowClear = true,
  rowSelectionType = 'checkbox',
  hideSelectAll = false,
  rowSelectionFixed = true,
  rowSelectionColumnWidth,
  scrollY,
  bordered,
  loading,
  size,
  showHeader,
  tableLayout,
  rowKey,
  pagination,
  paginationSetting,
  columnSetting,
  disabled,
}) => {
  const [appliedKeyword, setAppliedKeyword] = useState('');

  const handleSearch = useCallback((keyword: string) => {
    setAppliedKeyword(keyword);
  }, []);

  const handleClearSearch = useCallback(() => {
    setAppliedKeyword('');
  }, []);

  const displayDataSource = useMemo(() => {
    if (!showSearch) return dataSource;
    return filterTableRowsByKeyword(dataSource, appliedKeyword);
  }, [dataSource, appliedKeyword, showSearch]);

  const resolvedSearchPlaceholder = useMemo(
    () => resolveI18nText(searchPlaceholder, lang) as string,
    [searchPlaceholder, lang],
  );

  const tableProps = useMemo(
    () =>
      pickTableSelectionTableProps(
        {
          bordered,
          loading,
          size,
          showHeader,
          tableLayout,
          rowKey,
          pagination,
          paginationSetting,
          columnSetting,
        },
        lang,
        { isMobile },
      ),
    [
      bordered,
      loading,
      size,
      showHeader,
      tableLayout,
      rowKey,
      pagination,
      paginationSetting,
      columnSetting,
      lang,
      isMobile,
    ],
  );

  const rowSelection = useMemo<TableProps<TableDataRow>['rowSelection']>(() => {
    const {
      onChange: onActionChange,
      onSelect,
      onSelectAll,
      onSelectInvert,
      onSelectNone,
    } = actions;

    return {
      type: rowSelectionType,
      selectedRowKeys: value ?? [],
      hideSelectAll,
      fixed: isMobile ? 'left' : rowSelectionFixed ? 'left' : undefined,
      columnWidth: rowSelectionColumnWidth ?? (isMobile ? 48 : undefined),
      onChange: (selectedRowKeys, selectedRows, info) => {
        onChange?.(selectedRowKeys);
        onActionChange?.({ selectedRowKeys, selectedRows, info });
      },
      onSelect: (record, selected, selectedRows, nativeEvent) => {
        onSelect?.({ record, selected, selectedRows, nativeEvent });
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        onSelectAll?.({ selected, selectedRows, changeRows });
      },
      onSelectInvert: (selectedRowKeys) => {
        onSelectInvert?.({ selectedRowKeys });
      },
      onSelectNone: () => {
        onSelectNone?.({});
      },
    };
  }, [
    value,
    onChange,
    actions,
    rowSelectionType,
    hideSelectAll,
    isMobile,
    rowSelectionFixed,
    rowSelectionColumnWidth,
  ]);

  const scroll = useMemo<TableProps<TableDataRow>['scroll']>(() => {
    const result: TableProps<TableDataRow>['scroll'] = {};
    if (isMobile) {
      result.x = resolveMobileScrollX(columnSetting, rowSelectionColumnWidth);
    }
    if (scrollY != null && scrollY > 0) {
      result.y = scrollY;
    }
    return Object.keys(result).length > 0 ? result : undefined;
  }, [isMobile, scrollY, columnSetting, rowSelectionColumnWidth]);

  const handleTableChange: TableProps<TableDataRow>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    actions.tableOnChange?.({ pagination, filters, sorter, extra });
  };

  return (
    <div
      className={classNames(selectorPrefix, className, {
        [`${selectorPrefix}-mobile`]: isMobile,
      })}
      style={style}
    >
      {showSearch && (
        <TableSelectionSearchBar
          placeholder={resolvedSearchPlaceholder || undefined}
          allowClear={searchAllowClear}
          disabled={!!disabled}
          onSearch={handleSearch}
          onClear={handleClearSearch}
        />
      )}
      <Table<TableDataRow>
        {...tableProps}
        dataSource={displayDataSource}
        scroll={scroll}
        rowSelection={rowSelection}
        onChange={actions.tableOnChange ? handleTableChange : undefined}
      />
    </div>
  );
};

export default TableSelectionField;
