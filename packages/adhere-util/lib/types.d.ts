export interface IPoint {
    x: number;
    y: number;
}
export interface ICircle {
    center: IPoint;
    radius: number;
}
export interface IAntdTreeNode {
    key: string;
    title: string;
    isLeaf: boolean;
    children?: IAntdTreeNode[];
    properties?: any;
}
export interface IAntdTreeSelectNode {
    key: string;
    label: string;
    value: string;
    isLeaf: boolean;
    children?: IAntdTreeNode[];
    properties?: any;
}
/**
 * IFlatTreeArrNode - 拉平的数组
 */
export interface IFlatTreeArrNode {
    keyAttr: string;
    titleAttr: string;
    parentIdAttr: string;
    rootParentId: string | number;
}
