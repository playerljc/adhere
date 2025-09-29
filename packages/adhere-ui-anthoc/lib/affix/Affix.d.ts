import { Affix } from 'antd';
import type { AffixProps } from 'antd';
declare const AffixHOC: typeof Affix & {
    defaultProps?: Partial<AffixProps>;
    override?: (props: Partial<AffixProps>) => Partial<AffixProps>;
};
export default AffixHOC;
