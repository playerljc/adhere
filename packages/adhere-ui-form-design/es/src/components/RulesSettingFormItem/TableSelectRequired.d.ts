import { type FC } from 'react';
import type { RuleConfig } from './index';
export interface TableSelectRequiredProps {
    rule: RuleConfig;
    onChange: (value: RuleConfig) => void;
}
declare const TableSelectRequired: FC<TableSelectRequiredProps>;
export default TableSelectRequired;
