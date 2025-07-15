import React from 'react';
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
declare const Value: React.FC<ValueProps>;
export default Value;
