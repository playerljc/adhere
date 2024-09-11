import { Space } from 'antd';
import type { SpaceProps } from 'antd';
declare const SpaceHOC: typeof Space & {
    defaultProps?: Partial<SpaceProps>;
};
export default SpaceHOC;
