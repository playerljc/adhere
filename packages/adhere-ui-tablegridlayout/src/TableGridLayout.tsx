import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { ReactElement, memo, useContext, useMemo, useRef } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';

import Label from './Label';
import Value from './Value';
import type {
  DataItem,
  DataItemRow,
  DensityType,
  GroupRenderDetail,
  RenderDetail,
  RenderGridSearchForm,
  RenderGridSearchFormParams,
  RenderHorizontal,
  RenderHorizontalParams,
  RenderHorizontalResult,
  RenderVertical,
  RowCountRef,
  TableGridLayoutComponent,
  TableGridLayoutProps,
} from './types';

/** CSS selector prefix for the component */
export const selectorPrefix = 'adhere-ui-table-grid-layout';

const { useTheme } = ConfigProvider;

/** Get column span from a React element (props.colSpan), default 1 */
function getColSpanFromElement(el: React.ReactNode): number {
  if (!el || typeof el !== 'object' || !('props' in el)) return 1;
  const props = (el as ReactElement).props;
  if (!props || typeof props !== 'object') return 1;
  const p = props as Record<string, unknown>;
  const span = p.colSpan ?? p.colspan;
  const n = typeof span === 'number' && span > 0 ? span : Number(span);
  return Number.isFinite(n) && n > 0 ? n : 1;
}

/**
 * Density class mapping
 */
const DENSITY_CLASS_MAP = new Map<DensityType, string>([
  ['default', 'densitydefault'],
  ['middle', 'densitymiddle'],
  ['small', 'densitysmall'],
]);

/**
 * Renders horizontal layout for table grid
 *
 * @description Creates a horizontal table layout where labels and values are in the same row
 * @param params - Rendering parameters
 * @returns Object containing rendered elements and detail information
 */
const renderHorizontal: RenderHorizontal = (
  params: RenderHorizontalParams,
): RenderHorizontalResult => {
  const {
    data: { columnCount: _columnCount, data: _data },
    rowCountRef,
  } = params;

  /**
   * Creates a single row in horizontal layout
   */
  function createRow(): void {
    const startIndex = _index;

    // All columns in one row
    const tdJSXChildren: ReactElement[] = [];

    // Column count for current row
    let columnsCount = 0;

    while (_index < flatData.length) {
      const item = flatData[_index];
      // Prefer flatSpans (from data item valueColSpan/labelColSpan), fallback to element.props.colSpan
      const span = flatSpans[_index] ?? getColSpanFromElement(item) ?? 1;

      if (columnsCount === columnCount) {
        break;
      }

      // If adding this item would exceed row capacity, finish current row and leave item for next row
      if (columnsCount + span > columnCount) {
        if (columnsCount === 0 && item) {
          columnsCount = columnCount;
          tdJSXChildren.push(item);
          _index++;
        }
        break;
      }

      if (item) {
        columnsCount += span;
        tdJSXChildren.push(item);
      } else {
        columnsCount += 1;
        tdJSXChildren.push(
          <td key={`empty-${_index}`} className={`${selectorPrefix}-table-no-border`} />,
        );
      }
      _index++;
    }

    // Fill remaining columns if needed (keep same columns per row for table alignment)
    if (columnsCount < columnCount) {
      const fillCount = columnCount - columnsCount;
      Array.from({ length: fillCount })
        .fill(0)
        .forEach((_, index) => {
          tdJSXChildren.push(
            <td key={`empty-${_index}-${index}`} className={`${selectorPrefix}-table-no-border`} />,
          );
        });
    }

    const rowJSX = (
      <tr
        key={`row-${rowCountRef.current}`}
        className={classNames(
          `${selectorPrefix}-table-row`,
          rowCountRef.current % 2 === 0 ? 'odd' : 'even',
        )}
      >
        {tdJSXChildren}
      </tr>
    );
    rowCountRef.current++;

    rowJSXChildren.push(rowJSX);

    const endIndex = _index - 1;

    detail.push({
      startIndex: startIndex / 2,
      endIndex: (endIndex - 1) / 2,
    });

    if (_index < flatData.length) {
      createRow();
    }
  }

  const detail: GroupRenderDetail = [];

  // Number of columns per row (label + value = 2 columns per data item)
  const columnCount = (_columnCount as number) * 2;

  // Flattened data array and span per cell (so colSpan from data item is used when element.props is not enough, e.g. dynamic colSpan)
  const flatData: ReactElement[] = [];
  const flatSpans: number[] = [];

  (_data || []).forEach((item: DataItemRow) => {
    let label = item.label;

    if ('require' in item && !!item.require) {
      label = React.cloneElement(
        label,
        {
          // @ts-ignore
          ...label.props,
          className: classNames(
            'require',
            // @ts-ignore
            label.props.className ?? '',
          ),
        },
        // @ts-ignore
        label.props.children,
      );
    }

    const labelSpan = item.labelColSpan ?? getColSpanFromElement(label);
    const valueSpan = item.valueColSpan ?? getColSpanFromElement(item.value);

    flatData.push(label);
    flatSpans.push(labelSpan);
    flatData.push(item.value);
    flatSpans.push(valueSpan);
  });

  // Current iteration index
  let _index = 0;

  const rowJSXChildren: ReactElement[] = [];

  createRow();

  return {
    element: rowJSXChildren,
    detail,
  };
};

/**
 * Renders vertical layout for table grid
 *
 * @description Creates a vertical table layout where labels and values are in separate rows
 * @param data - Data configuration
 * @param rowCountRef - Row count reference
 * @returns Object containing rendered elements and detail information
 */
const renderVertical: RenderVertical = (
  data: DataItem,
  rowCountRef: RowCountRef,
): RenderHorizontalResult => {
  const { columnCount: _columnCount, data: _data } = data;

  // Per-item column span (labelColSpan/valueColSpan or from element.props.colSpan) for layout count
  const itemSpans: number[] = [];
  (_data || []).forEach((item: DataItemRow) => {
    const labelSpan = item.labelColSpan ?? getColSpanFromElement(item.label);
    const valueSpan = item.valueColSpan ?? getColSpanFromElement(item.value);
    itemSpans.push(Math.max(labelSpan, valueSpan));
  });

  /**
   * Creates a single row in vertical layout
   */
  function createRow(): void {
    const tdLabelJSXS: ReactElement[] = [];
    const tdValueJSXS: ReactElement[] = [];

    let columnsCount = 0;
    const startIndex = _index;

    while (_index < (_data || []).length) {
      const item = (_data || [])[_index];
      const span = itemSpans[_index] ?? 1;

      if (columnsCount === columnCount) break;

      if (columnsCount + span > columnCount) {
        // 单项跨度超过当前行容量时仍占满本行并前进索引，避免无限递归
        if (columnsCount === 0 && item) {
          columnsCount = columnCount;
          tdLabelJSXS.push(item.label);
          tdValueJSXS.push(item.value);
          _index++;
        }
        break;
      }

      if (item) {
        columnsCount += span;
        tdLabelJSXS.push(item.label);
        tdValueJSXS.push(item.value);
      }
      _index++;
    }

    // Fill remaining columns if needed
    if (columnsCount < columnCount) {
      const fillCount = columnCount - columnsCount;
      Array.from({ length: fillCount })
        .fill(0)
        .forEach((_, index) => {
          const key = `empty-${_index}-${index}`;
          tdLabelJSXS.push(<td key={key} className={`${selectorPrefix}-table-no-border`} />);
          tdValueJSXS.push(
            <td key={`${key}-value`} className={`${selectorPrefix}-table-no-border`} />,
          );
        });
    }

    const labelRowJSX = (
      <tr
        key={`label-row-${rowCountRef.current}`}
        className={classNames(`${selectorPrefix}-table-row`, 'even')}
      >
        {tdLabelJSXS}
      </tr>
    );
    const valueRowJSX = (
      <tr
        key={`value-row-${rowCountRef.current}`}
        className={classNames(`${selectorPrefix}-table-row`, 'odd')}
      >
        {tdValueJSXS}
      </tr>
    );

    rowJSXChildren.push(labelRowJSX, valueRowJSX);
    rowCountRef.current += 2;

    const endIndex = _index - 1;

    detail.push({
      startIndex,
      endIndex,
    });

    if (_index < (_data || []).length) {
      createRow();
    }
  }

  const detail: GroupRenderDetail = [];

  // Number of columns per row
  const columnCount = _columnCount as number;

  (_data || []).forEach((item: DataItemRow) => {
    let label = item.label;

    if ('require' in item && !!item.require) {
      item.label = React.cloneElement(
        label,
        {
          // @ts-ignore
          ...label.props,
          className: classNames(
            'require',
            // @ts-ignore
            label.props.className ?? '',
          ),
        },
        // @ts-ignore
        label.props.children,
      );
    }
  });

  let _index = 0;

  const rowJSXChildren: ReactElement[] = [];

  createRow();

  return {
    element: rowJSXChildren,
    detail,
  };
};

/**
 * Renders a single table grid
 *
 * @description Creates a table element with proper styling and layout
 * @param params - Rendering parameters
 * @returns Table element
 */
const renderGridSearchForm: RenderGridSearchForm = (
  params: RenderGridSearchFormParams,
): ReactElement => {
  const {
    data: { className, style, width, colgroup, defaultLabelWidth = 120, columnCount },
    layout,
    density,
    mode,
    rowCountRef,
    media = { isUseMedia: false, designWidth: 192 },
  } = params;

  // Calculate target width based on media settings
  let targetWidth = width;
  if (media.isUseMedia) {
    targetWidth = Util.isNumber(width)
      ? Util.pxToRem(width as number, media.designWidth as number)
      : width;
  }

  // Calculate target default label width based on media settings
  let targetDefaultLabelWidth: string | number = defaultLabelWidth;
  if (media.isUseMedia) {
    targetDefaultLabelWidth = Util.isNumber(defaultLabelWidth)
      ? Util.pxToRem(defaultLabelWidth as number, media.designWidth as number)
      : defaultLabelWidth;
  }

  const colgroupJSX: ReactElement[] = [];

  // Generate colgroup elements
  for (let i = 0; i < (colgroup || []).length; i++) {
    const width = (colgroup || [])[i];

    let targetWidth: number | string = width;
    if (media.isUseMedia) {
      targetWidth = Util.isNumber(width)
        ? Util.pxToRem(width as number, media.designWidth as number)
        : width;
    }

    colgroupJSX.push(
      <ConditionalRender key={i} conditional={targetWidth !== 'auto'} noMatch={() => <col />}>
        {() => (
          <col
            style={{
              width: targetWidth ?? targetDefaultLabelWidth,
            }}
          />
        )}
      </ConditionalRender>,
    );
  }

  return (
    <table
      key={`${layout}_${columnCount}`}
      className={classNames(
        `${selectorPrefix}-table`,
        `${selectorPrefix}-table-${layout}`,
        DENSITY_CLASS_MAP.get(density || 'default'),
        mode,
        className,
      )}
      style={{ width: targetWidth ? targetWidth : '100%', ...(style ?? {}) }}
    >
      <colgroup>{colgroupJSX}</colgroup>

      <tbody>
        <ConditionalRender
          conditional={layout === 'horizontal'}
          noMatch={() => renderVertical(params.data, rowCountRef).element}
        >
          {() => renderHorizontal(params).element}
        </ConditionalRender>
      </tbody>
    </table>
  );
};

/**
 * Renders a group of table grids
 *
 * @description Creates multiple table grids with proper grouping and styling
 * @param data - Array of data items for each table
 * @param props - Component props
 * @param media - Media configuration
 * @returns Group of table elements
 */
function renderGridSearchFormGroup(
  data?: DataItem[],
  props?: Omit<TableGridLayoutProps, 'data'>,
  media?: ConfigProviderProps['media'],
): ReactElement {
  const rowCountRef: RowCountRef = { current: 0 };

  const {
    bordered = false,
    innerClassName,
    innerStyle,
    ...renderGridSearchFormProps
  } = props ?? {};

  return (
    <div
      className={classNames(
        `${selectorPrefix}-inner-wrap`,
        {
          [`${selectorPrefix}-border`]: bordered,
        },
        innerClassName,
      )}
      style={innerStyle ?? {}}
    >
      {(data || []).map((group, index) => (
        <ConditionalRender
          key={group.name || index}
          conditional={index !== 0}
          noMatch={() =>
            renderGridSearchForm({
              data: group,
              rowCountRef,
              media,
              ...renderGridSearchFormProps,
            })
          }
        >
          {() => (
            <div>
              {renderGridSearchForm({
                data: group,
                rowCountRef,
                media,
                ...renderGridSearchFormProps,
              })}
            </div>
          )}
        </ConditionalRender>
      ))}
    </div>
  );
}

/**
 * Gets render detail information for table grids
 *
 * @description Calculates and returns detailed information about the rendering structure
 * @param data - Array of data items
 * @param props - Component props
 * @returns Render detail information
 */
function getRenderDetail(
  data: DataItem[],
  props: Omit<TableGridLayoutProps, 'data'>,
): RenderDetail {
  const {
    bordered = false,
    innerClassName,
    innerStyle,
    ...renderGridSearchFormProps
  } = props ?? {};

  const result: RenderDetail = {
    rowCount: 0,
    layout: props.layout,
    detail: [],
  };

  data.forEach((group) => {
    const rowCountRef: RowCountRef = { current: 0 };

    const params: RenderHorizontalParams = {
      data: group,
      rowCountRef,
      ...renderGridSearchFormProps,
    };

    let detail: GroupRenderDetail = [];

    if (props.layout === 'horizontal') {
      detail = renderHorizontal(params).detail;
    } else {
      detail = renderVertical(params.data, rowCountRef).detail;
    }

    result.rowCount += rowCountRef.current;

    result.detail.push({
      name: group.name!,
      rowCount: props.layout === 'horizontal' ? rowCountRef.current : rowCountRef.current / 2,
      detail,
    });
  });

  return result;
}

/**
 * TableGridLayout component
 *
 * @description A flexible table grid layout component that supports both horizontal and vertical layouts
 * @param props - Component props
 * @returns TableGridLayout component
 *
 * @example
 * ```tsx
 * <TableGridLayout
 *   data={[
 *     {
 *       columnCount: 3,
 *       colgroup: [120, 200, 150],
 *       data: [
 *         {
 *           key: 'name',
 *           label: <TableGridLayout.Label>Name:</TableGridLayout.Label>,
 *           value: <TableGridLayout.Value>John Doe</TableGridLayout.Value>,
 *         },
 *       ],
 *     },
 *   ]}
 *   layout="horizontal"
 *   bordered
 * />
 * ```
 */
const InternalTableGridLayout = memo<TableGridLayoutProps>(
  ({ data, className, style, ...props }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const targetData = useMemo(
      () =>
        (data ?? [])
          .map((record) => ({
            ...record,
            data: record.data?.filter?.((item) => !('show' in item) || !!item.show),
          }))
          .filter((record) => !!record?.data?.length),
      [data],
    );

    const configProvider = useContext(ConfigProvider.Context);

    useTheme<HTMLDivElement>({
      elRef: wrapperRef,
      group: 'normal',
      displayName: 'TableGridLayout',
    });

    return (
      <div ref={wrapperRef} className={classNames(selectorPrefix, className)} style={style ?? {}}>
        {renderGridSearchFormGroup(targetData, props, configProvider.media)}
      </div>
    );
  },
);

const TableGridLayout = InternalTableGridLayout as TableGridLayoutComponent;

TableGridLayout.displayName = 'TableGridLayout';

/**
 * Label sub-component for table grid layout
 *
 * @description Renders a table cell with label styling
 */
TableGridLayout.Label = Label;

/**
 * Value sub-component for table grid layout
 *
 * @description Renders a table cell with value styling
 */
TableGridLayout.Value = Value;

/**
 * Renders a group of table grids
 *
 * @description Static method to render multiple table grids with proper grouping
 * @param data - Array of data items for each table
 * @param props - Component props
 * @param media - Media configuration
 * @returns Group of table elements
 */
TableGridLayout.renderGridSearchFormGroup = renderGridSearchFormGroup;

/**
 * Gets render detail information for table grids
 *
 * @description Static method to calculate detailed information about the rendering structure
 * @param data - Array of data items
 * @param props - Component props
 * @returns Render detail information
 */
TableGridLayout.getRenderDetail = getRenderDetail;

TableGridLayout.defaultProps = {
  data: [],
  layout: 'horizontal',
  bordered: false,
  mode: 'normal',
};

TableGridLayout.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  innerClassName: PropTypes.string,
  innerStyle: PropTypes.object,
  /** Whether to show borders */
  bordered: PropTypes.bool,
  /** Layout type */
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Density setting */
  density: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Display mode */
  mode: PropTypes.string,
  /** Data configuration, each item represents a table */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      style: PropTypes.object,
      /** Group name */
      name: PropTypes.string,
      /** Group width, defaults to 100% */
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      /** Default label width */
      defaultLabelWidth: PropTypes.number,
      /** Default padding */
      padding: PropTypes.arrayOf(PropTypes.number),
      /** Column settings, 'auto' means adaptive */
      colgroup: PropTypes.arrayOf(PropTypes.number).isRequired,
      /** Number of columns */
      columnCount: PropTypes.number.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          /** Label component */
          label: PropTypes.node.isRequired,
          /** Value component */
          value: PropTypes.node.isRequired,
          /** Whether to show this item */
          show: PropTypes.bool,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default TableGridLayout;
