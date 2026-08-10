import { usePrevious } from 'ahooks';
import { Table, theme } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import classNames from 'classnames';
import React, { type FC, useContext, useEffect, useMemo, useRef, useState } from 'react';
import * as ReactIs from 'react-is';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Util from '@baifendian/adhere-util';

import type { ColumnTypeExt, ColumnWidthMaxContent, TableExtProps } from '../types';

const selectorPrefix = 'adhere-ui-anthoc-table';

const { useTheme } = ConfigProvider;

const DEFAULT_SELECTION_COLUMN_WIDTH = 50;

const TableExt: FC<TableExtProps> = ({
  wrapperClassName,
  wrapperStyle,
  fixedHeaderAutoTable,
  fixedTableSpaceBetween,
  columns,
  defaultColumnTitleFontSize,
  defaultColumnFontFamily,
  defaultColumnSpacing,
  defaultColumnSpace,
  defaultCellFontSize,
  defaultCellFontFamily,
  defaultCellSpace,
  defaultCellSpacing,
  ...props
}) => {
  const _context = useContext(ConfigProvider.Context);

  const _hackerElement = useRef<HTMLSpanElement | null>(null);

  const tableWrapRef = useRef<HTMLElement | null>({} as HTMLElement);

  useTheme<HTMLElement>({
    elRef: tableWrapRef,
    group: 'normal-hoc',
  });

  const [scrollY, setScrollY] = useState(0);

  const preScrollY = usePrevious(scrollY);

  const size = useMemo(() => props.size ?? 'middle', [props.size]);

  const isVirtual = !!props.virtual;

  const targetDefaultColumnTitleFontSize = useMemo(() => {
    return defaultColumnTitleFontSize ?? theme.getDesignToken().fontSize;
  }, [defaultColumnTitleFontSize]);

  const targetDefaultColumnFontFamily = useMemo(() => {
    return defaultColumnFontFamily ?? theme.getDesignToken().fontFamily;
  }, [defaultColumnFontFamily]);

  const targetDefaultColumnSpacing = useMemo(() => {
    const spacingMap = new Map([
      ['large', 15],
      ['middle', 8],
      ['small', 8],
    ]);

    return defaultColumnSpacing ?? spacingMap.get(size) ?? 0;
  }, [defaultColumnSpacing, size]);

  const targetDefaultColumnSpace = useMemo(() => {
    return defaultColumnSpace ?? targetDefaultColumnTitleFontSize * 3;
  }, [defaultColumnSpace, targetDefaultColumnTitleFontSize]);

  const targetDefaultCellFontSize = useMemo(() => {
    return defaultCellFontSize ?? theme.getDesignToken().fontSize;
  }, [defaultCellFontSize]);

  const targetDefaultCellFontFamily = useMemo(() => {
    return defaultCellFontFamily ?? theme.getDesignToken().fontFamily;
  }, [defaultCellFontFamily]);

  const targetDefaultCellSpace = useMemo(() => {
    return defaultCellSpace ?? targetDefaultCellFontSize * 4;
  }, [defaultCellSpace, targetDefaultCellFontSize]);

  const targetDefaultCellSpacing = useMemo(() => {
    const spacingMap = new Map([
      ['large', 15],
      ['middle', 8],
      ['small', 8],
    ]);

    return defaultCellSpacing ?? spacingMap.get(size) ?? 0;
  }, [defaultCellSpacing, size]);

  const targetFixedHeaderAutoTable = useMemo(() => {
    if (Util.isEmpty(fixedHeaderAutoTable)) return true;

    return fixedHeaderAutoTable;
  }, [fixedHeaderAutoTable]);

  const targetFixedTableSpaceBetween = useMemo(() => {
    if (Util.isEmpty(fixedTableSpaceBetween)) return true;

    return fixedTableSpaceBetween;
  }, [fixedTableSpaceBetween]);

  /**
   * getCtx
   * @private
   */
  function getHackerElement() {
    if (!_hackerElement.current) {
      _hackerElement.current = document.createElement('span');
      _hackerElement.current.style.visibility = 'visible';
      _hackerElement.current.style.position = 'fixed';
      document.body.appendChild(_hackerElement.current);
    }
    return _hackerElement.current as HTMLSpanElement;
  }

  /**
   * getWidthByHacker
   * @param text
   * @param font
   * @param family
   * @param spacing
   * @param space
   * @private
   */
  function getWidthByHacker({
    text,
    font,
    family,
    spacing = 0,
    space,
  }: {
    text: string;
    font: number | string;
    family: string;
    spacing?: number;
    space?: number;
  }) {
    const context = getHackerElement();
    if (!context) return 0;

    context.style.fontFamily = family;
    context.style.fontSize = `${font}px`;

    context.innerText = text;
    return context.offsetWidth + 2 * spacing + 2 * (space as number);
  }

  /**
   * pxToRem
   * @param sizeValue
   * @function
   */
  function pxToRem(sizeValue) {
    if (Util.isNumber(sizeValue)) {
      if (_context?.media?.isUseMedia) {
        return Util.pxToRem(sizeValue as number, _context?.media?.designWidth as number);
      }

      return `${sizeValue}px`;
    }

    return sizeValue as string;
  }

  function getMeasurableTitleText(columnConfig: ColumnTypeExt) {
    if ('titleToString' in columnConfig && columnConfig.titleToString != null) {
      return String(columnConfig.titleToString);
    }

    const { title } = columnConfig;
    if (typeof title === 'string' || typeof title === 'number') {
      return String(title);
    }

    return '';
  }

  function getCellText({
    columnConfig,
    record,
    rowIndex = 0,
  }: {
    columnConfig: ColumnTypeExt;
    record: Record<string, any>;
    rowIndex?: number;
  }) {
    let text: any;

    if ('renderToString' in columnConfig) {
      text = columnConfig?.renderToString?.(
        record[columnConfig.dataIndex as string] as any,
        record,
        rowIndex,
      );
    } else {
      text = record[columnConfig.dataIndex as string];
    }

    if (text == null) {
      return '';
    }

    if (typeof text === 'string' || typeof text === 'number' || typeof text === 'boolean') {
      return String(text);
    }

    return '';
  }

  function parseColumnWidthToNumber(width: ColumnTypeExt['width'] | unknown, fallback = 150): number {
    if (typeof width === 'number' && !Number.isNaN(width)) {
      return width;
    }

    if (typeof width === 'string') {
      const value = parseFloat(width);
      if (Number.isNaN(value)) {
        return fallback;
      }

      if (width.endsWith('rem')) {
        return Util.remToPx(value);
      }

      return value;
    }

    if (width && typeof width === 'object') {
      const widthConfig = width as ColumnWidthMaxContent;
      if (typeof widthConfig.minWidth === 'number') {
        return widthConfig.minWidth;
      }
      if (typeof widthConfig.maxWidth === 'number') {
        return widthConfig.maxWidth;
      }
    }

    return fallback;
  }

  function flattenLeafColumns(cols: ColumnTypeExt[] = []): ColumnTypeExt[] {
    return cols.reduce<ColumnTypeExt[]>((result, column) => {
      if (column?.children && Array.isArray(column.children)) {
        return result.concat(flattenLeafColumns(column.children as ColumnTypeExt[]));
      }

      return result.concat(column);
    }, []);
  }

  function getColumnExtraWidth(columnConfig: ColumnTypeExt): number {
    let extra = 0;

    if (columnConfig.sorter) {
      extra += 20;
    }

    return extra;
  }

  function getColumnContentWidth(columnConfig: ColumnTypeExt, dataSource: any[] = []): number {
    const widthConfig =
      columnConfig.width && typeof columnConfig.width === 'object'
        ? (columnConfig.width as ColumnWidthMaxContent)
        : ({} as ColumnWidthMaxContent);

    const titleWidth = getWidthByHacker({
      text: getMeasurableTitleText(columnConfig),
      font: widthConfig.titleFontSize ?? targetDefaultColumnTitleFontSize,
      family: widthConfig.titleFontFamily ?? targetDefaultColumnFontFamily,
      spacing: widthConfig.titleSpacing ?? targetDefaultColumnSpacing,
      space: widthConfig.titleSpacingSpace ?? targetDefaultColumnSpace,
    });

    const cellsWidth = dataSource.map((record, rowIndex) =>
      getWidthByHacker({
        text: getCellText({ columnConfig, record, rowIndex }),
        font: widthConfig.cellFontSize ?? targetDefaultCellFontSize,
        family: widthConfig.cellFontFamily ?? targetDefaultCellFontFamily,
        spacing: widthConfig.cellSpacing ?? targetDefaultCellSpacing,
        space: widthConfig.cellSpacingSpace ?? targetDefaultCellSpace,
      }),
    );

    const cellMaxWidth = cellsWidth.length ? Math.max(...cellsWidth) : 0;
    let contentWidth = Math.max(titleWidth, cellMaxWidth, 0) + getColumnExtraWidth(columnConfig);

    const minWidthCandidate =
      (columnConfig as ColumnTypeExt & { minWidth?: number | string }).minWidth ??
      widthConfig.minWidth;
    const maxWidthCandidate = widthConfig.maxWidth;

    if (minWidthCandidate != null) {
      contentWidth = Math.max(
        contentWidth,
        parseColumnWidthToNumber(minWidthCandidate as ColumnTypeExt['width'], contentWidth),
      );
    }

    if (maxWidthCandidate != null) {
      contentWidth = Math.min(contentWidth, maxWidthCandidate);
    }

    return Math.max(Math.ceil(contentWidth), 50);
  }

  function resolveColumnNumberWidth(columnConfig: ColumnTypeExt, dataSource: any[] = []): number {
    const { width } = columnConfig;

    if (typeof width === 'number' && !Number.isNaN(width)) {
      return width;
    }

    if (typeof width === 'string') {
      return parseColumnWidthToNumber(width);
    }

    // width: {} / 未给 width：按内容测算
    return getColumnContentWidth(columnConfig, dataSource);
  }

  function normalizeColumnWidths(
    cols: ColumnTypeExt[] = [],
    dataSource: any[] = [],
  ): ColumnTypeExt[] {
    return cols.map((column) => {
      if (column?.children && Array.isArray(column.children)) {
        return {
          ...column,
          children: normalizeColumnWidths(column.children as ColumnTypeExt[], dataSource),
        };
      }

      return {
        ...column,
        width: resolveColumnNumberWidth(column, dataSource),
        minWidth: undefined,
      };
    });
  }

  function getColumnsScrollX(cols: ColumnTypeExt[] = []): number {
    const total = flattenLeafColumns(cols).reduce((sum, column) => {
      const width =
        column?.width ??
        (column as ColumnTypeExt & { minWidth?: number | string })?.minWidth ??
        150;

      return sum + parseColumnWidthToNumber(width as ColumnTypeExt['width']);
    }, 0);

    const selectionWidth = props.rowSelection
      ? parseColumnWidthToNumber(
          (props.rowSelection as { columnWidth?: number | string }).columnWidth ??
            DEFAULT_SELECTION_COLUMN_WIDTH,
          DEFAULT_SELECTION_COLUMN_WIDTH,
        )
      : 0;

    return Math.max(Math.ceil(total + selectionWidth), 1);
  }

  /**
   * setColumnWidth
   * @description 非 virtual：保持原逻辑，将测算宽写成 rem/px；virtual 时保留 number
   */
  function setColumnWidth(columnConfig: ColumnTypeExt, keepNumber = false) {
    if (typeof columnConfig.width === 'number') {
      columnConfig.width = keepNumber ? columnConfig.width : pxToRem(columnConfig.width);
      return;
    }

    if (typeof columnConfig.width != 'object') {
      return;
    }

    /**
     * 先判断可行性
     */
    // Title是对象且没有字符串渲染
    if (
      (ReactIs.isElement(columnConfig.title) ||
        ReactIs.isFragment(columnConfig.title) ||
        ReactIs.isPortal(columnConfig.title)) &&
      !('titleToString' in columnConfig)
    ) {
      return undefined;
    }

    const widthConfig = columnConfig.width as ColumnWidthMaxContent;
    const dataSource = (props?.dataSource ?? []) as Record<string, any>[];

    const titleWidth = getWidthByHacker({
      text: getMeasurableTitleText(columnConfig),
      font: widthConfig.titleFontSize ?? targetDefaultColumnTitleFontSize,
      family: widthConfig.titleFontFamily ?? targetDefaultColumnFontFamily,
      spacing: widthConfig.titleSpacing ?? targetDefaultColumnSpacing,
      space: widthConfig.titleSpacingSpace ?? targetDefaultColumnSpace,
    });

    const cellsWidth = dataSource.map((record, rowIndex) =>
      getWidthByHacker({
        text: getCellText({ columnConfig, record, rowIndex }),
        font: widthConfig.cellFontSize ?? targetDefaultCellFontSize,
        family: widthConfig.cellFontFamily ?? targetDefaultCellFontFamily,
        spacing: widthConfig.cellSpacing ?? targetDefaultCellSpacing,
        space: widthConfig.cellSpacingSpace ?? targetDefaultCellSpace,
      }),
    );

    const cellMaxWidth = cellsWidth.length ? Math.max(...cellsWidth) : 0;
    const titleAndCellMaxWidth = Math.max(titleWidth, cellMaxWidth);

    let _width: number = -1;

    if (widthConfig.minWidth && widthConfig.maxWidth) {
      if (titleAndCellMaxWidth <= widthConfig.minWidth) {
        _width = widthConfig.minWidth;
      } else if (titleAndCellMaxWidth >= widthConfig.maxWidth) {
        _width = widthConfig.maxWidth;
      } else {
        _width = titleAndCellMaxWidth;
      }
    } else if (widthConfig.minWidth) {
      if (titleAndCellMaxWidth <= widthConfig.minWidth) {
        _width = widthConfig.minWidth;
      } else {
        _width = titleAndCellMaxWidth;
      }
    } else if (widthConfig.maxWidth) {
      if (titleAndCellMaxWidth >= widthConfig.maxWidth) {
        _width = widthConfig.maxWidth;
      } else {
        _width = titleAndCellMaxWidth;
      }
    } else {
      _width = titleAndCellMaxWidth;
    }

    if (_width !== -1) {
      columnConfig.width = keepNumber ? Math.max(Math.ceil(_width), 50) : pxToRem(_width);
    }
  }

  function processColumns(sourceColumns: ColumnsType | ColumnTypeExt[] | undefined): ColumnTypeExt[] {
    const cloned = (sourceColumns ?? []).map((column) => {
      const next = { ...(column as ColumnTypeExt) };

      if (next.children && Array.isArray(next.children)) {
        next.children = processColumns(next.children as ColumnTypeExt[]);
      }

      return next;
    });

    const walk = (cols: ColumnTypeExt[]) => {
      cols.forEach((columnConfig) => {
        if (columnConfig.children && Array.isArray(columnConfig.children)) {
          walk(columnConfig.children as ColumnTypeExt[]);
          return;
        }

        if ('width' in columnConfig && columnConfig.width) {
          setColumnWidth(columnConfig, isVirtual);
        }
      });
    };

    walk(cloned);

    // 仅 virtual 需要把列宽规范成 number（antd virtual 约束）
    if (isVirtual) {
      return normalizeColumnWidths(cloned, (props?.dataSource ?? []) as any[]);
    }

    return cloned;
  }

  const targetColumns = useMemo<ColumnsType>(() => {
    return processColumns(columns as ColumnTypeExt[]) as ColumnsType;
  }, [
    columns,
    props.dataSource,
    isVirtual,
    defaultColumnTitleFontSize,
    defaultColumnFontFamily,
    defaultColumnSpacing,
    defaultColumnSpace,
    defaultCellFontSize,
    defaultCellFontFamily,
    defaultCellSpace,
    defaultCellSpacing,
    size,
    targetDefaultColumnTitleFontSize,
    targetDefaultColumnFontFamily,
    targetDefaultColumnSpacing,
    targetDefaultColumnSpace,
    targetDefaultCellFontSize,
    targetDefaultCellFontFamily,
    targetDefaultCellSpace,
    targetDefaultCellSpacing,
  ]);

  const targetTableProps = useMemo(() => {
    const targetProps = { ...props };

    if (targetFixedHeaderAutoTable) {
      if (targetProps.scroll) {
        targetProps.scroll = {
          ...targetProps.scroll,
          y: scrollY,
        };
      } else {
        targetProps.scroll = { y: scrollY };
      }
    }

    if (isVirtual) {
      const userScrollX = props.scroll?.x;
      const scrollX =
        typeof userScrollX === 'number'
          ? userScrollX
          : getColumnsScrollX(targetColumns as ColumnTypeExt[]);

      targetProps.scroll = {
        ...(targetProps.scroll ?? {}),
        x: scrollX,
        ...(targetFixedHeaderAutoTable && typeof scrollY === 'number' ? { y: scrollY } : {}),
      };

      // antd virtual 要求 tableLayout:fixed + 数值 scroll.x
      targetProps.tableLayout = 'fixed';

      if (typeof targetProps.scroll.y !== 'number') {
        delete targetProps.scroll.y;
      }
    }

    return targetProps;
  }, [
    scrollY,
    props,
    targetFixedHeaderAutoTable,
    isVirtual,
    targetColumns,
  ]);

  useEffect(() => {
    if (!tableWrapRef.current) return;

    if (targetFixedHeaderAutoTable) {
      const dataSource = props.dataSource ?? [];

      if (
        dataSource &&
        dataSource.length &&
        ((preScrollY === 0 && scrollY === 0) || preScrollY !== scrollY)
      ) {
        const tableWrap = tableWrapRef.current as HTMLElement;

        const tableHeaderHeight =
          (tableWrap.querySelector('.ant-table-thead') as HTMLElement)?.offsetHeight || 0;

        const tablePaginationHeight =
          (tableWrap.querySelector('.ant-table-pagination') as HTMLElement)?.offsetHeight || 0;

        setScrollY(
          tableWrap.clientHeight -
            (tableHeaderHeight + (tablePaginationHeight ? tablePaginationHeight + 16 * 2 : 0)),
        );
      }
    }

    return () => {
      if (_hackerElement.current) {
        try {
          document.body.removeChild(_hackerElement.current);
          _hackerElement.current = null;
        } catch (error) {
          console.error(error);
        }
      }
    };
  });

  debugger;

  return (
    <div
      // @ts-ignore
      ref={tableWrapRef}
      className={classNames(
        selectorPrefix,
        {
          [`${selectorPrefix}-fixed-table-space-between`]: targetFixedTableSpaceBetween,
        },
        wrapperClassName,
      )}
      style={wrapperStyle ?? {}}
    >
      <Table {...targetTableProps} columns={targetColumns} />
    </div>
  );
};

export default TableExt;
