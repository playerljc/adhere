import { Anchor } from 'antd';
import type { AnchorProps } from 'antd';
declare const AnchorHOC: typeof Anchor & {
    defaultProps?: Partial<AnchorProps>;
    override?: (props: Partial<AnchorProps>) => Partial<AnchorProps>;
};
export default AnchorHOC;
