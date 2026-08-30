import { usePrevious } from 'ahooks';
import { theme } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import classNames from 'classnames';
import React, { type FC, useContext, useEffect, useMemo, useRef, useState } from 'react';
import * as ReactIs from 'react-is';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Util from '@baifendian/adhere-util';

import type { ColumnTypeExt, ColumnWidthMaxContent, TableExtProps } from '../types';
import Table from './Table';

const selectorPrefix = 'adhere-ui-anthoc-table';

const { useTheme } = ConfigProvider;

/** antd rowSelection 列默认宽度（未传 columnWidth 时计入 scroll.x） */
const DEFAULT_SELECTION_COLUMN_WIDTH = 50;

/**
 * TableExt
 *
 * @description Ant Design Table 增强封装，主要能力：
 * 1. 固定表头高度自适应（`fixedHeaderAutoTable`）：根据容器高度计算 `scroll.y`
 * 2. 列宽按内容测算：支持 `width: {}` / `width: { minWidth, maxWidth, ... }`
 * 3. 虚拟滚动兼容（`virtual: true`）：将列宽规范为 number，并设置数值 `scroll.x` + `tableLayout: 'fixed'`
 *
 * @remarks
 * ## 为何要把列宽「钉死」为明确的 width
 * 开启固定表头 / 固定列时，antd 会把表头、表体拆成多张 `<table>`。
 * 它们共用同一份 columns 配置，但若某列没有有效 `width`（只有 minWidth 或测算失败），
 * 浏览器会在各表内按该表内容各自撑开 → 表头按 title、表体按 cell，横向滚动易错位。
 * 因此本组件在可测算时会把结果写回 `column.width`（定宽），保证多表共用同一套列宽。
 *
 * ## virtual 额外约束（antd）
 * - 列宽必须是 number（不能是 `"200px"` / rem）
 * - `scroll.x` / `scroll.y` 必须是 number
 * - 建议 `tableLayout: 'fixed'`
 *
 * ## 列宽配置示例
 * ```ts
 * width: 120
 * width: {}                                    // 按表头+单元格内容测算
 * width: { minWidth: 100, maxWidth: 300 }      // 测算后用 min/max 夹逼，再写成定宽 width
 * ```
 * ReactNode 表头需配 `titleToString`；自定义 `render` 建议配 `renderToString`，否则测量可能不准。
 */
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

  /** 离屏测量用 span，用于按字体测算文本像素宽度 */
  const _hackerElement = useRef<HTMLSpanElement | null>(null);

  /** 表格外层容器，用于计算可用高度 / 挂载主题 */
  const tableWrapRef = useRef<HTMLElement | null>({} as HTMLElement);

  useTheme<HTMLElement>({
    elRef: tableWrapRef,
    group: 'normal-hoc',
  });

  /** 固定表头模式下传给 Table 的 scroll.y（由容器高度减去表头/分页高度得到） */
  const [scrollY, setScrollY] = useState(0);

  const preScrollY = usePrevious(scrollY);

  const size = useMemo(() => props.size ?? 'middle', [props.size]);

  /** 是否开启 antd Table 虚拟滚动 */
  const isVirtual = !!props.virtual;

  // ---------- 列宽测算默认值（可被 props / width 对象内字段覆盖） ----------

  /** 表头默认字号 */
  const targetDefaultColumnTitleFontSize = useMemo(() => {
    return defaultColumnTitleFontSize ?? theme.getDesignToken().fontSize;
  }, [defaultColumnTitleFontSize]);

  /** 表头默认字体 */
  const targetDefaultColumnFontFamily = useMemo(() => {
    return defaultColumnFontFamily ?? theme.getDesignToken().fontFamily;
  }, [defaultColumnFontFamily]);

  /** 表头水平 padding（与 size 相关） */
  const targetDefaultColumnSpacing = useMemo(() => {
    const spacingMap = new Map([
      ['large', 15],
      ['middle', 8],
      ['small', 8],
    ]);

    return defaultColumnSpacing ?? spacingMap.get(size) ?? 0;
  }, [defaultColumnSpacing, size]);

  /** 表头额外空白（默认约 3 个字号） */
  const targetDefaultColumnSpace = useMemo(() => {
    return defaultColumnSpace ?? targetDefaultColumnTitleFontSize * 3;
  }, [defaultColumnSpace, targetDefaultColumnTitleFontSize]);

  /** 单元格默认字号 */
  const targetDefaultCellFontSize = useMemo(() => {
    return defaultCellFontSize ?? theme.getDesignToken().fontSize;
  }, [defaultCellFontSize]);

  /** 单元格默认字体 */
  const targetDefaultCellFontFamily = useMemo(() => {
    return defaultCellFontFamily ?? theme.getDesignToken().fontFamily;
  }, [defaultCellFontFamily]);

  /** 单元格额外空白（默认约 4 个字号） */
  const targetDefaultCellSpace = useMemo(() => {
    return defaultCellSpace ?? targetDefaultCellFontSize * 4;
  }, [defaultCellSpace, targetDefaultCellFontSize]);

  /** 单元格水平 padding（与 size 相关） */
  const targetDefaultCellSpacing = useMemo(() => {
    const spacingMap = new Map([
      ['large', 15],
      ['middle', 8],
      ['small', 8],
    ]);

    return defaultCellSpacing ?? spacingMap.get(size) ?? 0;
  }, [defaultCellSpacing, size]);

  /**
   * 是否启用「固定表头 + 自动计算表格体高度」
   * @default true
   */
  const targetFixedHeaderAutoTable = useMemo(() => {
    if (Util.isEmpty(fixedHeaderAutoTable)) return true;

    return fixedHeaderAutoTable;
  }, [fixedHeaderAutoTable]);

  /**
   * 是否启用表格与分页等区域的空间分隔样式
   * @default true
   */
  const targetFixedTableSpaceBetween = useMemo(() => {
    if (Util.isEmpty(fixedTableSpaceBetween)) return true;

    return fixedTableSpaceBetween;
  }, [fixedTableSpaceBetween]);

  /**
   * 获取（或创建）离屏测量节点
   * @description 复用单个 span，避免频繁创建销毁 DOM
   * @returns {HTMLSpanElement} 用于文本测宽的 span
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
   * 按指定字体测量文本渲染宽度
   * @description 宽度 = 文本 offsetWidth + 2 * spacing + 2 * space
   * @param params.text - 待测文本
   * @param params.font - 字号（px）
   * @param params.family - 字体族
   * @param params.spacing - 水平 padding（单侧）
   * @param params.space - 额外空白（单侧）
   * @returns {number} 估算像素宽度
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
   * 将数值宽度转为 rem 或 px 字符串（非 virtual 场景给 Table 使用）
   * @description 开启 media 适配时转为 rem，否则转为 `${n}px`
   * @param sizeValue - 像素数值或已有字符串
   * @returns {string} rem / px 字符串，或原字符串
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

  /**
   * 获取可测量的表头文本
   * @description
   * - 优先使用 `titleToString`
   * - 其次仅当 title 为 string/number 时直接使用
   * - ReactNode 表头且无 titleToString 时返回空串（避免 `[object Object]`）
   * @param columnConfig - 列配置
   * @returns {string} 可测量文本
   */
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

  /**
   * 获取可测量的单元格文本
   * @description
   * - 优先 `renderToString(value, record, rowIndex)`
   * - 否则取 `record[dataIndex]`
   * - 仅 string/number/boolean 可测；对象/ReactNode 返回空串
   * @param params.columnConfig - 列配置
   * @param params.record - 行数据
   * @param params.rowIndex - 行索引
   * @returns {string} 可测量文本
   */
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

  /**
   * 将列宽配置解析为像素 number
   * @description 供 virtual 的 scroll.x 汇总、以及字符串宽（px/rem）转换使用
   * @param width - number / `"200px"` / `"12rem"` / `{ minWidth, maxWidth }`
   * @param fallback - 无法解析时的默认值
   * @returns {number} 像素宽度
   */
  function parseColumnWidthToNumber(
    width: ColumnTypeExt['width'] | unknown,
    fallback = 150,
  ): number {
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

  /**
   * 展开表头分组，得到与 colgroup 对齐的叶子列
   * @param cols - 可能含 children 的列配置
   * @returns {ColumnTypeExt[]} 叶子列列表
   */
  function flattenLeafColumns(cols: ColumnTypeExt[] = []): ColumnTypeExt[] {
    return cols.reduce<ColumnTypeExt[]>((result, column) => {
      if (column?.children && Array.isArray(column.children)) {
        return result.concat(flattenLeafColumns(column.children as ColumnTypeExt[]));
      }

      return result.concat(column);
    }, []);
  }

  /**
   * 表头额外占位宽度
   * @description 如排序图标等，缩小「纯文本测算」与真实渲染的误差
   * @param columnConfig - 列配置
   * @returns {number} 额外像素
   */
  function getColumnExtraWidth(columnConfig: ColumnTypeExt): number {
    let extra = 0;

    if (columnConfig.sorter) {
      extra += 20;
    }

    return extra;
  }

  /**
   * 按表头 + 单元格内容测算列宽（并应用 min/max 夹逼）
   * @description
   * 算法：
   * 1. 测表头文本宽、各行单元格文本宽，取 `max(title, cells)`
   * 2. 加上 `getColumnExtraWidth`
   * 3. 若配置了 minWidth：`content = max(content, min)`
   * 4. 若配置了 maxWidth：`content = min(content, max)`
   * 5. 结果至少 50px
   *
   * 主要用于 virtual 的 `normalizeColumnWidths`；与 `setColumnWidth` 的夹逼规则一致。
   * @param columnConfig - 列配置（width 可为对象）
   * @param dataSource - 数据源
   * @returns {number} 定宽像素值
   */
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

    // 空数据时不能 Math.max(...[])，否则得到 -Infinity
    const cellMaxWidth = cellsWidth.length ? Math.max(...cellsWidth) : 0;
    let contentWidth = Math.max(titleWidth, cellMaxWidth, 0) + getColumnExtraWidth(columnConfig);

    const minWidthCandidate =
      (columnConfig as ColumnTypeExt & { minWidth?: number | string }).minWidth ??
      widthConfig.minWidth;
    const maxWidthCandidate = widthConfig.maxWidth;

    // 内容宽 < min → 用 min
    if (minWidthCandidate != null) {
      contentWidth = Math.max(
        contentWidth,
        parseColumnWidthToNumber(minWidthCandidate as ColumnTypeExt['width'], contentWidth),
      );
    }

    // 内容宽 > max → 用 max
    if (maxWidthCandidate != null) {
      contentWidth = Math.min(contentWidth, maxWidthCandidate);
    }

    return Math.max(Math.ceil(contentWidth), 50);
  }

  /**
   * 将单列宽度解析为 number（virtual 专用）
   * @description
   * - number：原样返回
   * - string：parse 为像素
   * - object / 空：走 `getColumnContentWidth` 按内容测算
   * @param columnConfig - 列配置
   * @param dataSource - 数据源
   * @returns {number} 列宽
   */
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

  /**
   * virtual 模式下将所有叶子列宽规范成 number
   * @description
   * antd virtual 要求列宽为 number；同时清掉 minWidth，避免与定宽混用导致布局漂移。
   * 表头分组列只递归 children，自身不设 width。
   * @param cols - 列配置
   * @param dataSource - 数据源
   * @returns {ColumnTypeExt[]} 规范化后的列
   */
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

  /**
   * 汇总 virtual 所需的 scroll.x
   * @description
   * scroll.x = 所有叶子列宽之和 + rowSelection 列宽（若有）。
   * 勾选列不在 columns 里，漏计会导致 scroll.x 偏小、表头/表体错位。
   * @param cols - 已规范化（最好已是 number width）的列
   * @returns {number} 横向滚动总宽
   */
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
   * 根据 `width` 对象（或 number）计算并回写列宽
   * @description
   * ### 入口条件
   * 仅当 `column.width` 为 number 或 object 时处理；普通字符串宽原样保留。
   *
   * ### number width
   * - `keepNumber === true`（virtual）：保持 number
   * - 否则：转为 rem/px 字符串
   *
   * ### object width（`width: {}` / `{ minWidth, maxWidth, ... }`）
   * 1. ReactNode 表头且无 `titleToString` → 无法测算，直接跳过（不写 width）
   * 2. 测表头宽、各单元格宽，取 `titleAndCellMaxWidth = max(title, cells)`
   * 3. 夹逼规则（与历史逻辑一致）：
   *    - 同时有 min/max：
   *      - 内容 ≤ min → min
   *      - 内容 ≥ max → max
   *      - 中间 → 内容宽
   *    - 仅 min：内容 ≤ min → min，否则内容宽
   *    - 仅 max：内容 ≥ max → max，否则内容宽
   *    - 都无：内容宽
   * 4. 回写 `column.width`：
   *    - virtual：number（至少 50）
   *    - 非 virtual：rem/px 字符串
   *
   * @remarks
   * 关键点是最终写回 **定宽 `width`**，而不是只留 `minWidth`。
   * 这样固定表头拆开的多张 table 会共用同一列宽，避免横向滚动错位。
   *
   * @param columnConfig - 列配置（会被就地修改）
   * @param keepNumber - 是否保留 number（virtual 传 true）
   * @returns {void | undefined} 无法测算时返回 undefined
   */
  function setColumnWidth(columnConfig: ColumnTypeExt, keepNumber = false) {
    if (typeof columnConfig.width === 'number') {
      columnConfig.width = keepNumber ? columnConfig.width : pxToRem(columnConfig.width);
      return;
    }

    if (typeof columnConfig.width != 'object') {
      return;
    }

    // Title 是 React 节点且没有 titleToString：无法离屏测宽，跳过
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
      // 同时配置上下限：夹在 [min, max]
      if (titleAndCellMaxWidth <= widthConfig.minWidth) {
        _width = widthConfig.minWidth;
      } else if (titleAndCellMaxWidth >= widthConfig.maxWidth) {
        _width = widthConfig.maxWidth;
      } else {
        _width = titleAndCellMaxWidth;
      }
    } else if (widthConfig.minWidth) {
      // 仅下限：内容过窄时抬到 min
      if (titleAndCellMaxWidth <= widthConfig.minWidth) {
        _width = widthConfig.minWidth;
      } else {
        _width = titleAndCellMaxWidth;
      }
    } else if (widthConfig.maxWidth) {
      // 仅上限：内容过宽时压到 max
      if (titleAndCellMaxWidth >= widthConfig.maxWidth) {
        _width = widthConfig.maxWidth;
      } else {
        _width = titleAndCellMaxWidth;
      }
    } else {
      // width: {}：完全按内容
      _width = titleAndCellMaxWidth;
    }

    if (_width !== -1) {
      // virtual 必须 number；非 virtual 转为 rem/px，兼容原有样式体系
      columnConfig.width = keepNumber ? Math.max(Math.ceil(_width), 50) : pxToRem(_width);
    }
  }

  /**
   * 处理列配置：克隆 → 测算 width →（virtual 时）规范为 number
   * @description
   * 1. 浅克隆列树，避免直接改 props.columns
   * 2. 对叶子列且存在 truthy `width` 的项调用 `setColumnWidth`
   * 3. virtual：再跑 `normalizeColumnWidths`，确保所有叶子列都是 number width
   *    （含未配置 width、或上一步跳过的列）
   * @param sourceColumns - 原始列
   * @returns {ColumnTypeExt[]} 处理后的列
   */
  function processColumns(
    sourceColumns: ColumnsType | ColumnTypeExt[] | undefined,
  ): ColumnTypeExt[] {
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

        // width: {} 为 truthy，会进入测算；未配置 width 的列在 virtual 时由 normalize 补齐
        if ('width' in columnConfig && columnConfig.width) {
          setColumnWidth(columnConfig, isVirtual);
        }
      });
    };

    walk(cloned);

    // 仅 virtual 需要把列宽规范成 number（antd virtual 约束）；
    // 非 virtual 保持 rem/px 字符串等原逻辑
    if (isVirtual) {
      return normalizeColumnWidths(cloned, (props?.dataSource ?? []) as any[]);
    }

    return cloned;
  }

  /**
   * 最终传给 Table 的 columns（含列宽测算结果）
   */
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

  /**
   * 最终传给 Table 的 props（scroll / tableLayout 等）
   * @description
   * - 固定表头：写入 `scroll.y`
   * - virtual：写入数值 `scroll.x`、`tableLayout: 'fixed'`，并保证 `scroll.y` 为 number（否则删除）
   */
  const targetTableProps = useMemo(() => {
    const targetProps = { ...props };

    // 固定表头：用容器算出的高度作为纵向滚动
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

    // 如果是虚拟滚动
    if (isVirtual) {
      // 用户显式传了 number 的 scroll.x 则尊重；否则按列宽汇总
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

      // antd virtual：fixed 布局 + 数值 scroll，表头/表体列宽才一致
      targetProps.tableLayout = 'fixed';

      if (typeof targetProps.scroll.y !== 'number') {
        delete targetProps.scroll.y;
      }
    }

    return targetProps;
  }, [scrollY, props, targetFixedHeaderAutoTable, isVirtual, targetColumns]);

  /**
   * 组件卸载时清理离屏测宽节点，仅执行一次
   */
  useEffect(() => {
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
  }, []);

  /**
   * 固定表头时根据容器高度计算 scroll.y
   */
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

        // 可用高度 = 容器高 - 表头高 - 分页区（含上下 margin）
        setScrollY(
          tableWrap.clientHeight -
            (tableHeaderHeight + (tablePaginationHeight ? tablePaginationHeight + 16 * 2 : 0)),
        );
      }
    }
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

TableExt.displayName = 'TableExt';

export default TableExt;
