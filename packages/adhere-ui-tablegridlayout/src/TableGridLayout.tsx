import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { ReactElement, memo, useContext, useMemo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';

import Label from './Label';
import Value from './Value';
import type {
  DataItem,
  GroupRenderDetail,
  RenderDetail,
  RenderGridSearchForm,
  RenderHorizontal,
  RenderVertical,
  RowCountRef,
  TableGridLayoutComponent,
  TableGridLayoutProps,
} from './types';

export const selectorPrefix = 'adhere-ui-table-grid-layout';

/**
 * renderHorizontal
 * @description 渲染横向布局
 * @return {
 *   element: JSX.Element[];
     detail: GroupRenderDetail;
 * }
 */
const renderHorizontal: RenderHorizontal = (params) => {
  const {
    data: { columnCount: _columnCount, data: _data },
    rowCountRef,
  } = params;

  /**
   * createRow
   * @description 创建一行
   */
  function createRow() {
    const startIndex = _index;

    // 一行的所有列
    const tdJSXChildren: ReactElement[] = [];

    // 一行的列数计数
    let columnsCount = 0;

    while (_index < flatData.length) {
      // label或者value
      const item = flatData[_index];

      if (columnsCount !== columnCount) {
        if (item) {
          if ('colSpan' in item.props && typeof item.props.colSpan === 'number') {
            columnsCount += item.props.colSpan;
          } else {
            columnsCount = columnsCount + 1;
          }

          tdJSXChildren.push(item);
        }

        _index++;
      } else {
        break;
      }
    }

    // 一行
    if (columnsCount < columnCount) {
      Array.from({ length: columnCount - columnsCount })
        .fill(0)
        .forEach(() => {
          tdJSXChildren.push(<td className={`${selectorPrefix}-table-noborder`} />);
        });
    }

    const rowJSX = (
      <tr
        className={classNames(
          `${selectorPrefix}-table-row`,
          (rowCountRef as RowCountRef).current % 2 === 0 ? 'odd' : 'even',
        )}
      >
        {tdJSXChildren}
      </tr>
    );
    (rowCountRef as RowCountRef).current++;

    rowJSXChildren.push(rowJSX);

    const endIndex = _index - 1;

    detail.push({
      startIndex: startIndex / 2,
      endIndex: (endIndex - 1) / 2,
    });

    if (_index < flatData.length) {
      createRow();
    }

    // 0 1 2 3 4 5 6 7
    // 第一行 0 1 2 3 4 5 | 0 1 2
    // 第二行 6 7 8 9 10 11 | 3 4 5
  }

  const detail: GroupRenderDetail = [];

  // 一行多少列
  const columnCount = (_columnCount as number) * 2;

  // 拉平的数据
  const flatData: ReactElement[] = [];

  (_data || []).forEach((t) => {
    let label = t.label;

    if ('require' in t && !!t.require) {
      label = React.cloneElement(
        label,
        {
          ...label.props,
          className: classNames(
            // `${selectorPrefix}-table-row-label`,
            'require',
            label.props.className ?? '',
          ),
        },
        label.props.children,
      );
    }

    flatData.push(label);
    flatData.push(t.value);
  });

  // 迭代的索引
  let _index = 0;

  const rowJSXChildren: ReactElement[] = [];

  createRow();

  return {
    element: rowJSXChildren,
    detail,
  };
};

/**
 * renderVertical
 * @description 渲染纵向布局
 * @return ReactElement[]
 * @param data
 * @param rowCountRef
 */
const renderVertical: RenderVertical = (data, rowCountRef) => {
  const { columnCount: _columnCount, data: _data } = data;

  /**
   * createRow
   * @description 创建一行
   */
  function createRow() {
    // 一行的所有列
    const tdLabelJSXS: ReactElement[] = [];
    const tdValueJSXS: ReactElement[] = [];

    // 一行的列数计数
    let columnsCount = 0;

    // 0 1 2
    // 3 4 5

    const startIndex = _index;

    while (_index < (_data || []).length) {
      const item = (_data || [])[_index];

      if (columnsCount !== columnCount) {
        if (item) {
          if ('colSpan' in item.value.props && typeof item.value.props.colSpan === 'number') {
            columnsCount += item.value.props.colSpan;
          } else {
            columnsCount = columnsCount + 1;
          }

          tdLabelJSXS.push(item.label);
          tdValueJSXS.push(item.value);
        }

        _index++;
      } else {
        break;
      }
    }

    // 一行
    if (columnsCount < columnCount) {
      const fillCount = columnCount - columnsCount;
      Array.from({ length: fillCount })
        .fill(0)
        .forEach(() => {
          tdLabelJSXS.push(<td className={`${selectorPrefix}-table-noborder`} />);
          tdValueJSXS.push(<td className={`${selectorPrefix}-table-noborder`} />);
        });
    }

    const labelRowJSX = (
      <tr className={classNames(`${selectorPrefix}-table-row`, 'even')}>{tdLabelJSXS}</tr>
    );
    const valueRowJSX = (
      <tr className={classNames(`${selectorPrefix}-table-row`, 'odd')}>{tdValueJSXS}</tr>
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

  // 一行多少列
  const columnCount = _columnCount as number;

  (_data || []).forEach((t) => {
    let label = t.label;

    if ('require' in t && !!t.require) {
      t.label = React.cloneElement(
        label,
        {
          ...label.props,
          className: classNames(
            // `${selectorPrefix}-table-row-label`,
            'require',
            label.props.className ?? '',
          ),
        },
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
 * renderGridSearchForm
 * @description 渲染一个Table
 * @return {ReactElement}
 */
const renderGridSearchForm: RenderGridSearchForm = (params): ReactElement => {
  const {
    data: { className, style, width, colgroup, defaultLabelWidth = 120 },
    layout,
    density,
    // parity = false,
    mode,
    rowCountRef,
    media = { isUseMedia: false, designWidth: 192 },
  } = params;

  let targetWidth = width;
  if (media.isUseMedia) {
    targetWidth = Util.isNumber(width)
      ? Util.pxToRem(width as number, media.designWidth as number)
      : width;
  }

  let targetDefaultLabelWidth: string | number = defaultLabelWidth;
  if (media.isUseMedia) {
    targetDefaultLabelWidth = Util.isNumber(defaultLabelWidth)
      ? Util.pxToRem(defaultLabelWidth as number, media.designWidth as number)
      : defaultLabelWidth;
  }

  const densityClass = new Map([
    ['default', 'densitydefault'],
    ['middle', 'densitymiddle'],
    ['small', 'densitysmall'],
  ]);

  const colgroupJSX: ReactElement[] = [];

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
      className={classNames(
        `${selectorPrefix}-table`,
        `${selectorPrefix}-table-${layout}`,
        densityClass.get(density || 'default'),
        mode,
        className ?? '',
      )}
      style={{ width: targetWidth ? targetWidth : '100%', ...(style ?? {}) }}
    >
      <colgroup>{colgroupJSX}</colgroup>

      <ConditionalRender
        conditional={layout === 'horizontal'}
        noMatch={() => renderVertical(params.data, rowCountRef).element}
      >
        {() => renderHorizontal(params).element}
      </ConditionalRender>
    </table>
  );
};

/**
 * renderGridSearchFormGroup
 * @param data
 * @param props
 * @param media
 */
function renderGridSearchFormGroup(
  data?: DataItem[],
  props?: Omit<TableGridLayoutProps, 'data'>,
  media?: ConfigProviderProps['media'],
): ReactElement {
  const rowCountRef = { current: 0 };

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
        innerClassName ?? '',
      )}
      style={innerStyle ?? {}}
    >
      {(data || []).map((g, index) => (
        <ConditionalRender
          key={g.name || index}
          conditional={index !== 0}
          noMatch={() =>
            renderGridSearchForm({
              data: g,
              rowCountRef,
              media,
              ...renderGridSearchFormProps,
            })
          }
        >
          {() => (
            <div>
              {renderGridSearchForm({
                data: g,
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
 * getRenderDetail
 * @param data
 * @param props
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

  const result: RenderDetail = { rowCount: 0, layout: props.layout, detail: [] };

  data.forEach((g) => {
    const rowCountRef = { current: 0 };

    const params = {
      data: g,
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
      name: g.name!,
      rowCount: props.layout === 'horizontal' ? rowCountRef.current : rowCountRef.current / 2,
      detail,
    });
  });

  return result;
}

/**
 * TableGridLayout
 * @param data
 * @param className
 * @param style
 * @param props
 * @return {ReactElement}
 */
const InternalTableGridLayout = memo<TableGridLayoutProps>(
  ({ data, className, style, ...props }) => {
    const targetData = useMemo(
      () =>
        (data ?? [])
          .map((_record) => ({
            ..._record,
            data: _record.data?.filter?.((_item) => !('show' in _item) || !!_item.show),
          }))
          .filter((_record) => !!_record?.data?.length),
      [data, className, style, props],
    );

    const configProvider = useContext(ConfigProvider.Context);

    return (
      <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
        {renderGridSearchFormGroup(targetData, props, configProvider.media)}
      </div>
    );
  },
);

const TableGridLayout = InternalTableGridLayout as TableGridLayoutComponent;

TableGridLayout.displayName = 'TableGridLayout';

/**
 * Label
 * @description 左侧Label
 * @param props
 * @constructor
 */
TableGridLayout.Label = Label;

/**
 * Value
 * @description 右侧Value
 * @param props
 * @constructor
 */
TableGridLayout.Value = Value;

/**
 * renderGridSearchFormGroup
 * @description - 渲染TableGridLayout
 * @param data
 * @param props
 * @return {ReactElement}
 */
TableGridLayout.renderGridSearchFormGroup = renderGridSearchFormGroup;

/**
 * getRenderDetail
 * @description 获取渲染细节
 * @param data - 组数据
 * @param props - 配置
 * @return RenderDetail
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
  // 是否有边框
  bordered: PropTypes.bool,
  // 布局
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  // 密度
  density: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // 是否是奇偶数不同色
  // parity: PropTypes.bool,
  mode: PropTypes.string,
  // 数据配置，一个数据表示一个表格
  data: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      style: PropTypes.object,
      // group名称
      name: PropTypes.string,
      // group的宽度，默认是100%
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      // 缺省的Label宽度
      defaultLabelWidth: PropTypes.number,
      // 缺省的padding
      padding: PropTypes.arrayOf(PropTypes.number),
      // 列设置 auto表示自适应
      colgroup: PropTypes.arrayOf(PropTypes.number).isRequired,
      // 列数
      columnCount: PropTypes.number.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          // Label组件
          label: PropTypes.node.isRequired,
          // Value组件
          value: PropTypes.node.isRequired,
          // 是否显示此项
          show: PropTypes.bool,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default TableGridLayout;
