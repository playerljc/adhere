import React from 'react';

// @ts-ignore
import { Link } from '@ctsj/router';

/**
 * LinkColumn
 * @param className
 * @param style
 * @param record
 * @param rowIndex
 * @param dataIndex
 * @param to
 * @param children
 * @returns {JSX.Element}
 */
export default ({ className, style, record, rowIndex, dataIndex, to, children }) => {
  return (
    <Link className={className ?? ''} style={style ?? {}} to={to}>
      {children ? children({ record, rowIndex, dataIndex }) : record[dataIndex]}
    </Link>
  );
};
