import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { ITableProps } from './types';

const selectorPrefix = 'adhere-ui-playground-table';

/**
 * Table
 * @class Table
 * @classdesc Table
 */
class Table extends React.Component<ITableProps, any> {
  /**
   * renderHeader
   */
  protected renderHeader() {
    const { columns } = this.props;

    return (
      <thead>
        <tr className={`${selectorPrefix}-header`}>
          {columns.map((column) => {
            const { className, style, align } = column;
            const props = {
              key: column.key,
            };

            column.width && (props.width = column.width);

            return (
              <th
                {...props}
                className={classNames(
                  `${selectorPrefix}-header-column`,
                  (className || '').split(' '),
                )}
                style={{ textAlign: align || 'left', ...style }}
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
   * renderBody
   */
  protected renderBody() {
    const { columns, dataSource, rowKey } = this.props;

    return (
      <tbody>
        {dataSource.map((record, rowIndex: number) => {
          return (
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
                      {() => render(record[dataIndex], record, rowIndex, columnIndex)}
                    </ConditionalRender>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }

  protected render() {
    const { className, style, tableClassName, tableStyle } = this.props;

    return (
      <div className={classNames(`${selectorPrefix}`, className.split(' '))} style={{ ...style }}>
        <table
          className={classNames(`${selectorPrefix}-inner`, tableClassName.split(' '))}
          style={{ ...tableStyle }}
        >
          {this.renderHeader()}
          {this.renderBody()}
        </table>
      </div>
    );
  }
}

Table.defaultProps = {
  className: '',
  style: {},
  tableClassName: '',
  tableStyle: {},
  columns: [],
  dataSource: [],
};

Table.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  tableClassName: PropTypes.string,
  tableStyle: PropTypes.object,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      dataIndex: PropTypes.string,
      title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
      width: PropTypes.string,
      align: PropTypes.oneOf(['left', 'right', 'center']),
      valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
      render: PropTypes.func,
      className: PropTypes.string,
      style: PropTypes.object,
    }),
  ),
  dataSource: PropTypes.arrayOf(PropTypes.object),
  rowKey: PropTypes.string,
};

export default Table;
