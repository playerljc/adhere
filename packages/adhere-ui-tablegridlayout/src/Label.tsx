import classNames from 'classnames';
import React from 'react';

import { selectorPrefix } from './TableGridLayout';
import type { LabelProps } from './types';

/**
 * Label component for table grid layout
 *
 * @description Renders a table cell with label styling
 * @param className
 * @param children
 * @param props - Component props
 * @returns Label component
 *
 * @example
 * ```tsx
 * <TableGridLayout.Label className="custom-label">
 *   Field Name:
 * </TableGridLayout.Label>
 * ```
 */
const Label: React.FC<LabelProps> = ({ className, children, ...props }) => {
  return (
    <td className={classNames(`${selectorPrefix}-table-row-label`, className)} {...props}>
      {children}
    </td>
  );
};

Label.displayName = 'Label';

export default Label;
