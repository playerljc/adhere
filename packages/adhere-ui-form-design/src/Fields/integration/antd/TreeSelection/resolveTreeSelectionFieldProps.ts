import type { TreeProps } from 'antd';

import type { I18nValue } from '../../../../types';
import { DEFAULT_TREE_FIELD_NAMES } from '../../../../utils/filterTreeNodesByKeyword';

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
  treeLine?: boolean | { showLeafIcon?: boolean };
  virtual?: boolean;
  height?: number;
  draggable?: boolean;
  disabled?: boolean;
};

export const TREE_SELECTION_FIELD_NAMES = DEFAULT_TREE_FIELD_NAMES;

export function pickTreeSelectionTreeProps(
  fieldProps: TreeSelectionFieldConfig,
): Pick<
  TreeProps,
  | 'checkable'
  | 'checkStrictly'
  | 'defaultExpandAll'
  | 'autoExpandParent'
  | 'blockNode'
  | 'selectable'
  | 'multiple'
  | 'showLine'
  | 'virtual'
  | 'height'
  | 'draggable'
  | 'disabled'
> {
  const { treeLine, ...rest } = fieldProps;

  return {
    checkable: rest.checkable,
    checkStrictly: rest.checkStrictly,
    defaultExpandAll: rest.defaultExpandAll,
    autoExpandParent: rest.autoExpandParent,
    blockNode: rest.blockNode,
    selectable: rest.selectable,
    multiple: rest.multiple,
    showLine: treeLine,
    virtual: rest.virtual,
    height: rest.height,
    draggable: rest.draggable,
    disabled: rest.disabled,
  };
}

export function omitTreeSelectionDesignKeys(fieldProps: Record<string, unknown>) {
  const {
    showSearch,
    searchPlaceholder,
    searchAllowClear,
    contentMaxHeight,
    treeOptions,
    tip,
    ...rest
  } = fieldProps;
  return rest;
}
