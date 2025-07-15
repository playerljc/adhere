import classNames from 'classnames';
import React, { memo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import type { TableProps, TableColumn } from './types';

const selectorPrefix = 'adhere-ui-playground-table';

/**
 * Table组件
 * @component Table
 * @description 表格组件，用于展示结构化数据
 * @param props - 组件属性
 * @param props.className - 自定义CSS类名
 * @param props.style - 自定义内联样式
 * @param props.tableClassName - 表格CSS类名
 * @param props.tableStyle - 表格内联样式
 * @param props.columns - 列配置
 * @param props.dataSource - 数据源
 * @param props.rowKey - 行键值字段
 * @returns JSX.Element
 * @example
 * ```tsx
 * <Table
 *   columns={[
 *     { key: 'name', title: '姓名', dataIndex: 'name', width: '50%' },
 *     { key: 'age', title: '年龄', dataIndex: 'age', width: '50%' }
 *   ]}
 *   dataSource={[
 *     { id: 1, name: '张三', age: 25 },
 *     { id: 2, name: '李四', age: 30 }
 *   ]}
 *   rowKey="id"
 * />
 * ```
 */
const Table = memo<TableProps>((props) => {
  const {
    className = '',
    style = {},
    tableClassName = '',
    tableStyle = {},
    columns = [],
    dataSource = [],
    rowKey = 'id',
  } = props;

  /**
   * 渲染表格头部
   * @function renderHeader
   * @description 渲染表格的头部行
   * @returns React.ReactElement 表格头部
   */
  function renderHeader(): React.ReactElement {
    return (
      <thead>
        <tr className={`${selectorPrefix}-header`}>
          {(columns || []).map((column) => {
            const { className = '', style = {}, align } = column;

            const thProps = {
              key: column.key,
              width: column.width,
            };

            return (
              <th
                {...thProps}
                className={classNames(`${selectorPrefix}-header-column`, className ?? '')}
                style={{ textAlign: align || 'left', ...(style ?? {}) }}
              >
                {column.title || '-'}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  /**
   * 渲染表格主体
   * @function renderBody
   * @description 渲染表格的主体内容
   * @returns React.ReactElement 表格主体
   */
  function renderBody(): React.ReactElement {
    return (
      <tbody>
        {(dataSource || []).map((record, rowIndex) => (
          <tr className={`${selectorPrefix}-row`} key={record[rowKey]}>
            {columns.map((column, columnIndex) => {
              const { dataIndex, render, align, valign } = column;

              return (
                <td
                  className={`${selectorPrefix}-cell`}
                  key={column.key}
                  valign={valign || 'top'}
                  style={{ textAlign: align || 'left' }}
                >
                  <ConditionalRender
                    conditional={!!render}
                    noMatch={() => record[dataIndex] || '-'}
                  >
                    {() => render?.(record[dataIndex], record, rowIndex, columnIndex)}
                  </ConditionalRender>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <div className={classNames(`${selectorPrefix}`, className ?? '')} style={style ?? {}}>
      <table
        className={classNames(`${selectorPrefix}-inner`, tableClassName ?? '')}
        style={tableStyle ?? {}}
      >
        {renderHeader()}
        {renderBody()}
      </table>
    </div>
  );
});

Table.displayName = 'Table';

export default Table;
