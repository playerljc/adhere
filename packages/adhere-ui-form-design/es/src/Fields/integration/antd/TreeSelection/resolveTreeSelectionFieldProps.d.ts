import type { TreeProps } from 'antd';
import type { I18nValue } from '../../../../types';
export type TreeSelectionFieldConfig = {
    showSearch?: boolean;
    searchPlaceholder?: I18nValue | string;
    searchAllowClear?: boolean;
    contentMaxHeight?: number;
    checkable?: boolean;
    checkStrictly?: boolean;
    defaultExpandAll?: boolean;
    autoExpandParent?: boolean;
    blockNode?: boolean;
    selectable?: boolean;
    multiple?: boolean;
    treeLine?: TreeProps['showLine'];
    virtual?: boolean;
    height?: number;
    draggable?: boolean;
    disabled?: boolean;
};
export declare const TREE_SELECTION_FIELD_NAMES: import("../../../../utils/filterTreeNodesByKeyword").TreeFieldNames;
export declare function pickTreeSelectionTreeProps(fieldProps: TreeSelectionFieldConfig): Pick<TreeProps, 'checkable' | 'checkStrictly' | 'defaultExpandAll' | 'autoExpandParent' | 'blockNode' | 'selectable' | 'multiple' | 'showLine' | 'virtual' | 'height' | 'draggable' | 'disabled'>;
export declare function omitTreeSelectionDesignKeys(fieldProps: Record<string, unknown>): {
    [x: string]: unknown;
};
