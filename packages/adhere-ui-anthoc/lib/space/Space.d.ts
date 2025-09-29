import { Space } from 'antd';
import type { SpaceProps } from 'antd';
declare const SpaceHOC: typeof Space & {
    defaultProps?: Partial<SpaceProps>;
    override?: (props: Partial<SpaceProps>) => Partial<SpaceProps>;
};
export default SpaceHOC;
