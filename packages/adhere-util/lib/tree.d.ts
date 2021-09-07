declare const _default: {
    /**
     * arrayToAntdTree - array转换成Tree
     * @param arr
     * @param keyAttr - id的属性
     * @param titleAttr - title的属性
     * @param rootParentId - root的parentId值
     */
    arrayToAntdTree(arr: any[], { keyAttr, titleAttr, rootParentId, }: {
        keyAttr: string;
        titleAttr: string;
        rootParentId: string | number;
    }): Array<{
        key: string;
        title: string;
        isLeaf: boolean;
        children?: any[];
        properties?: any;
    }>;
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
    }): Array<{
        key: string;
        title: string;
        isLeaf: boolean;
        children?: any[];
        properties?: any;
    }>;
};
export default _default;
