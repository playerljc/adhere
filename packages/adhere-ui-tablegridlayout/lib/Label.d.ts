import React from 'react';
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
declare const Label: React.FC<LabelProps>;
export default Label;
