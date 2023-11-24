/// <reference types="react" />
import type { TreeProps } from 'antd';
import { DisplayNameInternal } from '../types';
declare const TreeHOC: DisplayNameInternal<(<T extends import("rc-tree").BasicDataNode | import("antd").TreeDataNode = import("antd").TreeDataNode>(props: TreeProps<T> & {
    children?: import("react").ReactNode;
} & {
    ref?: import("react").Ref<import("rc-tree/lib/Tree").default<import("antd").TreeDataNode>> | undefined;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
    TreeNode: import("react").FC<import("rc-tree").TreeNodeProps<import("antd").TreeDataNode>>;
    DirectoryTree: (<T_1 extends import("rc-tree").BasicDataNode | import("antd").TreeDataNode = import("antd").TreeDataNode>(props: import("antd/es/tree").DirectoryTreeProps<T_1> & {
        children?: import("react").ReactNode;
    } & {
        ref?: import("react").Ref<import("rc-tree/lib/Tree").default<import("antd").TreeDataNode>> | undefined;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        displayName?: string | undefined;
    };
} & {
    defaultProps?: Partial<TreeProps<import("antd").TreeDataNode>> | undefined;
}>;
export default TreeHOC;
