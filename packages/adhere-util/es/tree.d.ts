import { IAntdTreeNode, IAntdTreeSelectNode, IFlatTreeArrNode } from './types';
export interface TreeUtilType {
    treeToArray: (treeData: (IAntdTreeNode | IAntdTreeSelectNode)[], config: {
        parentIdAttr: string;
        rootParentId: string | number;
    }, keyAttr?: string) => {
        [props: string]: any;
        children?: any[];
        key: string;
    }[];
    arrayToAntdTree: (arr: {
        [props: string]: any;
        children?: any[];
        isLeaf?: boolean;
        properties?: any;
    }[], config: IFlatTreeArrNode) => (IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[];
    arrayToAntdTreeSelect: (arr: any[], config: IFlatTreeArrNode) => (IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[];
    getAncestor: (data: any[], node: any, config: Omit<IFlatTreeArrNode, 'titleAttr'>) => any[];
    getDescendants: (data: any[], node: any, config: Omit<IFlatTreeArrNode, 'titleAttr'>) => any[];
    filterTreeByFlatData: (treeFlatNodes: any[], kw: string, config: IFlatTreeArrNode & {
        filterAttr: string;
    }, filter?: (nodeData: any) => boolean) => (IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[];
    filterTree: (treeNodes: (IAntdTreeNode | IAntdTreeSelectNode)[], kw: string, config: IFlatTreeArrNode & {
        filterAttr: string;
    }, filter?: (nodeData: any) => boolean) => (IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[];
    findNodeByKey: (treeData: (IAntdTreeNode | IAntdTreeSelectNode)[], val: any, config: {
        keyAttr: string;
    }) => IAntdTreeNode | IAntdTreeSelectNode | null;
    findParentNodeByKey: (treeData: (IAntdTreeNode | IAntdTreeSelectNode)[], val: any, config: {
        keyAttr: string;
    }) => IAntdTreeNode | IAntdTreeSelectNode | null | undefined;
    transformTreeData: (treeData: any[], childrenAttr: string, onCallback: (node: any) => IAntdTreeNode | IAntdTreeSelectNode) => (IAntdTreeNode | IAntdTreeSelectNode)[];
    getLeafNodesByIndex: (nodes: {
        [props: string]: any;
    }[], childrenAttr?: string, indexAttr?: string) => {
        [props: string]: any;
    }[];
    getLeafNodes: (nodes: {
        [props: string]: any;
    }[], childrenAttr?: string) => {
        [props: string]: any;
    }[];
    getLeafNodeByFlatData: (arr: any[], config: IFlatTreeArrNode) => {
        [props: string]: any;
    }[];
    getLeafNodeByFlatDataToIndex: (arr: any[], indexAttr?: string) => {
        [props: string]: any;
    }[];
    getTreeLevel: (nodes: (IAntdTreeNode | IAntdTreeSelectNode)[], keyAttr?: string) => number;
    getTreeLevelByIndex: (nodes: (IAntdTreeNode | IAntdTreeSelectNode)[], indexAttr: string, keyAttr: string) => number;
    getTreeLevelToFlat: (flatArr: any[], config: IFlatTreeArrNode) => number;
    getTreeLevelByIndexToFlat: (flatArr: any[], config: IFlatTreeArrNode, indexAttr: string) => number;
    getNodeLevel: (nodes: (IAntdTreeNode | IAntdTreeSelectNode)[], node: IAntdTreeNode | IAntdTreeSelectNode, keyAttr: string) => number;
    completionIncompleteFlatArr: (treeFlatNodes: any[], incompleteTreeFlatNodes: any, config: IFlatTreeArrNode) => (IFlatTreeArrNode & Omit<IAntdTreeNode | IAntdTreeSelectNode, 'value'>)[];
    excludeAntdTreeNodes: (nodes: IAntdTreeNode[], excludeKeys: string[], keyAttr?: string) => (IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[];
    excludeAntdSelectTreeNodes: (nodes: IAntdTreeSelectNode[], excludeKeys: string[], keyAttr?: string) => (IFlatTreeArrNode & Omit<IAntdTreeSelectNode, 'value'>)[];
}
declare const TreeUtil: TreeUtilType;
export default TreeUtil;
