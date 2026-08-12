import { Tree } from 'antd';
import type { DisplayNameInternal, TreeHOCProps } from '../types';
declare const TreeHOC: typeof Tree & {
    defaultProps?: Partial<TreeHOCProps>;
    override?: (props: Partial<TreeHOCProps>) => Partial<TreeHOCProps>;
};
declare const _default: DisplayNameInternal<typeof TreeHOC> & typeof Tree;
export default _default;
