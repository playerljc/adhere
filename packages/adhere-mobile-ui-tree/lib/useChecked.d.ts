/**
 * useChecked
 */
declare function useChecked(): {
    handleCheck: ({ checkedKeys, checked, node, next }: {
        checkedKeys: any;
        checked: any;
        node: any;
        next: any;
    }) => void;
    updateParentChecked: ({ key, checked, checkedKeys, parentId, childrenData, next }: {
        key: any;
        checked: any;
        checkedKeys: any;
        parentId: any;
        childrenData: any;
        next: any;
    }) => void;
};
export default useChecked;
