import { type FC } from 'react';
import type { RuleConfig } from './index';
export interface RequiredProps {
    rule: RuleConfig;
    onChange: (value: RuleConfig) => void;
}
declare const Required: FC<RequiredProps>;
export default Required;
