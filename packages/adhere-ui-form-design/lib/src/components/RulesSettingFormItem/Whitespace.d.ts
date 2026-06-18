import { type FC } from 'react';
import type { RuleConfig } from './index';
export interface WhitespaceProps {
    rule: RuleConfig;
    onChange: (value: RuleConfig) => void;
}
declare const Whitespace: FC<WhitespaceProps>;
export default Whitespace;
