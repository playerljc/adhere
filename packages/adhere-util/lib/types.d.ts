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
    title?: string;
    value?: string;
    isLeaf?: boolean;
    children?: IAntdTreeNode[];
    properties?: any;
}
export interface IAntdTreeSelectNode {
    key: string;
    label?: string;
    value?: string;
    isLeaf?: boolean;
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
/**
 * IUrlConfig
 * @description - Url库的parse和stringify的配置
 */
export interface IUrlConfig {
    ignoreInvalid: boolean;
    isEncode: boolean;
    isDecode: boolean;
}
/**
 * PrettyBytesOptions
 */
export interface PrettyBytesOptions {
    signed?: boolean;
    bits?: boolean;
    binary?: boolean;
    locale?: boolean | string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    space?: boolean;
}
