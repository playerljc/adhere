import { type FC } from 'react';
import type { RuleConfig } from './index';
export interface PatternProps {
    rule: RuleConfig;
    onChange: (value: RuleConfig) => void;
}
declare const Pattern: FC<PatternProps>;
export default Pattern;
