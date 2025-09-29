import { Space } from 'antd-mobile';
import type { SpaceProps } from 'antd-mobile';
declare const SpaceHOC: typeof Space & {
    defaultProps?: Partial<SpaceProps>;
    override?: (props: Partial<SpaceProps>) => Partial<SpaceProps>;
};
export default SpaceHOC;
