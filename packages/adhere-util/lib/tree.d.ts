import { IAntdTreeNode, IFlatTreeArrNode, IAntdTreeSelectNode } from './types';
declare const _default: {
    /**
     * arrayToAntdTree - array转换成Tree
     * @param arr
     * @param keyAttr - id的属性
     * @param titleAttr - title的属性
     * @param parentIdAttr - parentId的属性
     * @param rootParentId - root的parentId值
     */
    arrayToAntdTree(arr: any[], { keyAttr, titleAttr, rootParentId, parentIdAttr }: IFlatTreeArrNode): Array<IAntdTreeNode>;
    /**
     * arrayToAntdTreeSelect - array转换成TreeSelect
     * @param arr
     * @param keyAttr - id的属性
     * @param titleAttr - title的属性
     * @param parentIdAttr - parentId的属性
     * @param rootParentId - root的parentId值
     */
    arrayToAntdTreeSelect(arr: any[], { keyAttr, titleAttr, rootParentId, parentIdAttr }: IFlatTreeArrNode): Array<IAntdTreeSelectNode>;
    /**
     * getAncestor - 获取祖先
     * @param data
     * @param node
     * @param config
     */
    getAncestor(data: any[], node: any, config: {
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string;
    }): any[];
    /**
     * getDescendants
     * @description - 获取子孙
     */
    getDescendants(data: any[], node: any, config: {
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string;
    }): any[];
    /**
     * filterTree - 本地过滤tree
     * @param data
     * @param kw
     * @param config
     */
    filterTree(data: any[], kw: string, config: {
        filterAttr: string;
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string;
        titleAttr: string;
    }): Array<IAntdTreeNode>;
};
export default _default;
