import { IndexBar } from 'antd-mobile';
import type { IndexBarProps } from 'antd-mobile';
declare const IndexBarHOC: typeof IndexBar & {
    defaultProps?: Partial<IndexBarProps>;
    override?: (props: Partial<IndexBarProps>) => Partial<IndexBarProps>;
};
export default IndexBarHOC;
