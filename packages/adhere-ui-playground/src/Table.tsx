import classNames from 'classnames';
import React, { FC, memo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { TableProps } from './types';

const selectorPrefix = 'adhere-ui-playground-table';

const Table: FC<TableProps> = (props) => {
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
   * renderHeader
   */
  function renderHeader() {
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
   * renderBody
   */
  function renderBody() {
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
};

// /**
//  * Table
//  * @class Table
//  * @classdesc Table
//  */
// // @ts-ignore
// class Table extends React.Component<ITableProps, any> {
//   static defaultProps: {
//     tableClassName: string;
//     columns: any[];
//     tableStyle: {};
//     className: string;
//     style: {};
//     dataSource: any[];
//   };
//
//   static propTypes: {
//     tableClassName: any;
//     columns: Requireable<any[]>;
//     tableStyle: any;
//     className: any;
//     style: any;
//     dataSource: Requireable<any[]>;
//     rowKey: any;
//   };
//
//   /**
//    * renderHeader
//    */
//   protected renderHeader() {
//     const { columns } = this.props;
//
//     return (
//       <thead>
//         <tr className={`${selectorPrefix}-header`}>
//           {columns.map((column) => {
//             const { className, style, align } = column;
//             const props = {
//               key: column.key,
//               width: undefined,
//             };
//
//             // @ts-ignore
//             column.width && (props.width = column.width);
//
//             return (
//               <th
//                 {...props}
//                 className={classNames(
//                   `${selectorPrefix}-header-column`,
//                   (className || '').split(/\s+/),
//                 )}
//                 style={{ textAlign: align || 'left', ...style }}
//               >
//                 {column.title || '-'}
//               </th>
//             );
//           })}
//         </tr>
//       </thead>
//     );
//   }
//
//   /**
//    * renderBody
//    */
//   protected renderBody() {
//     const { columns, dataSource, rowKey } = this.props;
//
//     return (
//       <tbody>
//         {dataSource.map((record, rowIndex: number) => {
//           return (
//             <tr className={`${selectorPrefix}-row`} key={record[rowKey]}>
//               {columns.map((column, columnIndex) => {
//                 const { dataIndex, render, align, valign } = column;
//
//                 return (
//                   <td
//                     className={`${selectorPrefix}-cell`}
//                     key={column.key}
//                     valign={valign || 'top'}
//                     style={{ textAlign: align || 'left' }}
//                   >
//                     <ConditionalRender
//                       conditional={!!render}
//                       // @ts-ignore
//                       noMatch={() => record[dataIndex] || '-'}
//                     >
//                       {() => render(record[dataIndex], record, rowIndex, columnIndex)}
//                     </ConditionalRender>
//                   </td>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     );
//   }
//
//   protected render() {
//     const { className, style, tableClassName, tableStyle } = this.props;
//
//     return (
//       <div className={classNames(`${selectorPrefix}`, className.split(/\s+/))} style={{ ...style }}>
//         <table
//           className={classNames(`${selectorPrefix}-inner`, tableClassName.split(/\s+/))}
//           style={{ ...tableStyle }}
//         >
//           {this.renderHeader()}
//           {this.renderBody()}
//         </table>
//       </div>
//     );
//   }
// }
//
// Table.defaultProps = {
//   className: '',
//   style: {},
//   tableClassName: '',
//   tableStyle: {},
//   columns: [],
//   dataSource: [],
// };
//
// Table.propTypes = {
//   className: PropTypes.string,
//   style: PropTypes.object,
//   tableClassName: PropTypes.string,
//   tableStyle: PropTypes.object,
//   columns: PropTypes.arrayOf(
//     PropTypes.shape({
//       key: PropTypes.string,
//       dataIndex: PropTypes.string,
//       title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
//       width: PropTypes.string,
//       align: PropTypes.oneOf(['left', 'right', 'center']),
//       valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
//       render: PropTypes.func,
//       className: PropTypes.string,
//       style: PropTypes.object,
//     }),
//   ),
//   dataSource: PropTypes.arrayOf(PropTypes.object),
//   rowKey: PropTypes.string,
// };

export default memo(Table);
