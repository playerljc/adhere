import { type FC } from 'react';
import type { RuleConfig } from './index';
export interface MaxProps {
    rule: RuleConfig;
    onChange: (value: RuleConfig) => void;
}
declare const Max: FC<MaxProps>;
export default Max;
