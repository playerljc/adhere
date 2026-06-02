import { type FC } from 'react';
import type { RuleConfig } from './index';
export interface MinProps {
    rule: RuleConfig;
    onChange: (value: RuleConfig) => void;
}
declare const Min: FC<MinProps>;
export default Min;
