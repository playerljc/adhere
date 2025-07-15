import classNames from 'classnames';
import React from 'react';

import { selectorPrefix } from './TableGridLayout';
import type { ValueProps } from './types';

/**
 * Value component for table grid layout
 *
 * @description Renders a table cell with value styling
 * @param className
 * @param children
 * @param props - Component props
 * @returns Value component
 *
 * @example
 * ```tsx
 * <TableGridLayout.Value className="custom-value">
 *   Field Value
 * </TableGridLayout.Value>
 * ```
 */
const Value: React.FC<ValueProps> = ({ className, children, ...props }) => {
  return (
    <td className={classNames(`${selectorPrefix}-table-row-value`, className)} {...props}>
      {children}
    </td>
  );
};

Value.displayName = 'Value';

export default Value;
