import { Tree } from 'antd';
import type { TreeProps } from 'antd';
declare const TreeHOC: typeof Tree & {
    defaultProps?: Partial<TreeProps>;
};
export default TreeHOC;
