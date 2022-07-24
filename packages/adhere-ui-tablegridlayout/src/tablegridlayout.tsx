import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { ITableGridLayoutProps, IDataItem } from './types';

const selectorPrefix = 'adhere-ui-tablegridlayout';

/**
 * renderHorizontal
 * @description 渲染横向布局
 * @return JSX.Element[]
 */
function renderHorizontal({ data: { columnCount: _columnCount, data: _data }, rowCountRef }) {
  /**
   * createRow
   * @description 创建一行
   */
  function createRow() {
    // 一行的所有列
    const tdJSXS: JSX.Element[] = [];

    // 一行的列数计数
    let columnsCount = 0;

    while (_index < flatData.length) {
      const item = flatData[_index];

      if (columnsCount !== columnCount) {
        if ('colSpan' in item.props && typeof item.props.colSpan === 'number') {
          columnsCount += item.props.colSpan;
        } else {
          columnsCount = columnsCount + 1;
        }

        tdJSXS.push(item);
        _index++;
      } else {
        break;
      }
    }

    // 一行
    if (columnsCount < columnCount) {
      const fillCount = columnCount - columnsCount;
      const fillCountArr: number[] = [];
      fillCountArr.length = fillCount;
      fillCountArr.fill(0);
      fillCountArr.forEach(() => {
        tdJSXS.push(<td className={`${selectorPrefix}-table-noborder`} />);
      });
    }

    const rowJSX = (
      <tr
        className={classNames(
          `${selectorPrefix}-table-row`,
          rowCountRef.current % 2 === 0 ? 'odd' : 'even',
        )}
      >
        {tdJSXS}
      </tr>
    );
    // eslint-disable-next-line no-plusplus
    rowCountRef.current++;

    rowJSXS.push(rowJSX);

    if (_index < flatData.length) {
      createRow();
    }
  }

  // 一行多少列
  const columnCount = _columnCount * 2;
  const columnCountArr: number[] = [];
  columnCountArr.length = columnCount;
  columnCountArr.fill(0);

  const flatData: JSX.Element[] = [];
  _data.forEach((t) => {
    let label = t.label;

    if ('require' in t && !!t.require) {
      label = React.cloneElement(
        label,
        {
          ...label.props,
          className: classNames(
            `${selectorPrefix}-table-row-label`,
            'require',
            label.props.className || '',
          ),
        },
        label.props.children,
      );
    }

    flatData.push(label);
    flatData.push(t.value);
  });

  let _index = 0;

  const rowJSXS: JSX.Element[] = [];

  createRow();

  return rowJSXS;
}

/**
 * renderVertical
 * @description 渲染纵向布局
 * @param _columnCount
 * @param _data
 * @return JSX.Element[]
 */
function renderVertical({ columnCount: _columnCount, data: _data }) {
  /**
   * createRow
   * @description 创建一行
   */
  function createRow() {
    // 一行的所有列
    const tdLabelJSXS: JSX.Element[] = [];
    const tdValueJSXS: JSX.Element[] = [];

    // 一行的列数计数
    let columnsCount = 0;

    while (_index < _data.length) {
      const item = _data[_index];

      if (columnsCount !== columnCount) {
        if ('colSpan' in item.value.props && typeof item.value.props.colSpan === 'number') {
          columnsCount += item.value.props.colSpan;
        } else {
          columnsCount = columnsCount + 1;
        }

        tdLabelJSXS.push(item.label);
        tdValueJSXS.push(item.value);
        _index++;
      } else {
        break;
      }
    }

    // 一行
    if (columnsCount < columnCount) {
      const fillCount = columnCount - columnsCount;
      const fillCountArr: number[] = [];
      fillCountArr.length = fillCount;
      fillCountArr.fill(0);
      fillCountArr.forEach(() => {
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

    rowJSXS.push(labelRowJSX, valueRowJSX);

    console.log('rowJSXS', rowJSXS);
    console.log('_index', _index);

    if (_index < _data.length) {
      createRow();
    }
  }

  // 一行多少列
  const columnCount = _columnCount;
  const columnCountArr: number[] = [];
  columnCountArr.length = columnCount;
  columnCountArr.fill(0);

  _data.forEach((t) => {
    let label = t.label;

    if ('require' in t && !!t.require) {
      t.label = React.cloneElement(
        label,
        { ...label.props, className: `${label.props.className} require` },
        label.props.children,
      );
    }
  });

  let _index = 0;

  const rowJSXS: JSX.Element[] = [];

  createRow();

  return rowJSXS;
}

/**
 * renderGridSearchForm
 * @description 渲染一个Table
 * @return {JSX.Element}
 */
function renderGridSearchForm(params) {
  const {
    data: {
      className,
      style,
      width: _width,
      colgroup: _colgroup,
      defaultLabelWidth: _defaultLabelWidth = 120,
    },
    layout,
    density: _density,
    parity: _parity = false,
  } = params;

  const densityClass = new Map([
    ['default', 'densitydefault'],
    ['middle', 'densitymiddle'],
    ['small', 'densitysmall'],
  ]);

  const colgroupJSX = [];

  for (let i = 0; i < _colgroup.length; i++) {
    const width = _colgroup[i];

    colgroupJSX.push(
      // @ts-ignore
      <ConditionalRender key={i} conditional={width !== 'auto'} noMatch={() => <col />}>
        {() => <col width={width || _defaultLabelWidth} />}
      </ConditionalRender>,
    );
  }

  return (
    <table
      className={classNames(
        `${selectorPrefix}-table`,
        densityClass.get(_density || 'default'),
        _parity ? 'parity' : '',
        className || '',
      )}
      style={{ width: _width ? _width : '100%', ...(style || {}) }}
    >
      <colgroup>{colgroupJSX}</colgroup>
      <ConditionalRender
        conditional={layout === 'horizontal'}
        // @ts-ignore
        noMatch={() => renderVertical(params.data)}
      >
        {() => renderHorizontal(params)}
      </ConditionalRender>
    </table>
  );
}

/**
 * renderGridSearchFormGroup
 * @param data
 * @param props
 * @return {JSX.Element}
 */
TableGridLayout.renderGridSearchFormGroup =  function (
  data: IDataItem[],
  props: Pick<
    ITableGridLayoutProps,
    Exclude<keyof ITableGridLayoutProps, 'className' | 'style' | 'data'>
  >,
) {
  const rowCountRef = { current: 0 };

  const {
    bordered = false,
    innerClassName,
    innerStyle,
    ...renderGridSearchFormProps
  } = props || {};

  return (
    <div
      className={classNames(
        bordered ? `${selectorPrefix}-border` : null,
        `${selectorPrefix}-inner-wrap`,
        innerClassName || '',
      )}
      style={innerStyle || {}}
    >
      {data.map((g, index) => (
        <ConditionalRender
          key={g.name || index}
          conditional={index !== 0}
          noMatch={() =>
            renderGridSearchForm({
              data: g,
              rowCountRef,
              ...renderGridSearchFormProps,
            })
          }
        >
          {() => (
            <div>
              {renderGridSearchForm({
                data: g,
                rowCountRef,
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
 * TableGridLayout
 * @param data
 * @param className
 * @param style
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function TableGridLayout({ data, className, style, ...props }: ITableGridLayoutProps): JSX.Element {
  return (
    <div className={classNames(selectorPrefix, className || '')} style={style || {}}>
      {TableGridLayout.renderGridSearchFormGroup(data, props)}
    </div>
  );
}

TableGridLayout.Label = (props) => {
  const { className, ..._props } = props;

  // console.log('labelProps', _props);

  return (
    <td className={classNames(`${selectorPrefix}-table-row-label`, className || '')} {..._props}>
      {props.children}
    </td>
  );
};

TableGridLayout.Value = (props) => {
  const { className, ..._props } = props;

  return (
    <td className={classNames(`${selectorPrefix}-table-row-value`, className || '')} {..._props}>
      {props.children}
    </td>
  );
};

TableGridLayout.defaultProps = {
  data: [],
  layout: 'horizontal',
  bordered: false,
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
  parity: PropTypes.bool,
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
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default TableGridLayout;
