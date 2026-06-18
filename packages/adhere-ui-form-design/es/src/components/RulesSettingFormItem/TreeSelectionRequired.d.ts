import { type FC } from 'react';
import type { RuleConfig } from './index';
export interface TreeSelectionRequiredProps {
    rule: RuleConfig;
    onChange: (value: RuleConfig) => void;
}
declare const TreeSelectionRequired: FC<TreeSelectionRequiredProps>;
export default TreeSelectionRequired;
