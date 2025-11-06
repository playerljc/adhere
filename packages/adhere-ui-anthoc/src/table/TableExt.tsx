import { usePrevious } from 'ahooks';
import { Table, theme } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import classNames from 'classnames';
import React, { type FC, useContext, useEffect, useMemo, useRef, useState } from 'react';
import * as ReactIs from 'react-is';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import { ColumnTypeExt } from '@baifendian/adhere-ui-searchtable/src/types';
import Util from '@baifendian/adhere-util';

import type { ColumnWidthMaxContent, TableExtProps } from '../types';

const selectorPrefix = 'adhere-ui-anthoc-table';

const { useTheme } = ConfigProvider;

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

  const tableWrapRef = useRef<HTMLElement | null>(null);

  useTheme<HTMLElement>({
    elRef: tableWrapRef,
    group: 'normal-hoc',
  });

  const [scrollY, setScrollY] = useState(0);

  const preScrollY = usePrevious(scrollY);

  const targetDefaultColumnTitleFontSize = useMemo(() => {
    return defaultCellFontSize ?? theme.getDesignToken().fontSize;
  }, [defaultColumnTitleFontSize]);

  const targetDefaultColumnFontFamily = useMemo(() => {
    return targetDefaultColumnFontFamily ?? theme.getDesignToken().fontFamily;
  }, [defaultColumnFontFamily]);

  const targetDefaultColumnSpacing = useMemo(() => {
    const spacingMap = new Map([
      ['large', 15],
      ['middle', 8],
      ['small', 8],
    ]);

    return defaultColumnSpacing ?? spacingMap.get(size) ?? 0;
  }, [defaultColumnSpacing]);

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
  }, [defaultCellSpacing]);

  const size = useMemo(() => props.size ?? 'middle', [props.size]);

  const targetFixedHeaderAutoTable = useMemo(() => {
    if (Util.isEmpty(fixedHeaderAutoTable)) return true;

    return fixedHeaderAutoTable;
  }, [fixedHeaderAutoTable]);

  const targetFixedTableSpaceBetween = useMemo(() => {
    if (Util.isEmpty(fixedTableSpaceBetween)) return true;

    return fixedTableSpaceBetween;
  }, [fixedTableSpaceBetween]);

  const targetColumns = useMemo<ColumnsType>(() => {
    return (
      (columns ?? [])
        // width 功能
        .map((columnConfig) => {
          function loop(columns) {
            return columns.map((_columnConfig) => {
              if ('children' in _columnConfig && Array.isArray(_columnConfig.children)) {
                _columnConfig.children = loop(_columnConfig.children as ColumnTypeExt[]);

                return _columnConfig;
              }

              if ('width' in _columnConfig) {
                setColumnWidth(_columnConfig);
              }

              return _columnConfig;
            });
          }

          if ('children' in columnConfig && Array.isArray(columnConfig.children)) {
            columnConfig.children = loop(columnConfig.children as ColumnTypeExt[]);

            return columnConfig;
          }

          if ('width' in columnConfig) {
            setColumnWidth(columnConfig);
          }

          return columnConfig;
        })
    );
  }, [
    columns,
    defaultColumnTitleFontSize,
    defaultColumnFontFamily,
    defaultColumnSpacing,
    defaultColumnSpace,
    defaultCellFontSize,
    defaultCellFontFamily,
    defaultCellSpace,
    defaultCellSpacing,
  ]);

  const targetTableProps = useMemo(() => {
    const targetProps = { ...props };

    if (targetFixedHeaderAutoTable) {
      if (targetProps.scroll) {
        targetProps.scroll.y = scrollY;
      } else {
        targetProps.scroll = { y: scrollY };
      }
    }

    return targetProps;
  }, [scrollY, props, targetFixedHeaderAutoTable]);

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
   * @param size
   * @function
   */
  function pxToRem(size) {
    if (Util.isNumber(size)) {
      if (_context?.media?.isUseMedia) {
        return Util.pxToRem(size as number, _context?.media?.designWidth as number);
      }

      return `${size}px`;
    }

    return size as string;
  }

  function getTitleText(columnConfig: ColumnTypeExt) {
    if ('titleToString' in columnConfig) {
      return columnConfig.titleToString as string;
    }

    return columnConfig.title as string;
  }

  function getCellText({
    columnConfig,
    record,
  }: {
    columnConfig: ColumnTypeExt;
    record: Record<string, any>;
  }) {
    if ('renderToString' in columnConfig) {
      return columnConfig?.renderToString?.(record[columnConfig.dataIndex] as any, record, 0);
    }

    return record[columnConfig.dataIndex];
  }

  /**
   * setColumnWidth
   * @param columnConfig
   * @private
   */
  function setColumnWidth(columnConfig: ColumnTypeExt) {
    if (typeof columnConfig.width === 'number') {
      columnConfig.width = pxToRem(columnConfig.width);
      return;
    }

    if (typeof columnConfig.width != 'object') {
      return;
    }

    // ------------------------------------------ 自己判断的视线
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

    // 渲染是对象且没有字符串渲染

    const widthConfig = columnConfig.width as ColumnWidthMaxContent;

    /**
     * 获取title宽度
     * 获取数据的最大宽度
     */
    const titleWidth = getWidthByHacker({
      text: getTitleText(columnConfig),
      font: widthConfig.titleFontSize ?? targetDefaultColumnTitleFontSize,
      family: widthConfig.titleFontFamily ?? targetDefaultColumnFontFamily,
      spacing: widthConfig.titleSpacing ?? targetDefaultColumnSpacing,
      space: widthConfig.titleSpacingSpace ?? targetDefaultColumnSpace,
    });

    const cellsWidth = (props?.dataSource ?? []).map((record) =>
      getWidthByHacker({
        text: getCellText({ columnConfig, record }),
        font: widthConfig.cellFontSize ?? targetDefaultCellFontSize,
        family: widthConfig.cellFontFamily ?? targetDefaultCellFontFamily,
        spacing: widthConfig.cellSpacing ?? targetDefaultCellSpacing,
        space: widthConfig.cellSpacingSpace ?? targetDefaultCellSpace,
      }),
    );

    const cellMaxWidth = Math.max(...cellsWidth);

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
      columnConfig.width = pxToRem(_width);
    }
  }

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
