import { type FC } from 'react';
import type { RuleConfig } from './index';
export interface CustomProps {
    rule: RuleConfig;
    onChange: (value: RuleConfig) => void;
}
declare const Custom: FC<CustomProps>;
export default Custom;
