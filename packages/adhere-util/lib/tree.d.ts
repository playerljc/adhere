import { IAntdTreeNode, IAntdTreeSelectNode, IFlatTreeArrNode } from './types';
declare const _default: {
    /**
     * treeToArray
     * @description tree数据转换成Array
     * @param treeData
     * @param config
     */
    treeToArray(treeData: IAntdTreeNode[], config: {
        parentIdAttr: string;
        rootParentId: string | number;
    }): any[];
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
    arrayToAntdTreeSelect(arr: any[], { keyAttr, titleAttr, rootParentId, parentIdAttr }: IFlatTreeArrNode): IAntdTreeSelectNode[];
    /**
     * getAncestor - 获取祖先
     * @param data
     * @param node
     * @param config
     */
    getAncestor(data: any[], node: any, config: {
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string | number;
    }): any[];
    /**
     * getDescendants
     * @description - 获取子孙
     */
    getDescendants(data: any[], node: any, config: {
        keyAttr: string;
        parentIdAttr: string;
        rootParentId: string | number;
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
        rootParentId: string | number;
        titleAttr: string;
    }): Array<IAntdTreeNode>;
    /**
     * findNodeByKey
     * @description - 根据keyAttr查找结点
     * @param treeData
     * @param val
     * @param config
     */
    findNodeByKey(treeData: IAntdTreeNode[], val: any, config: {
        keyAttr: string;
    }): IAntdTreeNode | null;
    /**
     * transformTreeData
     * @description - 转换一个treeData为antd的TreeData
     * @param treeData
     * @param onCallback
     * @return IAntdTreeNode[]
     */
    transformTreeData(treeData: any[], onCallback: (node: any) => IAntdTreeNode): IAntdTreeNode[];
};
export default _default;
